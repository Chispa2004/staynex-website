"use client";

import { ArrowUpRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

export function DashboardMockup() {
  const { t } = useLanguage();

  return (
    <div className="dashboard-stage" aria-label="Staynex product interface preview">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="floating-live-cloud" aria-hidden="true">
        {t.liveCards.map(([title, meta, time, status, tone], index) => (
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
          <span>{t.dashboard.command}</span>
          <strong>
            <i />
            {t.dashboard.liveOperations}
          </strong>
        </div>

        <div className="dashboard-grid">
          <section className="dash-panel main-panel">
            <div className="panel-title-row">
              <div>
                <span className="panel-kicker">{t.dashboard.today}</span>
                <h3>{t.dashboard.guestJourney}</h3>
              </div>
              <span className="status-pill">{t.dashboard.live}</span>
            </div>

            <div className="journey-timeline">
              {t.dashboard.journey.map((step, index) => (
                <div className={`journey-step journey-step-${index + 1}`} key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>

            <div className="conversation-preview">
              <div className="message incoming">
                <MessageCircle aria-hidden="true" />
                <p>{t.dashboard.guestMessage}</p>
              </div>
              <div className="message outgoing">
                <Sparkles aria-hidden="true" />
                <p>{t.dashboard.aiMessage}</p>
              </div>
            </div>
          </section>

          <section className="dash-panel readiness-panel">
            <span className="panel-kicker">{t.dashboard.reception}</span>
            <h3>{t.dashboard.arrivalReadiness}</h3>
            <div className="readiness-ring">
              <span>92%</span>
            </div>
            <p>{t.dashboard.readinessBody}</p>
          </section>

          <section className="dash-panel revenue-panel">
            <div className="panel-title-row">
              <div>
                <span className="panel-kicker">{t.dashboard.revenue}</span>
                <h3>{t.dashboard.experienceSignals}</h3>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <div className="revenue-bars">
              <span style={{ height: "44%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "52%" }} />
              <span style={{ height: "82%" }} />
              <span style={{ height: "61%" }} />
            </div>
            <p>{t.dashboard.revenueBody}</p>
          </section>

          <section className="dash-panel health-panel">
            <span className="panel-kicker">{t.dashboard.hotelHealth}</span>
            <h3>{t.dashboard.qualityMonitor}</h3>
            <div className="health-list">
              {t.health.signals.map(([label, value, tone]) => (
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
              <span className="panel-kicker">{t.dashboard.aiQualityLab}</span>
            </div>
            <h3>{t.dashboard.replayReady}</h3>
            <p>{t.dashboard.replayBody}</p>
            <div className="mini-checks">
              <span>
                <CheckCircle2 aria-hidden="true" />
                {t.dashboard.policyMatch}
              </span>
              <span>
                <CheckCircle2 aria-hidden="true" />
                {t.dashboard.handoverTiming}
              </span>
            </div>
          </section>
        </div>
      </div>

      <div className="operations-feed">
        <div className="feed-header">
          <span className="tone-dot tone-green" />
          <strong>{t.dashboard.feed}</strong>
        </div>
        {t.liveCards.slice(0, 4).map(([title, , time, , tone]) => (
          <div className="feed-row" key={title}>
            <span className={`tone-dot tone-${tone}`} />
            <p>{title}</p>
            <small>{time}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
