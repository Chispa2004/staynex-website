import {
  ArrowRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  ConciergeBell,
  Languages,
  MessagesSquare,
  Radar,
  RotateCcw,
  ShieldCheck,
  UserRoundCheck,
  Workflow
} from "lucide-react";

import {
  demoFlow,
  healthSignals,
  hotelPainPoints,
  journeySections,
  labFeatures,
  metricStripItems,
  operationCards,
  productPillars,
  revenueCards
} from "@/lib/site";
import { IconBadge } from "@/components/IconBadge";
import { SectionHeader } from "@/components/SectionHeader";

export function ProductSection() {
  return (
    <section className="section-shell" id="product">
      <SectionHeader
        eyebrow="Product"
        title="One hospitality operations layer, not another chatbot."
        body="Staynex brings guest messaging, reception workflows, experience revenue and AI quality into a single operating surface for modern hotels."
        align="center"
      />

      <div className="pillar-grid">
        {productPillars.map((pillar) => (
          <article className="pillar-card" key={pillar.eyebrow}>
            <IconBadge icon={pillar.icon} label={pillar.eyebrow} />
            <p className="eyebrow">{pillar.eyebrow}</p>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
            <div className="tag-row">
              {pillar.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MetricsStrip() {
  return (
    <section className="metrics-strip" aria-label="Staynex platform capabilities">
      <div className="metrics-track">
        {[...metricStripItems, ...metricStripItems].map((item, index) => (
          <span key={`${item}-${index}`}>
            <i />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function StorytellingSection() {
  return (
    <section className="story-section section-shell" id="journeys">
      <SectionHeader
        eyebrow="Guest journey operations"
        title="Every stay creates operational moments. Staynex connects them."
        body="From first WhatsApp message to post-stay retention, Staynex turns guest intent into coordinated hotel workflows."
        align="center"
      />

      <div className="story-grid">
        {journeySections.map((journey, index) => (
          <article className="story-card" key={journey.title}>
            <div className="story-copy">
              <span className="story-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="eyebrow">{journey.eyebrow}</p>
              <h3>{journey.title}</h3>
              <p>{journey.body}</p>
              <div className="tag-row">
                {journey.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>

            <div className={`journey-visual journey-visual-${index + 1}`}>
              <div className="journey-phone">
                <div className="phone-header compact-phone-header">
                  <span />
                  <strong>Guest WhatsApp</strong>
                  <small>Active journey</small>
                </div>
                <p className="bubble guest">{journey.primary}</p>
                <p className="bubble ai">{journey.secondary}</p>
              </div>
              <div className="journey-workflow">
                <span className="eyebrow">{journey.stage}</span>
                {journey.points.slice(0, 4).map((point, pointIndex) => (
                  <div className="workflow-step" key={point}>
                    <span>{pointIndex + 1}</span>
                    <strong>{point}</strong>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyHotelsSection() {
  return (
    <section className="why-section section-band" id="why-hotels">
      <div className="section-shell why-grid">
        <div>
          <SectionHeader
            eyebrow="Why hotels need this"
            title="Hospitality teams are not short on messages. They are short on connected operations."
            body="Staynex is built for the work behind every guest conversation: departments, policies, timing, revenue, service recovery and human judgment."
          />
          <div className="why-proof">
            <span>
              <ConciergeBell aria-hidden="true" />
              Hotel-native workflows
            </span>
            <span>
              <ShieldCheck aria-hidden="true" />
              AI with operational control
            </span>
          </div>
        </div>

        <div className="pain-grid">
          {hotelPainPoints.map(([problem, solution]) => (
            <article className="pain-card" key={problem}>
              <div>
                <span className="pain-dot" />
                <strong>{problem}</strong>
              </div>
              <p>{solution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OperationsSection() {
  return (
    <section className="split-section section-shell" id="operations">
      <div>
        <SectionHeader
          eyebrow="Operations"
          title="Give hotel teams a calmer command center."
          body="Operations teams can see what guests need, what AI handled, what requires staff judgment and where service recovery should happen now."
        />
        <div className="feature-list">
          {[
            ["Workflow routing", "Classify routine, revenue, urgent and policy-sensitive conversations."],
            ["Human takeover", "Bring reception into the right conversation with guest context already prepared."],
            ["PMS-ready thinking", "Structure data around reservations, folios, arrival windows and hotel policies."]
          ].map(([title, body]) => (
            <div className="feature-row" key={title}>
              <CheckCircle2 aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="metric-grid">
        {operationCards.map((card) => (
          <article className="metric-card" key={card.title}>
            <span>{card.metric}</span>
            <strong>{card.title}</strong>
            <p>{card.body}</p>
            <small>{card.label}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ReceptionSection() {
  return (
    <section className="section-band" id="reception">
      <div className="section-shell reception-grid">
        <div className="visual-panel reception-visual">
          <div className="arrival-card">
            <span className="eyebrow">Pre check-in</span>
            <h3>Arrivals today</h3>
            {[
              ["Elena Costa", "Documents complete", "Ready"],
              ["Martin Keller", "Folio needs review", "Review"],
              ["Ari Nguyen", "Arrival at 21:40", "Ready"]
            ].map(([name, detail, status]) => (
              <div className="arrival-row" key={name}>
                <span>{name.slice(0, 2).toUpperCase()}</span>
                <div>
                  <strong>{name}</strong>
                  <small>{detail}</small>
                </div>
                <em>{status}</em>
              </div>
            ))}
          </div>
          <div className="folio-preview">
            <ClipboardCheck aria-hidden="true" />
            <strong>Folio preview</strong>
            <p>Balance, room notes and guest preferences surfaced before the arrival wave.</p>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Reception / Pre Check-in"
            title="Arrival intelligence before front desk pressure begins."
            body="Staynex helps reception teams prepare each arrival with guest lookup, pre check-in status, folio preview and operational readiness in view."
          />
          <div className="compact-grid">
            {[
              ["Pre check-in", CalendarClock],
              ["Guest lookup", UserRoundCheck],
              ["Folio preview", ClipboardCheck],
              ["Operational readiness", ShieldCheck]
            ].map(([label, Icon]) => (
              <div className="compact-tile" key={label as string}>
                <Icon aria-hidden="true" />
                <span>{label as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RevenueSection() {
  return (
    <section className="split-section section-shell" id="revenue">
      <div>
        <SectionHeader
          eyebrow="Revenue & Experiences"
          title="Turn guest intent into curated hospitality revenue."
          body="Staynex can surface relevant experiences, providers, services and upgrades from inside the guest journey, with reporting that keeps teams focused on value."
        />
        <div className="revenue-list">
          {revenueCards.map((item) => (
            <div key={item}>
              <CircleDollarSign aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marketplace-preview">
        <div className="marketplace-top">
          <span className="eyebrow">Experience Marketplace</span>
          <strong>Weekend opportunities</strong>
        </div>
        {[
          ["Airport transfer", "Arrivals after 20:00", "+18% intent"],
          ["Sunset excursion", "Couples and families", "+31% intent"],
          ["Spa upgrade", "Rain forecast window", "+24% intent"]
        ].map(([title, audience, trend]) => (
          <div className="marketplace-row" key={title}>
            <div>
              <strong>{title}</strong>
              <span>{audience}</span>
            </div>
            <em>{trend}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhatsAppSection() {
  return (
    <section className="section-shell whatsapp-section" id="ai-whatsapp">
      <SectionHeader
        eyebrow="AI + WhatsApp"
        title="Meet guests where they already communicate."
        body="Staynex treats WhatsApp as the guest-facing layer of a broader operations platform, connecting conversation, reservation context, human takeover and quality monitoring."
        align="center"
      />

      <div className="whatsapp-grid">
        <div className="phone-frame">
          <div className="phone-header">
            <span />
            <strong>Staynex Concierge</strong>
            <small>Online</small>
          </div>
          <div className="phone-chat">
            <p className="bubble guest">Hi, can I check in before arriving?</p>
            <p className="bubble ai">Yes. I can help you complete pre check-in and confirm your arrival time.</p>
            <p className="bubble guest">Also, do you have boat tours tomorrow?</p>
            <p className="bubble ai">I found two available providers. Would you like private or shared options?</p>
          </div>
        </div>

        <div className="capability-grid">
          {[
            ["WhatsApp native", MessagesSquare, "Guest conversations stay simple on the front end and operationally rich behind the scenes."],
            ["Multilingual", Languages, "Support international guests across arrival, in-stay support and service recommendations."],
            ["24/7 coverage", Radar, "Handle repetitive moments instantly while preserving escalation paths for staff."],
            ["Human takeover", Workflow, "Route sensitive, urgent or VIP interactions to hotel teams with context attached."]
          ].map(([title, Icon, body]) => (
            <article className="capability-card" key={title as string}>
              <Icon aria-hidden="true" />
              <h3>{title as string}</h3>
              <p>{body as string}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HealthSection() {
  return (
    <section className="section-band health-band" id="health">
      <div className="section-shell split-section">
        <div>
          <SectionHeader
            eyebrow="Hotel Health & Monitoring"
            title="Operational visibility for AI-powered hospitality."
            body="Monitor journey quality, escalation patterns, unresolved conversations, revenue intent and policy gaps before they become guest-facing issues."
          />
          <a className="text-link" href="#demo">
            See the health layer
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="health-console">
          {healthSignals.map((signal) => (
            <div className="health-stat" key={signal.label}>
              <span className={`tone-dot tone-${signal.tone}`} />
              <strong>{signal.value}</strong>
              <small>{signal.label}</small>
            </div>
          ))}
          <div className="alert-strip">
            <BellRing aria-hidden="true" />
            <span>Alert: 3 pre-arrival journeys need policy review before 18:00.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QualityLabSection() {
  return (
    <section className="section-shell" id="quality-lab">
      <SectionHeader
        eyebrow="AI Quality Lab"
        title="Improve AI before guests notice the edge cases."
        body="Staynex is designed for operational learning: test long journeys, replay conversations and understand exactly why an automation failed."
        align="center"
      />

      <div className="lab-grid">
        {labFeatures.map((feature, index) => (
          <article className="lab-card" key={feature.title}>
            <div className="lab-index">{String(index + 1).padStart(2, "0")}</div>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
            <div className="lab-icon-row">
              {index === 0 ? <BellRing aria-hidden="true" /> : null}
              {index === 1 ? <Radar aria-hidden="true" /> : null}
              {index === 2 ? <RotateCcw aria-hidden="true" /> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DemoSection() {
  return (
    <section className="demo-experience section-shell" id="demo">
      <div className="demo-copy">
        <p className="eyebrow">Demo</p>
        <h2>See Staynex in action</h2>
        <p>
          One journey can trigger WhatsApp replies, reception readiness, provider booking, AI monitoring and human
          takeover. The product story stays operational from the first message.
        </p>
      </div>

      <div className="demo-visual-grid">
        <div className="demo-phone">
          <div className="phone-header">
            <span />
            <strong>Staynex Concierge</strong>
            <small>AI + human ready</small>
          </div>
          <div className="phone-chat demo-chat">
            <p className="bubble guest">Can I arrive early and book a transfer?</p>
            <p className="bubble ai">Yes. I found your reservation and prepared transfer options.</p>
            <p className="bubble guest">Please send a private option.</p>
            <p className="bubble ai">Done. Reception has your arrival time and provider booking request.</p>
          </div>
        </div>

        <div className="demo-command">
          <div className="demo-command-header">
            <span className="tone-dot tone-green" />
            <strong>Live demo flow</strong>
            <small>5 connected steps</small>
          </div>
          {demoFlow.map((step, index) => (
            <article className="demo-flow-card" key={step.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{step.label}</small>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="demo-monitor">
          <div className="monitor-top">
            <Radar aria-hidden="true" />
            <span>AI monitoring</span>
          </div>
          <div className="monitor-score">
            <strong>98%</strong>
            <small>journey confidence</small>
          </div>
          <div className="monitor-list">
            {["Policy matched", "Provider booking sent", "Reception updated", "Human takeover available"].map((item) => (
              <span key={item}>
                <CheckCircle2 aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="demo-actions">
        <a className="button button-primary" href="mailto:hello@staynex.ai?subject=Staynex%20demo%20request">
          Request demo
          <ArrowRight aria-hidden="true" />
        </a>
        <a className="button button-secondary" href="#contact">
          Contact team
        </a>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div>
        <SectionHeader
          eyebrow="Contact"
          title="Built for hotels ready to operationalize AI."
          body="Use this commercial base for investor conversations, hotel pilots, demo bookings and future public launch pages."
        />
      </div>
      <div className="contact-card">
        <span className="eyebrow">Staynex</span>
        <h3>AI Hospitality Operations Platform</h3>
        <p>Public website foundation prepared for SEO, analytics, CMS content and multilingual expansion.</p>
        <a className="text-link" href="mailto:hello@staynex.ai">
          hello@staynex.ai
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
