import { Reveal } from "./motion";
import slabLogo from "@/assets/slab-logo.svg";

const sitemap = [
  { href: "#trabajo", label: "Our Work" },
  { href: "#pilares", label: "What We Do" },
  { href: "#manifiesto", label: "Sh*t Vision" },
  { href: "#contacto", label: "Contact" },
];

const social = [
  { href: "https://www.instagram.com/shit.lab/", label: "Instagram" },
  { href: "https://wa.me/573242788459", label: "WhatsApp" },
  { href: "mailto:team@shitcreativelab.com", label: "Email" },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="ticker-divider h-1.5 w-full" aria-hidden />

      <div className="container py-16 md:py-20">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <img src={slabLogo} alt="SHIT Lab" className="h-11 w-auto md:h-14" />
            <p className="mt-5 max-w-md font-editorial text-xl text-foreground/75">
              Marcas memorables y relevantes. Cero "brain rot".
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3.5 text-background transition-colors hover:bg-brand-flame hover:border-brand-flame hover:text-brand-pampas"
            >
              <span className="font-display text-xl">Empezar un proyecto</span>
              <span className="font-mono text-xs">→</span>
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Mapa del sitio">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
              Índice
            </div>
            <ul className="space-y-1.5">
              {sitemap.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-display text-2xl link-underline pb-0.5">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
              Canales
            </div>
            <ul className="space-y-2 font-mono text-sm">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="link-underline pb-0.5"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-foreground/55">
              Medellín — Bogotá — Miami
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/55 md:flex-row md:items-center md:justify-between">
  <span>© {year} SHIT Creative Lab — All rights reserved</span>
  <span>Studio of High-Impact Tactics</span>
  <a href="/politica-de-datos" className="link-underline pb-0.5">
    Política de Tratamiento de Datos
  </a>
  <span className="flex items-center gap-2">
    Est. 2024 <span className="text-brand-flame animate-blink">●</span>
  </span>
</div>
      </div>
    </footer>
  );
};
