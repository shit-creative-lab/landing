import { useRef, useEffect, useState } from "react";
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
  const [offset, setOffset] = useState(0);

  // Animacion con requestAnimationFrame: independiente del ancho de pantalla.
  // Recalcula el ancho real de UNA copia y reinicia sin saltos visibles.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SPEED = 70; // pixeles por segundo — sube para mas rapido
    let raf = 0;
    let last = performance.now();
    let pos = 0;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const track = trackRef.current;
      if (track) {
        // ancho de una sola copia = mitad del scrollWidth (hay 2 copias)
        const copyWidth = track.scrollWidth / 2;
        pos -= SPEED * dt;
        if (copyWidth > 0 && pos <= -copyWidth) {
          pos += copyWidth;
        }
        setOffset(pos);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
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
            transform: `translate3d(${offset}px, 0, 0)`,
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
