import { ArrowUpRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { healthSignals, liveOperationCards } from "@/lib/site";

export function DashboardMockup() {
  return (
    <div className="dashboard-stage" aria-label="Staynex product interface preview">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="floating-live-cloud" aria-hidden="true">
        {liveOperationCards.map((card, index) => (
          <div className={`live-card live-card-${index + 1}`} key={card.title}>
            <div className="live-card-top">
              <span className={`live-dot tone-${card.tone}`} />
              <small>{card.time}</small>
            </div>
            <strong>{card.title}</strong>
            <div className="live-card-bottom">
              <span>{card.meta}</span>
              <em>{card.status}</em>
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
          <span>Staynex Command</span>
          <strong>
            <i />
            Live operations
          </strong>
        </div>

        <div className="dashboard-grid">
          <section className="dash-panel main-panel">
            <div className="panel-title-row">
              <div>
                <span className="panel-kicker">Today</span>
                <h3>Guest journey control</h3>
              </div>
              <span className="status-pill">Live</span>
            </div>

            <div className="journey-timeline">
              {["Pre-arrival", "Check-in", "In-stay", "Revenue", "Post-stay"].map((step, index) => (
                <div className={`journey-step journey-step-${index + 1}`} key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>

            <div className="conversation-preview">
              <div className="message incoming">
                <MessageCircle aria-hidden="true" />
                <p>Can we arrive early and book airport transfer?</p>
              </div>
              <div className="message outgoing">
                <Sparkles aria-hidden="true" />
                <p>Early arrival noted. Transfer options are ready with your reservation details.</p>
              </div>
            </div>
          </section>

          <section className="dash-panel readiness-panel">
            <span className="panel-kicker">Reception</span>
            <h3>Arrival readiness</h3>
            <div className="readiness-ring">
              <span>92%</span>
            </div>
            <p>128 arrivals checked against documents, preferences and folio status.</p>
          </section>

          <section className="dash-panel revenue-panel">
            <div className="panel-title-row">
              <div>
                <span className="panel-kicker">Revenue</span>
                <h3>Experience signals</h3>
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
            <p>Late check-out, spa and excursions are trending for this weekend.</p>
          </section>

          <section className="dash-panel health-panel">
            <span className="panel-kicker">Hotel health</span>
            <h3>Quality monitor</h3>
            <div className="health-list">
              {healthSignals.map((signal) => (
                <div className="health-row" key={signal.label}>
                  <span className={`tone-dot tone-${signal.tone}`} />
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="dash-panel ai-panel">
            <div>
              <ShieldCheck aria-hidden="true" />
              <span className="panel-kicker">AI Quality Lab</span>
            </div>
            <h3>Replay ready</h3>
            <p>Long journey simulation completed across 18 guest intents.</p>
            <div className="mini-checks">
              <span>
                <CheckCircle2 aria-hidden="true" />
                Policy match
              </span>
              <span>
                <CheckCircle2 aria-hidden="true" />
                Handover timing
              </span>
            </div>
          </section>
        </div>
      </div>

      <div className="operations-feed">
        <div className="feed-header">
          <span className="tone-dot tone-green" />
          <strong>Operational feed</strong>
        </div>
        {liveOperationCards.slice(0, 4).map((card) => (
          <div className="feed-row" key={card.title}>
            <span className={`tone-dot tone-${card.tone}`} />
            <p>{card.title}</p>
            <small>{card.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
