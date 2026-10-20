"use client";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { heroIllustration } from "@/lib/hero-illustration";
import { DashboardMockup } from "@/components/DashboardMockup";
export function Hero() {
  const { t, locale } = useLanguage();
  return <section tabIndex={-1} className="hero" id="home">
    <div className="hero-bg" aria-hidden="true" />
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="hero-label">{t.meta.descriptor}</p><h1>{t.meta.headline}</h1>
        <p className="hero-subtitle">{t.meta.description}</p>
        <div className="hero-live-row">{heroIllustration[locale].tags.map(item=><span key={item}>{item}</span>)}</div>
        <div className="hero-actions">
          <a className="button button-primary" href="#benefits">{t.hero.secondary}<ArrowRight aria-hidden="true" /></a>
          <a className="button button-secondary" href="#journeys">{t.nav.journey}<ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="hero-proof">{t.hero.stages.map(item=><span key={item}>{item}</span>)}</div>
      </div><DashboardMockup />
    </div>
  </section>;
}
