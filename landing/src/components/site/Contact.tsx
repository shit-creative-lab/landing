import { useState } from "react";
import { Reveal } from "./motion";

const HUBSPOT_PORTAL_ID = "50477825";
const HUBSPOT_FORM_GUID = "bc8b79c6-1299-4237-8822-92f53b44bd08";
const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

type Status = "idle" | "sending" | "ok" | "error";

const contactRows = [
  { k: "Email", v: "team@shitcreativelab.com", href: "mailto:team@shitcreativelab.com" },
  { k: "WhatsApp", v: "+57 324 278 8459", href: "https://wa.me/573242788459" },
  { k: "Instagram", v: "@shit.lab", href: "https://www.instagram.com/shit.lab/", accent: true },
  { k: "Hubs", v: "MDE / BOG / MIA" },
];

export const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    dinero_presupuestado: "",
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(HUBSPOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: form.firstname },
            { name: "email", value: form.email },
            { name: "phone", value: form.phone },
            { name: "mobilephone", value: form.phone },
            { name: "phonenumber", value: form.phone },
            { name: "telefono", value: form.phone },
            { name: "company", value: form.company },
            { name: "message", value: form.message },
            { name: "dinero_presupuestado", value: form.dinero_presupuestado },
          ],
          context: {
            pageName: "SHIT Lab - Landing",
            pageUri: typeof window !== "undefined" ? window.location.href : "",
          },
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      setForm({ firstname: "", email: "", phone: "", company: "", message: "", dinero_presupuestado: "" });
      window.open("https://wa.me/573242788459", "_blank");
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-foreground/35 focus:border-brand-flame";

  return (
    <section
      id="contacto"
      aria-label="Contacto"
      className="relative border-t border-border py-24 md:py-32"
    >
      <div className="container grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/65">
              <span className="h-px w-10 bg-brand-flame" />
              Contact
            </div>
            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
              Buscas impacto
              <br />
              o mas <span className="text-brand-flame">bullsh*t?</span>
            </h2>
            <p className="mt-6 max-w-sm text-pretty text-foreground/80">
              Cuentanos el bloqueo real. No los sintomas, no la version presentable. El que tu solo sabes.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-11 border-t border-border">
              {contactRows.map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between border-b border-border py-3.5 font-mono text-xs uppercase tracking-[0.16em]"
                >
                  <dt className="text-foreground/60">{r.k}</dt>
                  <dd className={r.accent ? "text-brand-flame" : ""}>
                    {r.href ? (
                      <a
                        href={r.href}
                        target={r.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="link-underline pb-0.5"
                      >
                        {r.v}
                      </a>
                    ) : (
                      r.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="corner-tick relative border border-foreground bg-card p-6 shadow-brutal md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="c-firstname" className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                  01 / Nombre
                </label>
                <input
                  id="c-firstname"
                  required
                  value={form.firstname}
                  onChange={set("firstname")}
                  placeholder="Tu nombre completo"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="c-email" className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                  02 / Correo
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="tu@correo.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <label htmlFor="c-phone" className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                03 / Telefono
              </label>
              <input
                id="c-phone"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+57 300 000 0000"
                className={fieldClass}
              />
            </div>

            <div className="mt-8 space-y-2">
              <label htmlFor="c-company" className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                04 / Nombre de la empresa
              </label>
              <input
                id="c-company"
                required
                value={form.company}
                onChange={set("company")}
                placeholder="Tu marca / empresa"
                className={fieldClass}
              />
            </div>

            <div className="mt-8 space-y-2">
              <label htmlFor="c-message" className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                05 / Mensaje
              </label>
              <textarea
                id="c-message"
                required
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder="No suavices. El bloqueo real. El que ni le cuentas a tu socio."
                className={`${fieldClass} resize-none text-base`}
              />
            </div>

            <div className="mt-8 space-y-2">
              <label htmlFor="c-budget" className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                06 / Presupuesto (COP)
              </label>
              <input
                id="c-budget"
                type="number"
                min="0"
                value={form.dinero_presupuestado}
                onChange={set("dinero_presupuestado")}
                placeholder="Ej. 5000000"
                className={fieldClass}
              />
            </div>

            {status === "ok" && (
              <p className="mt-6 border border-brand-green bg-brand-green/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-green">
                Mensaje recibido. Te contactamos en menos de 24h.
              </p>
            )}
            {status === "error" && (
              <p className="mt-6 border border-brand-flame bg-brand-flame/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-flame">
                No se pudo enviar. Escribenos a team@shitcreativelab.com
              </p>
            )}

            <div className="mt-8 flex items-start gap-3">
              <input
                id="c-terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer"
                style={{ accentColor: "hsl(14 71% 54%)" }}
              />
              <label htmlFor="c-terms" className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 leading-relaxed">
                He leido y acepto la{" "}
                <a
                  href="/politica-de-datos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-flame link-underline pb-0.5"
                >
                  Politica de Tratamiento de Datos Personales
                </a>
                . Autorizo el uso de mis datos conforme a la Ley 1581 de 2012.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-10 flex w-full items-center justify-between border border-foreground bg-foreground px-6 py-5 text-background transition-all hover:bg-brand-flame hover:border-brand-flame hover:text-brand-pampas disabled:cursor-wait disabled:opacity-60"
            >
              <span className="font-display text-2xl md:text-[1.7rem]">
                {status === "sending" ? "Enviando..." : "Enviar el Sh*t"}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                Respuesta &lt; 24h
              </span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
