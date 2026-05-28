"use client";

import { ArrowRight, Menu } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { type Locale, locales, getNavItems } from "@/lib/translations";

function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`language-switcher ${compact ? "language-switcher-compact" : ""}`} aria-label="Language selector">
      {locales.map((item: Locale) => (
        <button
          aria-pressed={locale === item}
          className={locale === item ? "is-active" : ""}
          key={item}
          onClick={() => setLocale(item)}
          type="button"
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const { t } = useLanguage();
  const navItems = getNavItems(t);

  return (
    <header className="site-nav">
      <a className="brand" href="#home" aria-label="Staynex home">
        <span className="brand-mark">S</span>
        <span>
          <strong>Staynex</strong>
          <small>{t.meta.descriptor}</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.slice(0, 6).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <LanguageSelector />

      <a className="nav-cta" href="#demo">
        {t.nav.requestDemo}
        <ArrowRight aria-hidden="true" />
      </a>

      <details className="mobile-menu">
        <summary aria-label={t.nav.open}>
          <Menu aria-hidden="true" />
        </summary>
        <div>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="mobile-demo-link" href="#demo">
            {t.nav.requestDemo}
            <ArrowRight aria-hidden="true" />
          </a>
          <LanguageSelector compact />
        </div>
      </details>
    </header>
  );
}
