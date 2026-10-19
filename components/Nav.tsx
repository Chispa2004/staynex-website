"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { BrandLockup } from "@/components/Logo";
import { locales, getNavItems } from "@/lib/translations";
export function Nav() {
  const {t,locale,setLocale}=useLanguage(); const items=getNavItems(t);
  const [open,setOpen]=useState(false); const trigger=useRef<HTMLButtonElement>(null); const menu=useRef<HTMLElement>(null);
  useEffect(()=>{
    const closeOnOutside=(e:PointerEvent)=>{if(!menu.current?.contains(e.target as Node))setOpen(false);};
    document.addEventListener("pointerdown",closeOnOutside);
    return ()=>document.removeEventListener("pointerdown",closeOnOutside);
  },[]);
  return <><a className="skip-link" href="#content">{t.nav.skip}</a><header className="site-nav" ref={menu} onKeyDown={e=>{if(e.key==="Escape"&&open){e.stopPropagation();setOpen(false);trigger.current?.focus();}}}>
    <a className="brand" href="#home" aria-label={t.nav.home}><BrandLockup descriptor={t.meta.descriptor}/></a>
    <nav className="nav-links" aria-label={t.nav.main}>{items.map(x=><a href={x.href} key={x.href}>{x.label}</a>)}</nav>
    <div className="language-switcher" aria-label={t.nav.language}>{locales.map(item=><button type="button" key={item} aria-pressed={locale===item} lang={item} onClick={()=>setLocale(item)} className={locale===item?"is-active":""}>{item.toUpperCase()}</button>)}</div>
    <a className="nav-cta" href="#request-demo">{t.nav.requestDemo}<ArrowRight aria-hidden="true"/></a>
    <button type="button" className="menu-toggle" ref={trigger} aria-label={open?t.nav.close:t.nav.open} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button>
    <nav id="mobile-navigation" hidden={!open} className="commercial-mobile-menu" aria-label={t.nav.main}>{[...items,{href:"#request-demo",label:t.nav.requestDemo}].map(x=><a key={x.href} href={x.href} onClick={()=>setOpen(false)}>{x.label}</a>)}</nav>
  </header></>;
}
