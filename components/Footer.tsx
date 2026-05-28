import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="#home" aria-label="Staynex home">
          <span className="brand-mark">S</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.descriptor}</small>
          </span>
        </a>
        <p>Public commercial website for enterprise hospitality AI operations.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
