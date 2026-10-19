"use client";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { validateRequest, limits, type Field, type FieldErrors } from "@/lib/presentation-request";
export function PresentationForm() {
  const {t}=useLanguage(); const [errors,setErrors]=useState<FieldErrors>({});
  const [state,setState]=useState<"idle"|"sending"|"invalid"|"unavailable"|"error"|"success">("idle");
  const busy=useRef(false); const form=useRef<HTMLFormElement>(null);
  async function submit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();if(busy.current)return;
    const input=Object.fromEntries(new FormData(event.currentTarget));
    const validation=validateRequest(input);setErrors(validation.errors);
    if(Object.keys(validation.errors).length){setState("invalid");form.current?.querySelector<HTMLInputElement>('[name="'+Object.keys(validation.errors)[0]+'"]')?.focus();return;}
    busy.current=true;setState("sending");
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),12000);
    try {
      const response=await fetch("/api/presentation-request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(input),signal:controller.signal});
      const data=await response.json();
      if(response.ok && data.ok===true && typeof data.receiptId==="string" && data.receiptId.trim()) setState("success");
      else if(data.code==="unavailable")setState("unavailable");
      else setState("error");
    }catch{setState("error");}finally{clearTimeout(timeout);busy.current=false;}
  }
  return <form className="demo-form" ref={form} onSubmit={submit} noValidate aria-busy={state==="sending"}>
    {(["name","company","email","message"] as Field[]).map(key=><div className={key==="message"||key==="email"?"form-wide":""} key={key}>
      <label htmlFor={"contact-"+key}>{t.form[key]}</label>
      {key==="message"?<textarea id={"contact-"+key} name={key} rows={4} maxLength={limits[key]} aria-describedby={"contact-hint"+(errors[key]?" error-"+key:"")} aria-invalid={!!errors[key]}/>:
      <input id={"contact-"+key} name={key} type={key==="email"?"email":"text"} autoComplete={key==="company"?"organization":key} required maxLength={limits[key]} aria-invalid={!!errors[key]} aria-describedby={errors[key]?"error-"+key:undefined}/>}
      {errors[key]&&<p id={"error-"+key} className="field-error">{t.form[errors[key]!]}</p>}
    </div>)}
    <div hidden aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <p id="contact-hint" className="form-hint form-wide">{t.form.hint}</p>
    <button className="button button-primary form-wide" type="submit" disabled={state==="sending"}>{state==="sending"?t.form.sending:t.nav.requestDemo}<ArrowRight aria-hidden="true"/></button>
    <p className="form-hint form-wide">{t.form.privacy}</p>
    <p role="status" aria-live="polite" className={"form-wide form-status "+(state==="success"?"form-success":"")}>{state==="idle"?"":state==="invalid"?t.form.invalid:state==="sending"?t.form.sending:state==="success"?t.form.success:state==="unavailable"?t.form.unavailable:t.form.error}</p>
  </form>;
}
