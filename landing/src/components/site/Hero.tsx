import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLine } from "./motion";
import heroImg from "@/assets/hero-flash.jpg";

const ticker = [
  "Brand Architecture", "Hype Engineering", "Legal Structure",
  "No corporate bullsh*t", "Medellín · Bogotá · Miami",
];

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden grain-overlay pt-[68px]"
    >
      {/* Parallax editorial image */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: imgY, scale: imgScale }}
          className="absolute right-0 top-0 h-[112%] w-full md:w-[52%]"
        >
          <img
            src={heroImg}
            alt="Retrato editorial con flash — SHIT Lab"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/55 md:via-background/35 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/55 md:via-transparent" />
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-y border-border bg-background/55 backdrop-blur-sm">
        <div className="flex items-center gap-6 overflow-hidden py-2.5">
          <span className="ml-5 shrink-0 font-mono text-[10px] uppercase tracking-[0.28em] text-brand-flame">
            ● Live / 2026
          </span>
          <div className="flex marquee-track whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                {ticker.map((t, i) => (
                  <span key={i} className="flex items-center font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70">
                    <span className="px-6">{t}</span>
                    <span className="text-brand-flame">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container relative z-10 grid min-h-[calc(100svh-68px-49px)] content-center py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/70"
        >
          <span className="h-px w-10 bg-brand-flame" />
          Studio of High-Impact Tactics
        </motion.div>

        <h1 className="font-display text-[clamp(3.2rem,11.5vw,11.5rem)] text-balance">
  <span className="block">Stop planning.</span>
  <span className="block">
    <span className="text-stroke-accent">Start doing</span>
  </span>
  <span className="block">
    some good <span className="text-brand-flame">Sh*t.</span>
  </span>
</h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 max-w-xl text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty"
        >
          Transformamos visiones ambiciosas y bloqueos empresariales en{" "}
          <span className="font-editorial text-foreground">
            marcas memorables y negocios con autoridad.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-11 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-4 border border-foreground bg-foreground px-7 py-4 text-background shadow-brutal transition-all hover:bg-brand-flame hover:border-brand-flame hover:text-brand-pampas hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
          >
            <span className="font-display text-2xl md:text-[1.7rem]">
              Get your Sh*t together
            </span>
            <span className="font-mono text-sm transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 leading-relaxed">
            <div>No discovery calls de 2h.</div>
            <div className="text-foreground">30 min — acción inmediata.</div>
          </div>
        </motion.div>
      </div>

      {/* Corner specs */}
      <div className="absolute bottom-5 left-5 z-10 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 sm:block">
        N 06°14′ — W 75°34′
      </div>
      <div className="absolute bottom-5 right-5 z-10 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 sm:block">
        Rec <span className="text-brand-flame animate-blink">●</span>
      </div>
    </section>
  );
};
