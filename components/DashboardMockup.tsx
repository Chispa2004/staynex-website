"use client";

import { ArrowUpRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { heroIllustration } from "@/lib/hero-illustration";

import { useLanguage } from "@/components/LanguageProvider";

export function DashboardMockup() {
  const { locale } = useLanguage();
  const panel = heroIllustration[locale];

  return (
    <figure className="dashboard-stage" aria-labelledby="hero-example-caption">
      <figcaption id="hero-example-caption">{panel.example}</figcaption>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="floating-live-cloud">
        {panel.notifications.map(([title, meta, time, status, tone], index) => (
          <div className={`live-card live-card-${index + 1}`} key={title}>
            <div className="live-card-top">
              <span className={`live-dot tone-${tone}`} />
              <small>{time}</small>
            </div>
            <strong>{title}</strong>
            <div className="live-card-bottom">
              <span>{meta}</span>
              <em>{status}</em>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-window">
        <div className="window-chrome">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span>Hospedios</span>
          <strong>
            {panel.activity}
          </strong>
        </div>

        <div className="dashboard-grid">
          <section className="dash-panel main-panel">
            <div className="panel-title-row">
              <div>
                <span className="panel-kicker">{panel.today}</span>
                <h3>{panel.guestJourney}</h3>
              </div>
              <span className="status-pill">{panel.sample}</span>
            </div>

            <div className="journey-timeline">
              {panel.journey.map((step, index) => (
                <div className={`journey-step journey-step-${index + 1}`} key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>

            <div className="conversation-preview">
              <div className="message incoming">
                <MessageCircle aria-hidden="true" />
                <p>{panel.guestMessage}</p>
              </div>
              <div className="message outgoing">
                <Sparkles aria-hidden="true" />
                <p>{panel.aiMessage}</p>
              </div>
            </div>
          </section>

          <section className="dash-panel readiness-panel">
            <span className="panel-kicker">{panel.reception}</span>
            <h3>{panel.arrivalReadiness}</h3>
            <div className="readiness-ring">
              <span>92%</span>
            </div>
            <p>{panel.readinessBody}</p>
          </section>

          <section className="dash-panel revenue-panel">
            <div className="panel-title-row">
              <div>
                <span className="panel-kicker">{panel.revenue}</span>
                <h3>{panel.experienceSignals}</h3>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <div className="revenue-bars" aria-hidden="true">
              <span style={{ height: "44%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "52%" }} />
              <span style={{ height: "82%" }} />
              <span style={{ height: "61%" }} />
            </div>
            <p>{panel.revenueBody}</p>
          </section>

          <section className="dash-panel health-panel">
            <span className="panel-kicker">{panel.hotelHealth}</span>
            <h3>{panel.qualityMonitor}</h3>
            <div className="health-list">
              {panel.signals.map(([label, value, tone]) => (
                <div className="health-row" key={label}>
                  <span className={`tone-dot tone-${tone}`} />
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="dash-panel ai-panel">
            <div>
              <ShieldCheck aria-hidden="true" />
              <span className="panel-kicker">{panel.aiQualityLab}</span>
            </div>
            <h3>{panel.replayReady}</h3>
            <p>{panel.replayBody}</p>
            <div className="mini-checks">
              <span>
                <CheckCircle2 aria-hidden="true" />
                {panel.policyMatch}
              </span>
              <span>
                <CheckCircle2 aria-hidden="true" />
                {panel.handoverTiming}
              </span>
            </div>
          </section>
        </div>
      </div>

      <div className="operations-feed">
        <div className="feed-header">
          <span className="tone-dot tone-green" />
          <strong>{panel.feed}</strong>
        </div>
        {panel.notifications.slice(0, 4).map(([title, , time, , tone]) => (
          <div className="feed-row" key={title}>
            <span className={`tone-dot tone-${tone}`} />
            <p>{title}</p>
            <small>{time}</small>
          </div>
        ))}
      </div>
    </figure>
  );
}
