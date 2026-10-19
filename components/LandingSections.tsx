"use client";
import { HeartHandshake, ClipboardList, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
export function BenefitsSection() {
  const {t}=useLanguage(); const icons=[HeartHandshake,ClipboardList,Sparkles];
  return <section tabIndex={-1} id="benefits" className="section-shell commercial-section"><SectionHeader {...t.benefits} />
    <div className="benefit-grid">{t.benefits.cards.map((card,i)=>{const Icon=icons[i];return <article className="benefit-card" key={card.title}><span className="benefit-icon"><Icon aria-hidden="true"/></span><h3>{card.title}</h3><p>{card.body}</p></article>;})}</div>
  </section>;
}
export function JourneySection() {
  const {t}=useLanguage();
  return <section tabIndex={-1} id="journeys" className="journey-section"><div className="section-shell commercial-section"><SectionHeader {...t.journey} />
    <div className="journey-grid">{t.journey.cards.map((card,i)=><article key={card.title}><span className="journey-number" aria-hidden="true">0{i+1}</span><h3>{card.title}</h3><p>{card.body}</p></article>)}</div>
  </div></section>;
}
export function TeamSection() {
  const {t}=useLanguage();
  return <section tabIndex={-1} id="team" className="section-shell commercial-section human-section"><div><p className="eyebrow">{t.team.eyebrow}</p><h2>{t.team.title}</h2></div>
    <div className="human-copy">{t.team.paragraphs.map(p=><p key={p}>{p}</p>)}<p className="connection-note">{t.team.connection}</p></div>
    <div className="human-principles" aria-hidden="true">{t.team.labels.map((s,i)=><span key={s}><b>0{i+1}</b>{s}</span>)}</div>
  </section>;
}
export function ContactSection() {
  const {t}=useLanguage();
  // Keep PresentationForm and its guarded transport for a separately authorized activation.
  // This informational release never mounts fields, the challenge or submission effects.
  return <section tabIndex={-1} id="request-demo" className="section-shell commercial-section request-demo-section"><div className="section-header"><p className="eyebrow">Hospedios</p><h2>{t.footer.contact}</h2><p>{t.form.preparing}</p></div></section>;
}
