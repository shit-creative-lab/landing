import { Reveal, RevealGroup, RevealItem } from "./motion";

const pillars = [
  {
    code: "Lab 01",
    meta: "Estrategia y consultoría",
    title: "Brand Architecture",
    sub: "Branding · Reputación · Posicionamiento",
    desc: "Para marcas que necesitan autoridad. Construimos el sistema, el relato y la estética que te hacen imposible de ignorar.",
    tags: ["Brand Equity", "Reputación", "Identidad", "Branding", "Posicionamiento"],
  },
  {
    code: "Lab 02",
    meta: "Campañas y contenido de impacto",
    title: "Hype Engineering",
    sub: "Publicidad · Viralidad · Cultura",
    desc: "Secuestramos la atención con campañas, contenido y stunts diseñados para meterse en la conversación —no para verse bonitos.",
    tags: ["Campañas", "Social Media", "Stunts", "Lanzamientos", "Anti-Brain Rot"],
  },
  {
    code: "Lab 03",
    meta: "Acompañamiento legal",
    title: "Legal Structure",
    sub: "Activos · Acuerdos · Protección",
    desc: "Audacia con suelo firme. Estructuramos contratos, marca registrada y deals para que el éxito no te explote en la cara.",
    tags: ["Contratos", "Propiedad Intelectual", "Compliance", "Deals", "Alianzas"],
  },
];

export const Pillars = () => {
  return (
    <section
      id="pilares"
      aria-label="Qué hacemos"
      className="relative border-t border-border bg-background py-24 md:py-32"
    >
      <div className="container">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/65">
              <span className="h-px w-10 bg-brand-flame" />
              What We Do
            </div>
            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)]">
              Nuestros <span className="font-editorial lowercase text-brand-flame">labs</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-foreground/80">
            Tres modelos. Una sola filosofía:{" "}
            <span className="text-foreground">Studio of High-Impact Tactics</span>. Lo que
            necesites, en el orden que lo necesites.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 border-t border-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <RevealItem key={p.code}>
              <article
                className={`hover-flame group relative flex h-full flex-col border-b border-border p-8 md:p-10 md:border-b-0 ${
                  i < 2 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.28em]">
                  <span className="text-brand-flame group-hover:text-brand-pampas">
                    {p.code}
                  </span>
                  <span className="text-foreground/55 group-hover:text-brand-pampas/70">
                    0{i + 1} / 03
                  </span>
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55 group-hover:text-brand-pampas/70">
                  {p.meta}
                </div>

                <h3 className="mt-7 flex min-h-[2.05em] items-end font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-[0.98]">
                  {p.title}
                </h3>
                <p className="mt-3 font-editorial text-xl">{p.sub}</p>

                <p className="mt-6 text-sm leading-relaxed text-foreground/75 group-hover:text-brand-pampas/90">
                  {p.desc}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] group-hover:border-brand-pampas/45"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]"
                  >
                    Activar lab
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
