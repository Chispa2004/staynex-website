export type RequestData = { name: string; company: string; email: string; message: string };
export type Field = keyof RequestData;
export type FieldErrors = Partial<Record<Field, "required" | "emailError" | "tooLong" | "invalidValue">>;
export const limits = { name: 100, company: 160, email: 254, message: 2000 } as const;
// Single mailbox only; no display names, address lists or header delimiters.
export const isMailbox = (value:string) => value.length<=254 && /^[a-zA-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(value);
export function validateRequest(input: unknown): {data: RequestData; errors: FieldErrors} {
  const source = input && typeof input === "object" ? input as Record<string,unknown> : {};
  const data = {name:"",company:"",email:"",message:""}; const errors:FieldErrors={};
  for (const key of Object.keys(data) as Field[]) {
    const value=source[key];
    if(typeof value !== "string" && !(key==="message" && value===undefined)) {errors[key]="required";continue;}
    data[key]=typeof value==="string"?value.trim():"";
    if(key!=="message"&&!data[key])errors[key]="required";
    else if(data[key].length>limits[key])errors[key]="tooLong";
    if(typeof value==="string" && (key==="message" ? /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/ : /[\x00-\x1f\x7f]/).test(value)) errors[key]="invalidValue";
  }
  if(data.email && !isMailbox(data.email)) errors.email="emailError";
  return {data,errors};
}
