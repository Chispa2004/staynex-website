import { receivePresentation } from "@/lib/presentation-request";
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
  if(!request.headers.get("content-type")?.includes("application/json")) return Response.json({ok:false},{status:415,headers});
  // Bounded read, even for chunked input; never log contact details.
  const reader=request.body?.getReader();let size=0;const chunks:Uint8Array[]=[];
  if(!reader)return Response.json({ok:false},{status:400,headers});
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>16384){await reader.cancel();return Response.json({ok:false},{status:413,headers});}chunks.push(value);}
  let input:unknown;
  try{input=JSON.parse(Buffer.concat(chunks).toString("utf8"));}catch{return Response.json({ok:false},{status:400,headers});}
  // Deliberately no adapter: the previous website had no receiving system.
  const result=await receivePresentation(input);
  return Response.json(result.body,{status:result.status,headers});
}
