"use client";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { DashboardMockup } from "@/components/DashboardMockup";
export function Hero() {
  const { t } = useLanguage();
  return <section tabIndex={-1} className="hero" id="home">
    <div className="hero-bg" aria-hidden="true" />
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="hero-label">{t.meta.descriptor}</p><h1>{t.meta.headline}</h1>
        <p className="hero-subtitle">{t.meta.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#request-demo">{t.nav.requestDemo}<ArrowRight aria-hidden="true" /></a>
          <a className="button button-secondary" href="#benefits">{t.hero.secondary}<ArrowDown aria-hidden="true" /></a>
        </div>
      </div><DashboardMockup />
    </div>
  </section>;
}
