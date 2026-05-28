import { ArrowRight, Menu } from "lucide-react";

import { navItems, siteConfig } from "@/lib/site";

export function Nav() {
  return (
    <header className="site-nav">
      <a className="brand" href="#home" aria-label="Staynex home">
        <span className="brand-mark">S</span>
        <span>
          <strong>{siteConfig.name}</strong>
          <small>{siteConfig.descriptor}</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.slice(0, 6).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#demo">
        Request demo
        <ArrowRight aria-hidden="true" />
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </summary>
        <div>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </details>
    </header>
  );
}
