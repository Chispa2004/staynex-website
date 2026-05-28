import { ArrowRight, PlayCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { DashboardMockup } from "@/components/DashboardMockup";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-label">{siteConfig.descriptor}</p>
          <h1>{siteConfig.headline}</h1>
          <p className="hero-subtitle">{siteConfig.description}</p>
          <div className="hero-live-row" aria-label="Live operational signals">
            <span>
              <i />
              Live guest journeys
            </span>
            <span>Reception ready</span>
            <span>Revenue detected</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#demo">
              Request demo
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#product">
              <PlayCircle aria-hidden="true" />
              Explore platform
            </a>
          </div>
          <div className="hero-proof" aria-label="Platform capabilities">
            <span>Guest communication</span>
            <span>Reception workflows</span>
            <span>Provider revenue</span>
            <span>AI quality monitoring</span>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
