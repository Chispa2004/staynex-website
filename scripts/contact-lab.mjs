import {createServer} from 'node:http';
import http from 'node:http';
import {load} from './load-contact.mjs';
// Standalone loopback-only laboratory. Never imported by Next or executed by build/start.
// The only socket it opens outbound is the local Next server; provider calls are doubles.
const {sendPresentation}=await load('lib/contact-server.ts');
const config={origin:'https://fixture.invalid',hostname:'fixture.invalid',apiKey:'synthetic',from:'from@example.invalid',to:'to@example.invalid',siteKey:'synthetic',challengeSecret:'synthetic'};
let mode='accepted',attempts=0,mailCalls=0;const used=new Set();
const modes=['accepted','rejected','unconfirmed','timeout','challenge','unavailable','slow'];
const widget=`window.turnstile={render(node,options){const button=document.createElement('button');button.type='button';button.textContent='Validación simulada · solo laboratorio';button.onclick=()=>{options.callback(crypto.randomUUID());button.disabled=true;button.textContent='Validación simulada completada';};node.appendChild(button);return 'local';},remove(){}};`;
const server=createServer(async(req,res)=>{
 if(!['127.0.0.1:3342','localhost:3342'].includes(req.headers.host)){res.writeHead(403).end();return;}
 const url=new URL(req.url,'http://127.0.0.1:3342');
 if(url.pathname==='/__fixture'){
  if(modes.includes(url.searchParams.get('mode'))){mode=url.searchParams.get('mode');attempts=0;mailCalls=0;used.clear();}
  res.setHeader('Content-Type','text/html; charset=utf-8');res.end(`<h1>Laboratorio local: ningún correo real</h1><p>Escenario: ${mode}. Solicitudes: ${attempts}. Intentos simulados de correo: ${mailCalls}.</p>${modes.map(m=>`<a href="/__fixture?mode=${m}">${m}</a> `).join('')}<p><a href="/#request-demo">Abrir formulario</a></p>`);return;
 }
 if(url.pathname==='/__fixture-widget.js'){res.setHeader('Content-Type','text/javascript');res.end(widget);return;}
 if(url.pathname==='/api/presentation-request'){
  res.setHeader('Content-Type','application/json');res.setHeader('Cache-Control','no-store');
  if(req.method==='GET'){res.end(JSON.stringify({enabled:mode!=='unavailable',siteKey:'synthetic'}));return;}
  let body='';for await(const chunk of req){body+=chunk;if(body.length>16384){res.writeHead(413).end();return;}}
  attempts++;
  const result=await sendPresentation(JSON.parse(body),mode==='unavailable'?null:config,async(url,options)=>{
   if(url.includes('siteverify')){const token=JSON.parse(options.body).response;const success=mode!=='challenge'&&!used.has(token);used.add(token);return Response.json({success,hostname:'fixture.invalid',action:'presentation'});}
   mailCalls++;
   if(mode==='timeout'){await new Promise(r=>setTimeout(r,16000));throw Error('synthetic timeout');}
   if(mode==='slow')await new Promise(r=>setTimeout(r,5000));
   if(mode==='rejected')return Response.json({}, {status:422});
   if(mode==='unconfirmed')return Response.json({}, {status:503});
   return Response.json({id:'simulated-'+mailCalls});
  });res.statusCode=result.status;res.end(JSON.stringify(result.body));return;
 }
 const upstream=http.request({hostname:'127.0.0.1',port:3341,path:req.url,method:req.method,headers:{...req.headers,'accept-encoding':'identity',host:'127.0.0.1:3341'}},response=>{
  const chunks=[];response.on('data',chunk=>chunks.push(chunk));response.on('end',()=>{
   const headers={...response.headers};delete headers['content-length'];delete headers['content-encoding'];
   let body=Buffer.concat(chunks);
   if(String(headers['content-type']).match(/javascript|text\/html/))body=Buffer.from(body.toString().replaceAll('https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit','/__fixture-widget.js'));
   res.writeHead(response.statusCode,headers);res.end(body);
  });
 });upstream.on('error',()=>res.writeHead(502).end('Start the local Next build on 3341'));req.pipe(upstream);
});
server.listen(3342,'127.0.0.1',()=>console.log('Synthetic contact laboratory: http://127.0.0.1:3342/__fixture'));
