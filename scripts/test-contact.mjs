import test from 'node:test';
import assert from 'node:assert/strict';
import {load} from './load-contact.mjs';
const {validateRequest}=await load('lib/presentation-request.ts');
const {contactConfig,contactMailto,sendPresentation}=await load('lib/contact-server.ts');
const {createSubmission,attemptStorageKey}=await load('lib/contact-submission.ts');
const {POST,GET}=await load('app/api/presentation-request/route.ts');
const valid={name:'Ana Sintética',company:'Hotel Ejemplo',email:'ana@example.invalid',message:'<script>not HTML</script>\nSegunda línea',operationId:'b1a93608-d601-4dba-89ad-d9017fb21fbd',challengeToken:'synthetic-token'};
const env={CONTACT_ENABLED:'true',CONTACT_RECIPIENT_CONFIRMED:'true',CONTACT_PRIVACY_REVIEWED:'true',CONTACT_DEPLOYMENT_ENV:'preview',VERCEL_ENV:'preview',CONTACT_ORIGIN:'https://commercial.example.invalid',CONTACT_RESEND_API_KEY:'synthetic-secret',CONTACT_FROM:'from@example.invalid',CONTACT_TO:'to@example.invalid',CONTACT_TURNSTILE_SITE_KEY:'synthetic-site',CONTACT_TURNSTILE_SECRET_KEY:'synthetic-secret'};
const config=contactConfig(env);
const json=(data,status=200)=>Response.json(data,{status});
const proof={success:true,hostname:'commercial.example.invalid',action:'presentation'};
const never=async()=>{throw Error('Unexpected outbound attempt');};
function provider(response=json({id:'synthetic-receipt'}),challenge=proof){
 const calls=[];
 return {calls,fetch:async(url,options)=>{calls.push({url,options});return url.includes('siteverify')?json(challenge):response;}};
}
test('HTTP: origin, format, bounded body, absent configuration, GET exposes no secrets',async()=>{
 const req=(body,headers={})=>new Request('http://localhost/api/presentation-request',{method:'POST',headers:{origin:'http://localhost','content-type':'application/json',...headers},body});
 assert.equal((await POST(req(JSON.stringify(valid),{origin:'https://other.invalid'}))).status,403);
 assert.equal((await POST(req(JSON.stringify(valid),{origin:'null'}))).status,403);
 assert.equal((await POST(req(JSON.stringify(valid),{host:'127.0.0.1:3341',origin:'http://127.0.0.1:3341'}))).status,503);
 assert.equal((await POST(req('{}',{'content-type':'text/plain'}))).status,415);
 assert.equal((await POST(req('{'))).status,400);
 assert.equal((await POST(req('x'.repeat(17000)))).status,413);
 assert.equal((await POST(req('{}'))).status,422);
 const res=await POST(req(JSON.stringify(valid)));assert.equal(res.status,503);assert.equal(res.headers.get('cache-control'),'no-store');
 assert.deepEqual(await (await GET(new Request('https://commercial.example.invalid/api/presentation-request'))).json(),{enabled:false,siteKey:null,emailLink:null});
});
test('invalid fields, types, limits and header injection never reach any transport',async()=>{
 for(const input of [{}, {...valid,name:'   '},{...valid,email:'bad'},{...valid,company:9},{...valid,message:'x'.repeat(2001)},{...valid,name:'Ana\r\nBcc: other'},{...valid,email:'a@b.test,c@d.test'},{...valid,email:'Ana <a@b.test>'},{...valid,email:'a@b.test\r\n'},{...valid,message:'a\x00b'}]){
  assert.equal((await sendPresentation(input,config,never)).status,422);
 }
 const {message,...optional}=valid;assert.deepEqual(validateRequest(optional).errors,{});
 assert.equal((await sendPresentation({...valid,website:'bot'},config,never)).status,400);
});
test('configuration is fail-closed, server-only, scoped to exact environment',()=>{
 assert.ok(config);
 for(const key of Object.keys(env)){const other={...env};delete other[key];assert.equal(contactConfig(other),null,key);}
 assert.equal(contactConfig({...env,VERCEL_ENV:'production'}),null);
 assert.equal(contactConfig({...env,CONTACT_ORIGIN:'https://example.invalid/path'}),null);
 assert.equal(contactConfig({...env,CONTACT_TO:'one@example.invalid,two@example.invalid'}),null);
});
test('single-use challenge gate rejects bots, mismatched hostname/action, missing/oversize tokens and verifier errors before mail',async()=>{
 for(const challenge of [{success:false},{...proof,hostname:'other.invalid'},{...proof,action:'login'}]){
  const fake=provider(undefined,challenge);assert.equal((await sendPresentation(valid,config,fake.fetch)).body.code,'challenge');assert.equal(fake.calls.length,1);
 }
 for(const token of ['',undefined,'x'.repeat(2049)])assert.equal((await sendPresentation({...valid,challengeToken:token},config,never)).body.code,'challenge');
 assert.equal((await sendPresentation(valid,config,async()=>{throw Error('timeout');})).body.code,'challenge');
 const used=new Set();let mail=0;
 const fetcher=async(url,options)=>{if(url.includes('siteverify')){const token=JSON.parse(options.body).response;const success=!used.has(token);used.add(token);return json({...proof,success});}mail++;return json({id:'one'});};
 assert.equal((await sendPresentation(valid,config,fetcher)).status,200);
 assert.equal((await sendPresentation(valid,config,fetcher)).status,403);assert.equal(mail,1);
});
test('fixed envelope, plain text, Reply-To visitor, provider receipt and stable idempotency key',async()=>{
 const fake=provider();const result=await sendPresentation({...valid,to:'relay@example.invalid',from:'attacker@example.invalid',subject:'injected'},config,fake.fetch);
 assert.equal(result.body.code,'accepted');assert.equal(result.body.receiptId,'synthetic-receipt');
 const sent=fake.calls[1];const body=JSON.parse(sent.options.body);
 assert.equal(sent.url,'https://api.resend.com/emails');assert.deepEqual(body.to,['to@example.invalid']);assert.equal(body.from,'from@example.invalid');assert.equal(body.reply_to,valid.email);
 assert.equal(body.subject,'Hospedios — Solicitud de presentación');assert.equal(body.html,undefined);assert.ok(body.text.includes(valid.message));
 assert.equal(sent.options.headers['Idempotency-Key'],'presentation/'+valid.operationId);assert.equal(fake.calls.length,2);
 const again=provider();await sendPresentation(valid,config,again.fetch);assert.equal(again.calls[1].options.headers['Idempotency-Key'],sent.options.headers['Idempotency-Key']);
});
test('missing config, known rejection, rate limit, timeout, server error and malformed receipt remain distinct',async()=>{
 assert.equal((await sendPresentation(valid,null,never)).body.code,'unavailable');
 for(const status of [400,401,403,404,413,422,429])assert.equal((await sendPresentation(valid,config,provider(json({},status)).fetch)).body.code,'rejected');
 for(const response of [json({},500),json({},409),json({}),new Response('not JSON')])assert.equal((await sendPresentation(valid,config,provider(response).fetch)).body.code,'unconfirmed');
 let calls=0;
 const result=await sendPresentation(valid,config,async()=>{if(++calls===1)return json(proof);throw new DOMException('timeout','TimeoutError');});
 assert.equal(result.body.code,'unconfirmed');assert.equal(calls,2);
});
function browser(transport,store=new Map()){
 const states=[];const storage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)};
 const controller=createSubmission({storage,transport,id:()=>valid.operationId,onState:s=>states.push(s)});
 return {controller,states,store};
}
test('client double click dispatched once; success requires provider receipt; input remains unchanged',async()=>{
 let release;let calls=0;const pending=new Promise(r=>release=r);const b=browser(async()=>{calls++;await pending;return json({ok:true,code:'accepted',receiptId:'local'});});
 const copy=structuredClone(valid);const first=b.controller.submit(valid);await b.controller.submit(valid);
 assert.equal(calls,1);assert.deepEqual(b.states,['sending']);release();await first;
 assert.deepEqual(b.states,['sending','success']);assert.deepEqual(valid,copy);assert.equal(b.controller.isLocked(),true);
});
test('known rejection allows manual recovery; never resets fields or retries automatically',async()=>{
 let calls=0;const b=browser(async()=>++calls===1?json({ok:false,code:'rejected'},502):json({ok:true,code:'accepted',receiptId:'local'}));
 await b.controller.submit(valid);assert.equal(calls,1);assert.equal(b.controller.isLocked(),false);assert.equal(b.store.size,0);
 await b.controller.submit(valid);assert.equal(calls,2);assert.equal(b.states.at(-1),'success');
});
test('lost response/timeout/malformed success locks retries including reload, without storing personal data',async()=>{
 for(const transport of [async()=>{throw Error('timeout');},async()=>json({ok:true}),async()=>json({ok:false,code:'unconfirmed'},502)]){
  const b=browser(transport);await b.controller.submit(valid);assert.equal(b.states.at(-1),'unconfirmed');assert.equal(b.controller.isLocked(),true);
  const reloaded=browser(never,b.store);reloaded.controller.restore();await reloaded.controller.submit(valid);assert.deepEqual(reloaded.states,['unconfirmed']);
  assert.deepEqual([...b.store],[[attemptStorageKey,'unconfirmed']]);
 }
});
test('denied session storage does not dispatch; success reload does not resubmit',async()=>{
 const states=[];const controller=createSubmission({storage:{getItem(){return null;},setItem(){throw Error('denied');},removeItem(){}},transport:never,id:()=>valid.operationId,onState:s=>states.push(s)});
 await controller.submit(valid);assert.deepEqual(states,['storage']);
 const b=browser(never,new Map([[attemptStorageKey,'success']]));b.controller.restore();await b.controller.submit(valid);assert.deepEqual(b.states,['success']);
});

