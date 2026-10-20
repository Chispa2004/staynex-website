import { contactConfig, contactMailto, sendPresentation } from "@/lib/contact-server";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(request:Request) {
  const config=contactConfig(process.env);
  const host=request.headers.get("host")||new URL(request.url).host;
  const enabled=!!config && new URL(config.origin).host===host;
  return Response.json({enabled,siteKey:enabled?config!.siteKey:null,emailLink:contactMailto(process.env,host),recoveryLink:contactMailto(process.env,host,true)},{headers:{"Cache-Control":"no-store"}});
}
export async function POST(request:Request) {
  const headers={"Cache-Control":"no-store"};
  // Next's internal request URL can use localhost behind its listener/proxy.
  // Compare against the actual HTTP Host, not that internal URL.
  let sameOrigin=false;
  try {
    const origin=new URL(request.headers.get("origin") || "");
    const host=request.headers.get("host") || new URL(request.url).host;
    const local=["127.0.0.1","localhost","[::1]"].includes(origin.hostname);
    sameOrigin=origin.host===host && !origin.username && !origin.password && (origin.protocol==="https:" || (local && origin.protocol==="http:"));
  } catch { /* Missing or invalid origin is rejected. */ }
  if(!sameOrigin) return Response.json({ok:false},{status:403,headers});
  const config=contactConfig(process.env);
  if(config && request.headers.get("origin")!==config.origin) return Response.json({ok:false,code:"unavailable"},{status:503,headers});
  if(!request.headers.get("content-type")?.includes("application/json")) return Response.json({ok:false},{status:415,headers});
  // Bounded read, even for chunked input; never log contact details.
  const reader=request.body?.getReader();let size=0;const chunks:Uint8Array[]=[];
  if(!reader)return Response.json({ok:false},{status:400,headers});
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>16384){await reader.cancel();return Response.json({ok:false},{status:413,headers});}chunks.push(value);}
  let input:unknown;
  try{input=JSON.parse(Buffer.concat(chunks).toString("utf8"));}catch{return Response.json({ok:false},{status:400,headers});}
  const result=await sendPresentation(input,config);
  return Response.json(result.body,{status:result.status,headers});
}
