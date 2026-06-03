"use client";

import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { BrandLockup } from "@/components/Logo";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="site-nav">
      <a className="brand" href="#home" aria-label="Staynex home">
        <BrandLockup descriptor={t.meta.descriptor} />
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.slice(0, 6).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <LanguageSelector />

      <a className="nav-cta" href="#request-demo">
        {t.nav.requestDemo}
        <ArrowRight aria-hidden="true" />
      </a>

      <details
        className="mobile-menu"
        onToggle={(event) => setMobileOpen(event.currentTarget.open)}
        open={mobileOpen}
      >
        <summary aria-label={t.nav.open}>
          <Menu aria-hidden="true" />
        </summary>
        <div>
          {navItems.slice(0, 6).map((item) => (
            <a key={item.href} href={item.href} onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-demo-link" href="#request-demo" onClick={closeMobileMenu}>
            {t.nav.requestDemo}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </details>
    </header>
  );
}
