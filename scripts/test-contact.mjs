import test from 'node:test';
import assert from 'node:assert/strict';
// Execute the real HTTP handler with native Request/Response, with no listening socket or delivery.
test('HTTP boundary: origin, content type, bounded body, malformed JSON and unconfigured receipt',async()=>{
 const {readFileSync}=await import('node:fs');
 const {stripTypeScriptTypes}=await import('node:module');
 const source=readFileSync(new URL('../app/api/presentation-request/route.ts',import.meta.url),'utf8')
   .replace('@/lib/presentation-request',new URL('../lib/presentation-request.ts',import.meta.url).href);
 const {POST}=await import('data:text/javascript;base64,'+Buffer.from(stripTypeScriptTypes(source)).toString('base64'));
 const req=(body,headers={})=>new Request('http://localhost/api/presentation-request',{method:'POST',headers:{origin:'http://localhost','content-type':'application/json',...headers},body});
 assert.equal((await POST(req(JSON.stringify(valid),{origin:'https://other.invalid'}))).status,403);
 assert.equal((await POST(req(JSON.stringify(valid),{origin:'null'}))).status,403);
 const proxied=new Request('http://localhost:3341/api/presentation-request',{method:'POST',headers:{host:'127.0.0.1:3341',origin:'http://127.0.0.1:3341','content-type':'application/json'},body:JSON.stringify(valid)});
 assert.equal((await POST(proxied)).status,503);
 assert.equal((await POST(req('{}',{'content-type':'text/plain'}))).status,415);
 assert.equal((await POST(req('{'))).status,400);
 assert.equal((await POST(req('x'.repeat(17000)))).status,413);
 assert.equal((await POST(req('{}'))).status,422);
 const res=await POST(req(JSON.stringify(valid)));
 assert.equal(res.status,503);assert.equal((await res.json()).ok,false);assert.equal(res.headers.get('cache-control'),'no-store');
});
import {receivePresentation,validateRequest} from '../lib/presentation-request.ts';
const valid={name:'Ana Sintética',company:'Hotel Ejemplo',email:'ana@example.invalid',message:''};
test('invalid or whitespace fields never reach the transport',async()=>{
 let calls=0;const transport=async()=>{calls++;return{accepted:true,receiptId:'synthetic'};};
 for(const input of [{}, {...valid,name:'   '},{...valid,email:'bad'},{...valid,company:9},{...valid,message:'x'.repeat(2001)}]){
  assert.equal((await receivePresentation(input,transport)).status,422);
 }
 assert.equal(calls,0);
});
test('only durable receipt yields success; absent, failed and uncertain transports fail honestly',async()=>{
 assert.equal((await receivePresentation(valid)).status,503);
 assert.equal((await receivePresentation(valid,async()=>{throw Error('synthetic');})).status,502);
 assert.equal((await receivePresentation(valid,async()=>({accepted:true}))).status,502);
 assert.equal((await receivePresentation(valid,async()=>({accepted:false,receiptId:'x'}))).status,502);
 const seen=[];const result=await receivePresentation({...valid,name:' Ana Sintética '},async(data)=>{seen.push(data);return{accepted:true,receiptId:'local-1'};});
 assert.equal(result.status,200);assert.equal(result.body.receiptId,'local-1');assert.equal(seen[0].name,'Ana Sintética');
});
test('optional message and honeypot, no provider configured',async()=>{
 const {message,...input}=valid;assert.deepEqual(validateRequest(input).errors,{});
 let called=false;
 assert.equal((await receivePresentation({...valid,website:'spam'},async()=>{called=true;return{accepted:true,receiptId:'x'};})).status,400);
 assert.equal(called,false);
});
