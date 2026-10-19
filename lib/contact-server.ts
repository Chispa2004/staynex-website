// Server entry points only. No configuration or secrets are exported to the client.
import { isMailbox, validateRequest, type RequestData } from "./presentation-request";

type Env = Record<string,string|undefined>;
export function contactMailto(env:Env,host:string,recovery=false):string|null {
  if(env.CONTACT_MAILTO_ENABLED!=="true"||env.CONTACT_RECIPIENT_CONFIRMED!=="true"||env.CONTACT_PRIVACY_REVIEWED!=="true"||!env.CONTACT_TO||!isMailbox(env.CONTACT_TO)) return null;
  try {
    const origin=new URL(env.CONTACT_ORIGIN||"");
    if(origin.origin!==env.CONTACT_ORIGIN||origin.protocol!=="https:"||origin.host!==host||env.CONTACT_DEPLOYMENT_ENV!==(env.VERCEL_ENV||"development"))return null;
    const subject=recovery?"Hospedios — Consulta sobre una solicitud anterior":"Hospedios — Solicitud de presentación";
    return `mailto:${encodeURIComponent(env.CONTACT_TO)}?subject=${encodeURIComponent(subject)}`;
  }catch{return null;}
}
export type ContactConfig = { origin:string; hostname:string; apiKey:string; from:string; to:string; siteKey:string; challengeSecret:string };
export function contactConfig(env:Env): ContactConfig|null {
  // Activation requires a confirmed recovery contact; never strand an uncertain submission.
  if(env.CONTACT_MAILTO_ENABLED!=="true" || env.CONTACT_ENABLED!=="true" || env.CONTACT_RECIPIENT_CONFIRMED!=="true" || env.CONTACT_PRIVACY_REVIEWED!=="true") return null;
  const { CONTACT_ORIGIN:origin, CONTACT_RESEND_API_KEY:apiKey, CONTACT_FROM:from, CONTACT_TO:to,
    CONTACT_TURNSTILE_SITE_KEY:siteKey, CONTACT_TURNSTILE_SECRET_KEY:challengeSecret }=env;
  if(!origin||!apiKey||!from||!to||!siteKey||!challengeSecret||!isMailbox(from)||!isMailbox(to)) return null;
  try {
    const url=new URL(origin);
    if(url.origin!==origin || url.protocol!=="https:") return null;
    // Preview and Production are separate opt-ins, even if someone shares variables.
    if(env.CONTACT_DEPLOYMENT_ENV!==(env.VERCEL_ENV||"development")) return null;
    return {origin,hostname:url.hostname,apiKey,from,to,siteKey,challengeSecret};
  } catch {return null;}
}

export type ContactResult = {status:number; body:{ok:boolean; code:string; receiptId?:string; errors?:ReturnType<typeof validateRequest>["errors"]}};
const result=(status:number,code:string):ContactResult=>({status,body:{ok:false,code}});
const operationPattern=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export type Fetcher = typeof fetch;

export async function sendPresentation(input:unknown, config:ContactConfig|null, fetcher:Fetcher=fetch):Promise<ContactResult> {
  const {data,errors}=validateRequest(input);
  if(Object.keys(errors).length) return {status:422,body:{ok:false,code:"invalid",errors}};
  const fields=input as Record<string,unknown>;
  if(fields.website) return result(400,"rejected");
  if(!config) return result(503,"unavailable");
  if(typeof fields.operationId!=="string"||!operationPattern.test(fields.operationId)) return result(400,"rejected");
  const token=fields.challengeToken;
  if(typeof token!=="string"||!token||token.length>2048) return result(403,"challenge");
  // Distributed abuse gate: Cloudflare validates single-use, short-lived tokens.
  // No in-memory counter is represented as a serverless/global rate limit.
  try {
    const response=await fetcher("https://challenges.cloudflare.com/turnstile/v0/siteverify",{
      method:"POST",headers:{"Content-Type":"application/json"},redirect:"error",
      body:JSON.stringify({secret:config.challengeSecret,response:token}),signal:AbortSignal.timeout(4000)
    });
    const proof=await response.json();
    if(!response.ok||proof.success!==true||proof.hostname!==config.hostname||proof.action!=="presentation") return result(403,"challenge");
  } catch {return result(503,"challenge");} // Mail transport has not been called.
  return deliver(data,fields.operationId,config,fetcher);
}

async function deliver(data:RequestData, operationId:string, config:ContactConfig, fetcher:Fetcher):Promise<ContactResult> {
  try {
    const response=await fetcher("https://api.resend.com/emails",{
      method:"POST",redirect:"error",signal:AbortSignal.timeout(7000),
      headers:{Authorization:`Bearer ${config.apiKey}`,"Content-Type":"application/json","Idempotency-Key":`presentation/${operationId}`},
      // Text only, fixed envelope/subject, no raw headers or user-provided HTML.
      body:JSON.stringify({from:config.from,to:[config.to],reply_to:data.email,
        subject:"Hospedios — Solicitud de presentación",
        text:`Nombre: ${data.name}\nHotel o empresa: ${data.company}\nCorreo: ${data.email}\n\nMensaje:\n${data.message||"(Sin mensaje)"}\n\nReferencia: ${operationId}`})
    });
    // Conflict/concurrency, 5xx, unexpected response, malformed success: uncertain.
    if([400,401,403,404,413,422,429].includes(response.status)) return result(response.status===429?429:502,"rejected");
    if(!response.ok) return result(502,"unconfirmed");
    const receipt=await response.json();
    if(typeof receipt.id!=="string"||!receipt.id.trim()) return result(502,"unconfirmed");
    return {status:200,body:{ok:true,code:"accepted",receiptId:receipt.id}};
  } catch {return result(502,"unconfirmed");} // Never retry or log content/provider payloads.
}
