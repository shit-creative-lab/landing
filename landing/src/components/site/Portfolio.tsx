import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";
import drinko from "@/assets/drinko-1.jpg";
import drinko2 from "@/assets/drinko-2.jpg";
import ad1Drinko from "@/assets/ad1-drinko.mp4";
import ad2Drinko from "@/assets/ad2-drinko.mp4";
import startup from "@/assets/startup-1.jpg";
import startup2 from "@/assets/startup-2.jpg";
import noz from "@/assets/noiz-1.jpg";
import noz2 from "@/assets/noiz-2.jpg";
import noz3 from "@/assets/noiz-3.jpg";
type GalleryItem = 
  | { type: "image"; src: string }
  | { type: "video"; url: string }
  | { type: "iframe"; url: string };

type Case = {
  n: string;
  name: string;
  img: string;
  tag: string;
  shortImpact: string;
  chaos: string;
  move: string;
  impact: string;
  gallery: GalleryItem[];
};

const cases: Case[] = [
  {
    n: "01",
    name: "STARTUP",
    img: startup,
    tag: "Real Estate · Branding · Web",
    shortImpact: "Referente de pensamiento inmobiliario en LATAM.",
    chaos: "Hub inmobiliario con autoridad tecnica pero estetica de PDF de 2014.",
    move: "Reconstruccion total: identidad, voz y plataforma editorial pensada como medio, no como portafolio.",
    impact: "Posicionamiento como referente de pensamiento inmobiliario en LATAM.",
    gallery: [
      { type: "image", src: startup2 },
      { type: "video", url: "https://www.youtube.com/embed/fkCs_U2Okaw" },
      { type: "image", src: startup },
    ],
  },
  {
  n: "02",
  name: "DRINKO",
  img: drinko,
  tag: "Beverage · Stream Fighters 4",
  shortImpact: "+4M de espectadores. Cero pesos en pauta.",
  chaos: "Marca emergente con cero awareness frente a gigantes con presupuesto de pauta.",
  move: "Hype engineering quirurgico dentro del ecosistema Stream Fighters: storyline, drops y momentos virales.",
  impact: "+4M de espectadores. Cero pesos en pauta paga.",
  gallery: [
    { type: "video", url: ad1Drinko },
    { type: "image", src: drinko2 },
    { type: "video", url: ad2Drinko },
  ],
},
  {
  n: "03",
  name: "NO//Z",
  img: noz,
  tag: "Nightlife · Brand System",
  shortImpact: "De club a referente cultural premium.",
  chaos: "Marca arrastrando estigma nocturno y percepcion de bajo perfil cultural.",
  move: "Reposicionamiento como ecosistema premium: identidad, ritual de marca y curaduria de experiencias.",
  impact: "De club a referente cultural premium con waiting list propia.",
  gallery: [
    { type: "image", src: noz },
    { type: "image", src: noz2 },
    { type: "image", src: noz3 },
  ],
},
  {
    n: "04",
    name: "KZO BEAT",
    img: kzo,
    tag: "Musica Urbana · Networking",
    shortImpact: "Nodo central de la escena urbana en Medellin.",
    chaos: "Talento sin red. Escena urbana fragmentada y sin posicionamiento estrategico.",
    move: "Diseno y ejecucion de eventos masivos de networking + narrativa de marca para artistas.",
    impact: "Posicionamiento como nodo central de la escena urbana en Medellin.",
    gallery: [
      { type: "video", url: kzo1 },
      { type: "video", url: "https://www.youtube.com/embed/lXAGxIcbEIQ" },
      { type: "video", url: kzo2 },
    ],
  },
];

export const Portfolio = () => {
  const [active, setActive] = useState<Case | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="trabajo"
      aria-label="Trabajo"
      className="relative border-t border-border py-24 md:py-32"
    >
      <div className="container">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/65">
              <span className="h-px w-10 bg-brand-flame" />
              Our Work
            </div>
            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)]">
              Desorden /{" "}
              <span className="font-editorial lowercase text-brand-flame">
                estrategia
              </span>{" "}
              / Holy Sh*t
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-foreground/80">
            Cuatro marcas. Cuatro visiones. Un solo resultado: Amazing SHIT.
          </p>
        </Reveal>
      </div>

      <div className="container grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-12">
        {cases.map((c, i) => {
          const wide = i === 0 || i === 3;
          return (
            <Reveal
              key={c.n}
              delay={i * 0.06}
              className={wide ? "md:col-span-7" : "md:col-span-5"}
            >
              <button
                type="button"
                onClick={() => setActive(c)}
                aria-label={"Abrir caso " + c.name}
                className="group relative block h-full min-h-[58vh] w-full overflow-hidden bg-background text-left grain-overlay focus:outline-none"
              >
                <img
                  src={c.img}
                  alt={"Caso " + c.name + " — " + c.tag}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                  <span className="border border-foreground bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm">
                    Case #{c.n}
                  </span>
                </div>
                <div className="absolute right-4 top-4 z-10 max-w-[55%] border border-foreground bg-background/85 px-2.5 py-1 text-right font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm">
                  {c.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                  <h3 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] leading-[0.95]">
                    {c.name}
                  </h3>
                  <p className="mt-2 max-w-[34ch] font-editorial text-lg text-brand-flame md:text-xl">
                    {c.shortImpact}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/80">
                    Ver caso
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/40 backdrop-blur-sm p-3 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={"Caso " + active.name}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-4 w-full max-w-5xl border border-foreground bg-background shadow-brutal-lg"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Cerrar"
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-foreground bg-background font-mono text-lg transition-colors hover:bg-brand-flame hover:text-brand-pampas"
              >
                x
              </button>

              <div className="relative h-[38vh] overflow-hidden grain-overlay md:h-[48vh]">
                <img
                  src={active.img}
                  alt={active.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute left-5 top-5 border border-foreground bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                  Case #{active.n}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                  <h3 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.92]">
                    {active.name}
                  </h3>
                  <p className="mt-2 font-editorial text-xl text-brand-flame md:text-2xl">
                    {active.shortImpact}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <dl className="space-y-6 border-t border-border pt-7">
                  {[
                    { k: "El Problema", v: active.chaos },
                    { k: "Intervencion", v: active.move },
                    { k: "Holy Sh*t", v: active.impact, accent: true },
                  ].map((row) => (
                    <div key={row.k} className="grid grid-cols-12 gap-3 md:gap-5">
                      <dt className="col-span-12 pt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-brand-flame md:col-span-3">
                        {row.k}
                      </dt>
                      <dd
                        className={"col-span-12 leading-relaxed md:col-span-9 " + (row.accent ? "font-editorial text-2xl text-foreground" : "text-foreground/85")}
                      >
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10">
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/60">
                    Galeria
                  </div>
                  <div className="grid grid-cols-3 gap-px border border-border bg-border">
                    {active.gallery.map((item, i) => (
                      <div key={i} className="aspect-[4/5] overflow-hidden bg-background">
                        {item.type === "video" ? (
  <video
    src={item.url}
    className="h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
) : item.type === "iframe" ? (
  <iframe
    src={item.url}
    className="h-full w-full"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title={active.name + " — video"}
  />
) : (
  <img
    src={item.src}
    alt={active.name + " — imagen " + (i + 1)}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
  />
)}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contacto"
                  onClick={() => setActive(null)}
                  className="mt-10 flex items-center justify-between border border-foreground bg-foreground px-6 py-4 text-background transition-colors hover:bg-brand-flame hover:border-brand-flame hover:text-brand-pampas"
                >
                  <span className="font-display text-2xl">Quiero un caso asi</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">Agendar</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
