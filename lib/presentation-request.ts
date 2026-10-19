export type RequestData = { name: string; company: string; email: string; message: string };
export type Field = keyof RequestData;
export type FieldErrors = Partial<Record<Field, "required" | "emailError" | "tooLong">>;
export const limits = { name: 100, company: 160, email: 254, message: 2000 } as const;
export function validateRequest(input: unknown): {data: RequestData; errors: FieldErrors} {
  const source = input && typeof input === "object" ? input as Record<string,unknown> : {};
  const data = {name:"",company:"",email:"",message:""}; const errors:FieldErrors={};
  for (const key of Object.keys(data) as Field[]) {
    const value=source[key];
    if(typeof value !== "string" && !(key==="message" && value===undefined)) {errors[key]="required";continue;}
    data[key]=typeof value==="string"?value.trim():"";
    if(key!=="message"&&!data[key])errors[key]="required";
    else if(data[key].length>limits[key])errors[key]="tooLong";
  }
  if(data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email="emailError";
  return {data,errors};
}
// An adapter must acknowledge durable receipt. No transport, recipient or credentials are configured here.
export type ContactTransport = (data:RequestData)=>Promise<{accepted:boolean; receiptId?:string}>;
export async function receivePresentation(input:unknown, transport:ContactTransport|null=null) {
  const {data,errors}=validateRequest(input);
  if(Object.keys(errors).length) return {status:422,body:{ok:false,code:"invalid",errors}};
  if(input && typeof input==="object" && "website" in input && input.website) return {status:400,body:{ok:false,code:"invalid"}};
  if(!transport) return {status:503,body:{ok:false,code:"unavailable"}};
  try {
    const receipt=await transport(data);
    if(!receipt?.accepted||!receipt.receiptId?.trim()) throw new Error("Unconfirmed receipt");
    return {status:200,body:{ok:true,receiptId:receipt.receiptId}};
  } catch { return {status:502,body:{ok:false,code:"unconfirmed"}}; }
}