test('mailto is absent until separately confirmed and explicitly enabled on the exact host',()=>{
 assert.equal(contactMailto(env,'commercial.example.invalid'),null);
 const enabled={...env,CONTACT_MAILTO_ENABLED:'true'};
 assert.ok(contactMailto(enabled,'commercial.example.invalid').startsWith('mailto:to%40example.invalid?subject='));
 assert.equal(contactMailto({...enabled,CONTACT_RECIPIENT_CONFIRMED:'false'},'commercial.example.invalid'),null);
 assert.equal(contactMailto(enabled,'other.invalid'),null);
});
test('configured real HTTP handler enforces exact origin and reaches only simulated transports',async()=>{
 const snapshot=Object.fromEntries(Object.keys(env).map(key=>[key,process.env[key]]));const previousFetch=globalThis.fetch;
 const fake=provider();
 try{
  Object.assign(process.env,env);globalThis.fetch=fake.fetch;
  const get=await GET(new Request('https://commercial.example.invalid/api/presentation-request'));
  assert.deepEqual(await get.json(),{enabled:true,siteKey:'synthetic-site',emailLink:null});
  const req=origin=>new Request('https://commercial.example.invalid/api/presentation-request',{method:'POST',headers:{origin,host:new URL(origin).host,'content-type':'application/json'},body:JSON.stringify(valid)});
  assert.equal((await POST(req('https://other.invalid'))).status,503);assert.equal(fake.calls.length,0);
  const response=await POST(req(env.CONTACT_ORIGIN));assert.equal(response.status,200);assert.equal((await response.json()).code,'accepted');assert.equal(fake.calls.length,2);
 }finally{globalThis.fetch=previousFetch;for(const [key,value] of Object.entries(snapshot)){if(value===undefined)delete process.env[key];else process.env[key]=value;}}
});
