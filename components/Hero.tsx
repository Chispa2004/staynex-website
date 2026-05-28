"use client";

import { ArrowRight, PlayCircle } from "lucide-react";

import { DashboardMockup } from "@/components/DashboardMockup";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-label">{t.meta.descriptor}</p>
          <h1>{t.meta.headline}</h1>
          <p className="hero-subtitle">{t.meta.description}</p>
          <div className="hero-live-row" aria-label="Live operational signals">
            {t.hero.live.map((item, index) => (
              <span key={item}>
                {index === 0 ? <i /> : null}
                {item}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#demo">
              {t.hero.ctaPrimary}
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#product">
              <PlayCircle aria-hidden="true" />
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="hero-proof" aria-label="Platform capabilities">
            {t.hero.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
