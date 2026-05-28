"use client";

import { useState } from "react";
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

import { IconBadge } from "@/components/IconBadge";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";

const receptionIcons = [CalendarClock, UserRoundCheck, ClipboardCheck, ShieldCheck];
const whatsappIcons = [MessagesSquare, Languages, Radar, Workflow];
const labIcons = [BellRing, Radar, RotateCcw];

export function MetricsStrip() {
  const { t } = useLanguage();

  return (
    <section className="metrics-strip" aria-label="Staynex platform capabilities">
      <div className="metrics-track">
        {[...t.metrics, ...t.metrics].map((item, index) => (
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
  const { t } = useLanguage();

  return (
    <section className="story-section section-shell" id="journeys">
      <SectionHeader eyebrow={t.story.eyebrow} title={t.story.title} body={t.story.body} align="center" />

      <div className="story-grid">
        {t.story.sections.map((journey, index) => (
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
                  <strong>WhatsApp</strong>
                  <small>{journey.eyebrow}</small>
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

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell how-section" id="how-it-works">
      <SectionHeader eyebrow={t.howItWorks.eyebrow} title={t.howItWorks.title} body={t.howItWorks.body} align="center" />
      <div className="how-grid">
        {t.howItWorks.steps.map(([title, body], index) => (
          <article className="how-card" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyHotelsSection() {
  const { t } = useLanguage();

  return (
    <section className="why-section section-band" id="why-hotels">
      <div className="section-shell why-grid">
        <div>
          <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} body={t.why.body} />
          <div className="why-proof">
            <span>
              <ConciergeBell aria-hidden="true" />
              {t.why.proof[0]}
            </span>
            <span>
              <ShieldCheck aria-hidden="true" />
              {t.why.proof[1]}
            </span>
          </div>
        </div>

        <div className="pain-grid">
          {t.why.points.map(([problem, solution]) => (
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

export function BuiltForHotelsSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell chatbot-section" id="built-for-hotels">
      <div className="chatbot-panel">
        <SectionHeader eyebrow={t.chatbot.eyebrow} title={t.chatbot.title} body={t.chatbot.body} />
        <div className="chatbot-grid">
          {t.chatbot.points.map((point) => (
            <span key={point}>
              <CheckCircle2 aria-hidden="true" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScenariosSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell scenarios-section" id="scenarios">
      <SectionHeader eyebrow={t.scenarios.eyebrow} title={t.scenarios.title} body={t.scenarios.body} align="center" />
      <div className="scenario-grid">
        {t.scenarios.items.map(([title, body], index) => (
          <article className="scenario-card" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell" id="product">
      <SectionHeader eyebrow={t.product.eyebrow} title={t.product.title} body={t.product.body} align="center" />

      <div className="pillar-grid">
        {t.product.pillars.map((pillar) => (
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

export function OperationsSection() {
  const { t } = useLanguage();

  return (
    <section className="split-section section-shell" id="operations">
      <div>
        <SectionHeader eyebrow={t.operations.eyebrow} title={t.operations.title} body={t.operations.body} />
        <div className="feature-list">
          {t.operations.features.map(([title, body]) => (
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
        {t.operations.cards.map(([metric, title, body, label]) => (
          <article className="metric-card" key={title}>
            <span>{metric}</span>
            <strong>{title}</strong>
            <p>{body}</p>
            <small>{label}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RevenueSection() {
  const { t } = useLanguage();

  return (
    <section className="split-section section-shell" id="revenue">
      <div>
        <SectionHeader eyebrow={t.revenue.eyebrow} title={t.revenue.title} body={t.revenue.body} />
        <div className="revenue-list">
          {t.revenue.list.map((item) => (
            <div key={item}>
              <CircleDollarSign aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marketplace-preview">
        <div className="marketplace-top">
          <span className="eyebrow">{t.revenue.eyebrow}</span>
          <strong>{t.revenue.previewTitle}</strong>
        </div>
        {t.revenue.rows.map(([title, audience, trend]) => (
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

export function ReceptionSection() {
  const { t } = useLanguage();

  return (
    <section className="section-band" id="reception">
      <div className="section-shell reception-grid">
        <div className="visual-panel reception-visual">
          <div className="arrival-card">
            <span className="eyebrow">{t.reception.visualEyebrow}</span>
            <h3>{t.reception.arrivals}</h3>
            {t.reception.guests.map(([name, detail, status]) => (
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
            <strong>{t.reception.folioTitle}</strong>
            <p>{t.reception.folioBody}</p>
          </div>
        </div>

        <div>
          <SectionHeader eyebrow={t.reception.eyebrow} title={t.reception.title} body={t.reception.body} />
          <div className="compact-grid">
            {t.reception.tiles.map((label, index) => {
              const Icon = receptionIcons[index] ?? ClipboardCheck;

              return (
                <div className="compact-tile" key={label}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell whatsapp-section" id="ai-whatsapp">
      <SectionHeader eyebrow={t.whatsapp.eyebrow} title={t.whatsapp.title} body={t.whatsapp.body} align="center" />

      <div className="whatsapp-grid">
        <div className="phone-frame">
          <div className="phone-header">
            <span />
            <strong>{t.whatsapp.header}</strong>
            <small>{t.whatsapp.online}</small>
          </div>
          <div className="phone-chat">
            {t.whatsapp.chat.map(([who, message]) => (
              <p className={`bubble ${who}`} key={message}>
                {message}
              </p>
            ))}
          </div>
        </div>

        <div className="capability-grid">
          {t.whatsapp.cards.map(([title, body], index) => {
            const Icon = whatsappIcons[index] ?? MessagesSquare;

            return (
              <article className="capability-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HealthSection() {
  const { t } = useLanguage();

  return (
    <section className="section-band health-band" id="health">
      <div className="section-shell split-section">
        <div>
          <SectionHeader eyebrow={t.health.eyebrow} title={t.health.title} body={t.health.body} />
          <a className="text-link" href="#demo">
            {t.health.link}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="health-console">
          {t.health.signals.map(([label, value, tone]) => (
            <div className="health-stat" key={label}>
              <span className={`tone-dot tone-${tone}`} />
              <strong>{value}</strong>
              <small>{label}</small>
            </div>
          ))}
          <div className="alert-strip">
            <BellRing aria-hidden="true" />
            <span>{t.health.alert}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QualityLabSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell" id="quality-lab">
      <SectionHeader eyebrow={t.lab.eyebrow} title={t.lab.title} body={t.lab.body} align="center" />

      <div className="lab-grid">
        {t.lab.features.map(([title, body], index) => {
          const Icon = labIcons[index] ?? BellRing;

          return (
            <article className="lab-card" key={title}>
              <div className="lab-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="lab-icon-row">
                <Icon aria-hidden="true" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function DemoSection() {
  const { t } = useLanguage();

  return (
    <section className="demo-experience section-shell" id="demo">
      <div className="demo-copy">
        <p className="eyebrow">{t.demo.eyebrow}</p>
        <h2>{t.demo.title}</h2>
        <p>{t.demo.body}</p>
      </div>

      <div className="demo-visual-grid">
        <div className="demo-phone">
          <div className="phone-header">
            <span />
            <strong>{t.demo.phoneTitle}</strong>
            <small>{t.demo.phoneStatus}</small>
          </div>
          <div className="phone-chat demo-chat">
            {t.demo.chat.map(([who, message]) => (
              <p className={`bubble ${who}`} key={message}>
                {message}
              </p>
            ))}
          </div>
        </div>

        <div className="demo-command">
          <div className="demo-command-header">
            <span className="tone-dot tone-green" />
            <strong>{t.demo.flowTitle}</strong>
            <small>{t.demo.flowCount}</small>
          </div>
          {t.demo.flow.map(([label, title, body], index) => (
            <article className="demo-flow-card" key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{label}</small>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="demo-monitor">
          <div className="monitor-top">
            <Radar aria-hidden="true" />
            <span>{t.demo.monitoring}</span>
          </div>
          <div className="monitor-score">
            <strong>98%</strong>
            <small>{t.demo.score}</small>
          </div>
          <div className="monitor-list">
            {t.demo.checks.map((item) => (
              <span key={item}>
                <CheckCircle2 aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="demo-actions">
        <a className="button button-primary" href="#request-demo">
          {t.demo.ctaPrimary}
          <ArrowRight aria-hidden="true" />
        </a>
        <a className="button button-secondary" href="#contact">
          {t.demo.ctaSecondary}
        </a>
      </div>
    </section>
  );
}

export function DemoFormSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-shell request-demo-section" id="request-demo">
      <div>
        <SectionHeader eyebrow={t.form.eyebrow} title={t.form.title} body={t.form.body} />
      </div>
      <form
        className="demo-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label>
          <span>{t.form.name}</span>
          <input name="name" required type="text" />
        </label>
        <label>
          <span>{t.form.company}</span>
          <input name="company" required type="text" />
        </label>
        <label>
          <span>{t.form.email}</span>
          <input name="email" required type="email" />
        </label>
        <label>
          <span>{t.form.rooms}</span>
          <input min="1" name="rooms" type="number" />
        </label>
        <label className="form-wide">
          <span>{t.form.message}</span>
          <textarea name="message" rows={4} />
        </label>
        <button className="button button-primary form-wide" type="submit">
          {t.form.submit}
          <ArrowRight aria-hidden="true" />
        </button>
        {submitted ? <p className="form-success form-wide">{t.form.success}</p> : null}
      </form>
    </section>
  );
}

export function FinalCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="final-cta section-shell">
      <p className="eyebrow">{t.finalCta.eyebrow}</p>
      <h2>{t.finalCta.title}</h2>
      <p>{t.finalCta.body}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#request-demo">
          {t.finalCta.primary}
          <ArrowRight aria-hidden="true" />
        </a>
        <a className="button button-secondary" href="#product">
          {t.finalCta.secondary}
        </a>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell contact-section" id="contact">
      <div>
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} body={t.contact.body} />
      </div>
      <div className="contact-card">
        <span className="eyebrow">Staynex</span>
        <h3>{t.meta.descriptor}</h3>
        <p>{t.contact.cardBody}</p>
        <a className="text-link" href="mailto:hello@staynex.ai">
          hello@staynex.ai
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
