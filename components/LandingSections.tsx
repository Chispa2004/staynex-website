"use client";
import { ArrowRight, HeartHandshake, ClipboardList, Sparkles, MessagesSquare, Languages, UserRoundCheck } from "lucide-react";
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
  return <section tabIndex={-1} id="journeys" className="journey-section hospitality-journeys"><div className="section-shell commercial-section"><SectionHeader {...t.journey} />
    <div className="story-grid">{t.journey.cards.map((card,i)=><article className="story-card" key={card.phase} aria-labelledby={`phase-${i}`}>
      <div className="story-copy"><span className="story-index" aria-hidden="true">0{i+1}</span><p className="eyebrow">{card.phase}</p><h3 id={`phase-${i}`}>{card.title}</h3><p>{card.body}</p>
        <ul className="phase-tags">{card.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
      </div>
      <figure className="journey-visual"><figcaption>{t.hero.example}</figcaption>
        <div className="journey-phone"><div className="illustration-brand"><span aria-hidden="true">H</span><strong>Hospedios</strong></div>
          <div className="illustration-chat"><div className="bubble guest"><span className="speaker">{t.hero.guest}</span><p>{card.question}</p></div><div className="bubble ai"><span className="speaker">Hospedios</span><p>{card.answer}</p></div></div>
        </div>
        <ol className="journey-workflow">{card.flow.map((step,index)=><li key={step}>{index>0&&<ArrowRight aria-hidden="true"/>}<span>{step}</span></li>)}</ol>
      </figure>
    </article>)}</div>
  </div></section>;
}
export function TeamSection() {
  const {t}=useLanguage(); const icons=[MessagesSquare,Languages,Sparkles,UserRoundCheck];
  return <section tabIndex={-1} id="team" className="section-shell commercial-section hospitality-team"><div className="section-header"><p className="eyebrow">{t.team.eyebrow}</p><h2>{t.team.title}</h2></div>
    <div className="whatsapp-grid"><figure className="phone-frame"><figcaption>{t.hero.example}</figcaption><div className="illustration-brand"><span aria-hidden="true">H</span><strong>Hospedios</strong></div>
      <div className="phone-chat">{t.team.chat.map((message,i)=><div className={`bubble ${i%2===0?"guest":"ai"}`} key={message}><span className="speaker">{i%2===0?t.hero.guest:"Hospedios"}</span><p>{message}</p></div>)}</div>
    </figure>
    <div className="capability-grid">{t.team.cards.map((card,i)=>{const Icon=icons[i];return <article className="capability-card" key={card.title}><Icon aria-hidden="true"/><h3>{card.title}</h3><p>{card.body}</p></article>;})}</div></div>
  </section>;
}
export function ContactSection() {
  const {t}=useLanguage();
  // Keep PresentationForm and its guarded transport for a separately authorized activation.
  // This informational release never mounts fields, the challenge or submission effects.
  return <section tabIndex={-1} id="request-demo" className="section-shell commercial-section request-demo-section"><div className="section-header"><p className="eyebrow">Hospedios</p><h2>{t.footer.contact}</h2><p>{t.form.preparing}</p></div></section>;
}
