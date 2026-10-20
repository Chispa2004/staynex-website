"use client";
import { useCallback,useEffect,useRef,useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ContactChallenge } from "./ContactChallenge";
import { createSubmission,type SubmissionState } from "@/lib/contact-submission";
import { validateRequest,limits,type Field,type FieldErrors } from "@/lib/presentation-request";
export function PresentationForm() {
  const {t,locale}=useLanguage();
  const [errors,setErrors]=useState<FieldErrors>({});
  const [state,setState]=useState<SubmissionState>("idle");
  const [config,setConfig]=useState<{enabled:boolean;siteKey?:string;emailLink?:string;recoveryLink?:string}>({enabled:false});
  const [checked,setChecked]=useState(false);
  const [token,setToken]=useState("");const [attempt,setAttempt]=useState(0);
  const challengeError=useCallback(()=>setState(previous=>previous==="idle"||previous==="challenge"?"challenge":previous),[]);
  const form=useRef<HTMLFormElement>(null);
  const submission=useRef<ReturnType<typeof createSubmission>|null>(null);
  useEffect(()=>{
    submission.current=createSubmission({storage:{getItem:key=>sessionStorage.getItem(key),setItem:(key,value)=>sessionStorage.setItem(key,value),removeItem:key=>sessionStorage.removeItem(key)},
      id:()=>crypto.randomUUID(),onState:setState,transport:input=>fetch("/api/presentation-request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(input),signal:AbortSignal.timeout(15000)})});
    submission.current.restore();
    const controller=new AbortController();
    fetch("/api/presentation-request",{cache:"no-store",signal:AbortSignal.any([controller.signal,AbortSignal.timeout(6000)])}).then(async response=>{
      const data=await response.json();
      if(response.ok)setConfig({enabled:data.enabled===true&&typeof data.siteKey==="string"&&!!data.siteKey&&typeof data.recoveryLink==="string"&&data.recoveryLink.startsWith("mailto:"),siteKey:data.siteKey,
        recoveryLink:typeof data.recoveryLink==="string"&&data.recoveryLink.startsWith("mailto:")?data.recoveryLink:undefined,
        emailLink:typeof data.emailLink==="string"&&data.emailLink.startsWith("mailto:")?data.emailLink:undefined});
    }).catch(()=>{/* Closed until configuration is known. */}).finally(()=>{if(!controller.signal.aborted)setChecked(true);});
    return ()=>controller.abort();
  },[]);
  async function submit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();if(submission.current?.isLocked())return;
    const input=Object.fromEntries(new FormData(event.currentTarget));
    const validation=validateRequest(input);setErrors(validation.errors);
    if(Object.keys(validation.errors).length){setState("invalid");form.current?.querySelector<HTMLInputElement>('[name="'+Object.keys(validation.errors)[0]+'"]')?.focus();return;}
    if(!config.enabled){setState("unavailable");return;}
    if(!token){setState("challenge");return;}
    await submission.current?.submit({...input,challengeToken:token});
    setToken("");setAttempt(value=>value+1);
  }
  const locked=state==="sending"||state==="success"||state==="unconfirmed";
  return <form className="demo-form" ref={form} onSubmit={submit} noValidate aria-busy={state==="sending"}>
    {(["name","company","email","message"] as Field[]).map(key=><div className={key==="message"||key==="email"?"form-wide":""} key={key}>
      <label htmlFor={"contact-"+key}>{t.form[key]}</label>
      {key==="message"?<textarea id={"contact-"+key} name={key} rows={4} maxLength={limits[key]} aria-describedby={"contact-hint"+(errors[key]?" error-"+key:"")} aria-invalid={!!errors[key]}/>:
      <input id={"contact-"+key} name={key} type={key==="email"?"email":"text"} autoComplete={key==="company"?"organization":key} required maxLength={limits[key]} aria-invalid={!!errors[key]} aria-describedby={errors[key]?"error-"+key:undefined}/>}
      {errors[key]&&<p id={"error-"+key} className="field-error">{t.form[errors[key]!]}</p>}
    </div>)}
    <div hidden aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <p id="contact-hint" className="form-hint form-wide">{t.form.hint}</p>
    {checked&&!config.enabled&&<p className="contact-note form-wide">{t.form.unavailable}</p>}
    {config.enabled&&config.siteKey&&!locked&&<div className="form-wide"><ContactChallenge siteKey={config.siteKey} language={locale} attempt={attempt} onToken={setToken} onError={challengeError}/></div>}
    <button className="button button-primary form-wide" type="submit" disabled={!checked} aria-disabled={locked} aria-describedby="contact-status">{state==="sending"?t.form.sending:t.nav.requestDemo}<ArrowRight aria-hidden="true"/></button>
    <p className="form-hint form-wide">{t.form.privacy}</p>
    <p id="contact-status" role="status" aria-live="polite" aria-atomic="true" className={"form-wide form-status "+(state==="success"?"form-success":"")}>{state==="idle"?"":t.form[state]}</p>
    {state==="unconfirmed"&&config.recoveryLink&&<div className="form-wide"><p className="form-hint">{t.form.recovery}</p><a href={config.recoveryLink}>{t.form.recoveryAction}</a></div>}
    {config.emailLink&&state!=="unconfirmed"&&state!=="success"&&state!=="sending"&&<a className="form-wide" href={config.emailLink}>{t.form.openEmail}</a>}
  </form>;
}
