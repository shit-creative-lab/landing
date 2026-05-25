import { Reveal, MaskLine, RevealGroup, RevealItem } from "./motion";
import texture from "@/assets/texture-grain.jpg";

const principles = [
  { k: "01", v: "Sin eufemismos.", d: "Decimos lo que vemos. Inviertes en lo que verdaderamente importa." },
  { k: "02", v: "Sin discovery calls de 2h.", d: "Directo al grano y sin rodeos. Tu tiempo es el activo." },
  { k: "03", v: "Sin entregables decorativos.", d: "Si no cumple un objetivo, no se diseña ni se entrega." },
];

export const Manifesto = () => {
  return (
    <section
      id="manifiesto"
      aria-label="Sh*t Vision"
      className="relative overflow-hidden border-t border-border py-24 md:py-36 grain-overlay"
    >
      {/* texture wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" aria-hidden />

      <div className="container relative">
        <Reveal className="mb-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/65">
          <span className="h-px w-10 bg-brand-flame" />
          Sh*t Vision
        </Reveal>

        <blockquote className="max-w-6xl">
          <p className="font-display text-[clamp(2.4rem,7vw,7rem)] text-balance">
            <MaskLine>En SHIT Lab declaramos</MaskLine>
            <MaskLine delay={0.08}>
              la <span className="text-brand-flame">guerra</span> al{" "}
              <span className="font-editorial lowercase text-stroke">status quo</span>.
            </MaskLine>
          </p>

          <Reveal delay={0.15}>
            <p className="mt-12 max-w-5xl font-display text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[1.02]">
              La creatividad sin estrategia es{" "}
              <span className="font-editorial lowercase text-foreground/55">arte</span>.
              <br />
              La creatividad <span className="text-brand-flame">con</span> estrategia es{" "}
              <span className="text-brand-flame">poder</span>.
            </p>
          </Reveal>
        </blockquote>

        <RevealGroup className="mt-20 grid gap-px border border-border bg-border md:grid-cols-3">
          {principles.map((m) => (
            <RevealItem key={m.k}>
              <div className="h-full bg-background p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-flame">
                  {m.k}
                </div>
                <div className="mt-5 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[1]">
                  {m.v}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{m.d}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
