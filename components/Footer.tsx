"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { BrandLockup } from "@/components/Logo";
import { getNavItems } from "@/lib/translations";
export function Footer() {
  const {t}=useLanguage();
  return <footer className="site-footer"><div><a className="brand" href="#home" aria-label={t.nav.home}><BrandLockup descriptor={t.meta.descriptor}/></a><p>{t.footer.body}</p></div><nav aria-label={t.footer.nav}>{getNavItems(t).map(x=><a key={x.href} href={x.href}>{x.label}</a>)}<a href="#request-demo">{t.footer.contact}</a></nav></footer>;
}
