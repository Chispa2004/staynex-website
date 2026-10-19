export type SubmissionState="idle"|"sending"|"invalid"|"unavailable"|"rejected"|"challenge"|"unconfirmed"|"success"|"storage";
export const attemptStorageKey="hospedios-presentation-attempt-v1";
type StoragePort=Pick<Storage,"getItem"|"setItem"|"removeItem">;
type Options={storage:StoragePort; transport:(input:Record<string,unknown>)=>Promise<Response>; id:()=>string; onState:(state:SubmissionState)=>void};
// No personal data in storage. Conservatively lock a reload after dispatch/lost response.
export function createSubmission(options:Options) {
  let locked=false;
  function restore() {
    try {
      const previous=options.storage.getItem(attemptStorageKey);
      if(previous){locked=true;options.onState(previous==="success"?"success":"unconfirmed");}
    } catch {locked=true;options.onState("storage");}
  }
  async function submit(input:Record<string,unknown>) {
    if(locked)return;
    locked=true;
    try {options.storage.setItem(attemptStorageKey,"unconfirmed");}
    catch {locked=false;options.onState("storage");return;}
    options.onState("sending");
    let state:SubmissionState="unconfirmed";
    try {
      const response=await options.transport({...input,operationId:options.id()});
      const body=await response.json();
      if(response.ok&&body.ok===true&&body.code==="accepted"&&typeof body.receiptId==="string"&&body.receiptId.trim())state="success";
      else if(!response.ok&&["unavailable","rejected","challenge","invalid"].includes(body.code))state=body.code;
    } catch { /* Network errors cannot prove non-delivery. */ }
    if(state==="success"||state==="unconfirmed") {
      try {options.storage.setItem(attemptStorageKey,state);}catch{/* The pre-dispatch marker remains conservative. */}
    } else {
      try {options.storage.removeItem(attemptStorageKey);locked=false;}catch{state="unconfirmed";}
    }
    options.onState(state);
  }
  return {restore,submit,isLocked:()=>locked};
}
