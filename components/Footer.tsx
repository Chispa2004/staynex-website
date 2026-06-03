"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { BrandLockup } from "@/components/Logo";
import { getNavItems } from "@/lib/translations";

export function Footer() {
  const { t } = useLanguage();
  const navItems = getNavItems(t).filter((item) =>
    ["#product", "#operations", "#revenue", "#demo", "#contact"].includes(item.href)
  );

  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="#home" aria-label="Staynex home">
          <BrandLockup descriptor={t.meta.descriptor} />
        </a>
        <p>{t.footer.body}</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <span>{t.footer.legal}</span>
      </nav>
    </footer>
  );
}
