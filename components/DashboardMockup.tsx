"use client";
import { MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
// Editorial illustration, not a screenshot, live status or measured product result.
export function DashboardMockup() {
  const {t} = useLanguage();
  return <figure className="hospitality-preview">
    <figcaption>{t.hero.example}</figcaption>
    <div className="preview-heading"><span className="preview-mark" aria-hidden="true">H</span><div><strong>Hospedios</strong><p>{t.hero.hotel}</p></div></div>
    <div className="preview-stages">{t.hero.stages.map(s=><span key={s}>{s}</span>)}</div>
    <div className="preview-message guest"><span><MessageCircle aria-hidden="true"/>{t.hero.guest}</span><p>{t.hero.question}</p></div>
    <div className="preview-message team"><span><Sparkles aria-hidden="true"/>{t.hero.assistant}</span><p>{t.hero.answer}</p></div>
    <p className="preview-note">{t.hero.note}</p>
  </figure>;
}
