import { useRef, useEffect } from "react";
import { Reveal } from "./motion";
import malartista from "@/assets/logos/malartista.svg";
import arthelier from "@/assets/logos/arthelier.svg";
import rudeboyz from "@/assets/logos/rudeboyz.svg";
import ohra from "@/assets/logos/ohra.svg";
import doncottone from "@/assets/logos/doncottone.svg";
import elcielo from "@/assets/logos/elcielo.svg";
import drinko from "@/assets/logos/drinko.svg";
import noiiz from "@/assets/logos/noiiz.svg";
import mud from "@/assets/logos/mud.svg";
import discover from "@/assets/logos/discover.svg";
import youknow from "@/assets/logos/youknow.svg";
import amabogados from "@/assets/logos/amabogados.svg";
import sakura from "@/assets/logos/sakura.svg";
import desalojorecords from "@/assets/logos/desalojorecords.svg";
import fractedfilms from "@/assets/logos/fractedfilms.svg";
import amoreo from "@/assets/logos/amoreo.svg";

const clients = [
  { name: "DRINKO", logo: drinko },
  { name: "NOIIZ", logo: noiiz },
  { name: "MUD", logo: mud },
  { name: "DISCOVER", logo: discover },
  { name: "MAL ARTISTA", logo: malartista },
  { name: "ARTHELIER", logo: arthelier },
  { name: "RUDE BOYZ", logo: rudeboyz },
  { name: "OHRA", logo: ohra },
  { name: "DON COTTONE", logo: doncottone },
  { name: "EL CIELO", logo: elcielo },
  { name: "YOU KNOW", logo: youknow },
  { name: "AM ABOGADOS", logo: amabogados },
  { name: "SAKURA", logo: sakura },
  { name: "DESALOJO RECORDS", logo: desalojorecords },
  { name: "FRACTED FILMS", logo: fractedfilms },
  { name: "AMOREO", logo: amoreo },
];

const LogoItem = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex shrink-0 items-center gap-5 border-r border-border px-9 py-7">
    <img
      src={logo}
      alt={`${name} — cliente de SHIT Lab`}
      loading="lazy"
      className="h-9 md:h-11 w-auto max-w-[170px] object-contain opacity-75 transition-opacity hover:opacity-100"
    />
  </div>
);

export const Clients = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SPEED = 70;
    let raf = 0;
    let last = 0;
    let pos = 0;
    let copyWidth = 0;
    let running = false;
    let paused = false;
    let dragging = false;
    let dragStartX = 0;
    let dragStartPos = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartPos = 0;

    const wrap = (p: number) => {
      if (copyWidth === 0) return p;
      p = p % copyWidth;
      if (p > 0) p -= copyWidth;
      return p;
    };

    const applyTransform = () => {
      if (trackRef.current)
        trackRef.current.style.transform = `translate3d(${pos}px, 0, 0)`;
    };

    const tick = (now: number) => {
      if (!running) return;
      if (!paused && !dragging) {
        if (last === 0) last = now;
        const dt = (now - last) / 1000;
        pos = wrap(pos - SPEED * dt);
      }
      last = now;
      applyTransform();
      raf = requestAnimationFrame(tick);
    };

    // — Hover pause —
    const onMouseEnter = () => { paused = true; };
    const onMouseLeave = () => { paused = false; last = 0; };

    // — Mouse drag —
    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      dragStartX = e.clientX;
      dragStartPos = pos;
      (e.currentTarget as HTMLElement).style.cursor = "grabbing";
      (e.currentTarget as HTMLElement).style.userSelect = "none";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      pos = wrap(dragStartPos + (e.clientX - dragStartX));
      applyTransform();
    };
    const onMouseUp = (e: MouseEvent) => {
      if (!dragging) return;
      dragging = false;
      last = 0;
      const container = trackRef.current?.parentElement;
      if (container) {
        container.style.cursor = "grab";
        container.style.userSelect = "";
      }
    };

    // — Touch swipe —
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartPos = pos;
      paused = true;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy)) {
        e.preventDefault();
        pos = wrap(touchStartPos + dx);
        applyTransform();
      }
    };
    const onTouchEnd = () => { paused = false; last = 0; };

    // — IntersectionObserver —
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        if (copyWidth === 0 && trackRef.current)
          copyWidth = trackRef.current.scrollWidth / 2;
        running = true;
        last = 0;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    }, { threshold: 0 });

    const section = trackRef.current?.closest("section");
    const container = trackRef.current?.parentElement;

    if (section) observer.observe(section);
    if (container) {
      container.style.cursor = "grab";
      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
      container.addEventListener("mousedown", onMouseDown);
      container.addEventListener("touchstart", onTouchStart, { passive: true });
      container.addEventListener("touchmove", onTouchMove, { passive: false });
      container.addEventListener("touchend", onTouchEnd);
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      if (container) {
        container.style.cursor = "";
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
        container.removeEventListener("mousedown", onMouseDown);
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
        container.removeEventListener("touchend", onTouchEnd);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <section
      id="clientes"
      aria-label="Clientes"
      className="relative border-t border-border bg-background py-16 md:py-20"
    >
      <div className="container">
        <Reveal className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/65">
              <span className="h-px w-10 bg-brand-flame" />
              Track Record
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)]">
              Ellos confiaron en{" "}
              <span className="font-editorial lowercase text-brand-flame">shit lab</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-foreground/65">
            16 marcas — Desde bebidas hasta real estate — No existe SHIT que no se pueda transformar.
          </p>
        </Reveal>
      </div>

      {/* Edge-to-edge marquee — animado con requestAnimationFrame */}
      <div className="relative overflow-hidden border-y border-border">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {/* dos copias identicas — suficiente para loop perfecto */}
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup > 0}>
              {clients.map((c) => (
                <LogoItem key={`${dup}-${c.name}`} name={c.name} logo={c.logo} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
          [ Selección · 2024—2026 ]
        </p>
      </div>
    </section>
  );
};
