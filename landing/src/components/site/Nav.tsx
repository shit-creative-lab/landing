import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import slabLogo from "@/assets/slab-logo.svg";
import { useScrollLock } from "@/hooks/use-scroll-lock";

const links = [
  { href: "#trabajo", label: "Our Work", n: "01" },
  { href: "#pilares", label: "What We Do", n: "02" },
  { href: "#manifiesto", label: "Sh*t Vision", n: "03" },
  { href: "#contacto", label: "Contact", n: "04" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useScrollLock(open);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container flex h-[68px] items-center justify-between">
        <a href="#top" className="flex items-end gap-3 shrink-0" aria-label="SHIT Lab — inicio">
          <img src={slabLogo} alt="SHIT Lab" className="h-5 md:h-[22px] w-auto" />
          <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60 pb-[2px]">
            Est. 2024
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em]"
              >
                <span className="text-flame-pea/0 text-brand-flame transition-opacity opacity-40 group-hover:opacity-100">
                  {l.n}
                </span>
                <span className="link-underline pb-0.5 text-foreground">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-background transition-colors hover:bg-brand-flame hover:border-brand-flame hover:text-brand-pampas"
          >
            Agendar
            <span aria-hidden className="animate-blink">▌</span>
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="md:hidden flex h-9 w-9 items-center justify-center border border-foreground"
          >
            <div className="relative h-3 w-4">
              <span className={`absolute left-0 h-[2px] w-full bg-foreground transition-all ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-foreground transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-[2px] w-full bg-foreground transition-all ${open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden border-t border-border bg-background"
        >
          <ul className="container divide-y divide-border">
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5"
                >
                  <span className="font-mono text-[11px] text-brand-flame">{l.n}</span>
                  <span className="font-display text-4xl">{l.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="container py-6">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block border border-foreground bg-foreground py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-background"
            >
              Agendar 30 min
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
