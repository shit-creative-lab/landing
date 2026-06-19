import { useEffect } from "react";

const PoliticaDatos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-background">
        <div className="container flex h-[68px] items-center justify-between">
          <a href="/" className="font-display text-2xl">SHIT/LAB</a>
          <a href="/" className="font-mono text-[11px] uppercase tracking-[0.2em] link-underline">
            Volver al sitio
          </a>
        </div>
      </div>

      <div className="container py-16 md:py-24 max-w-4xl">
        {/* Titulo */}
        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/65">
          <span className="h-px w-10 bg-brand-flame" />
          Legal
        </div>
        <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] mb-4">
          Política de Tratamiento de Datos Personales
        </h1>
        <p className="font-editorial text-xl text-foreground/70 mb-12">
          Conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013
        </p>

        <div className="space-y-10 font-body text-base leading-relaxed">

          {/* 1 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">1. Identificación del Responsable</h2>
            <dl className="space-y-3">
              {[
                ["Responsable", "SHIT Creative Lab"],
                ["Tipo de persona", "Persona Natural"],
                ["Cédula de ciudadanía", "1.000.416.968"],
                ["Dirección", "Cl 20A Sur #22-236, El Poblado, Medellín, Colombia"],
                ["Correo electrónico", "team@shitcreativelab.com"],
                ["Teléfono", "+57 324 278 8459"],
                ["Sitio web", "www.shitcreativelab.com"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-12 gap-2 border-b border-border/40 pb-3">
                  <dt className="col-span-12 md:col-span-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-flame">{k}</dt>
                  <dd className="col-span-12 md:col-span-8">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 2 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">2. Marco Legal</h2>
            <p className="text-foreground/80">
              La presente política se desarrolla en cumplimiento de la Constitución Política de Colombia
              (Art. 15), la Ley Estatutaria 1581 de 2012 de Protección de Datos Personales, el Decreto
              Reglamentario 1377 de 2013, y las demás normas que las modifiquen, adicionen o complementen.
            </p>
          </section>

          {/* 3 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">3. Datos que Recopilamos</h2>
            <p className="text-foreground/80 mb-4">A través de nuestro sitio web y canales de contacto recopilamos:</p>
            <ul className="space-y-2 text-foreground/80">
              {[
                "Nombre completo",
                "Correo electrónico",
                "Número de teléfono o celular",
                "Nombre de empresa o proyecto",
                "Información sobre presupuesto y necesidades del proyecto",
                "Datos de navegación (a través de Google Analytics/Tag Manager)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-brand-flame" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">4. Finalidades del Tratamiento</h2>
            <p className="text-foreground/80 mb-4">Sus datos personales serán utilizados para:</p>
            <ul className="space-y-2 text-foreground/80">
              {[
                "Gestionar solicitudes, cotizaciones y comunicaciones comerciales",
                "Enviar propuestas, presupuestos e información sobre nuestros servicios",
                "Dar seguimiento a proyectos y relaciones comerciales",
                "Enviar comunicaciones de marketing con previo consentimiento",
                "Cumplir obligaciones legales y contractuales",
                "Mejorar la experiencia del usuario en nuestro sitio web",
                "Analizar métricas de uso y comportamiento en el sitio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-brand-flame" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">5. Derechos del Titular</h2>
            <p className="text-foreground/80 mb-4">
              De conformidad con el artículo 8 de la Ley 1581 de 2012, usted como titular tiene derecho a:
            </p>
            <ul className="space-y-2 text-foreground/80">
              {[
                "Conocer, actualizar y rectificar sus datos personales",
                "Solicitar prueba de la autorización otorgada para el tratamiento",
                "Ser informado sobre el uso que se ha dado a sus datos personales",
                "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC)",
                "Revocar la autorización y/o solicitar la supresión de sus datos",
                "Acceder gratuitamente a sus datos personales que hayan sido objeto de tratamiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-brand-flame" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 6 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">6. Procedimiento para Ejercer sus Derechos</h2>
            <p className="text-foreground/80 mb-4">
              Para ejercer cualquiera de sus derechos, el titular o su representante debidamente
              acreditado puede enviar su solicitud por los siguientes medios:
            </p>
            <dl className="space-y-3">
              {[
                ["Correo electrónico", "team@shitcreativelab.com"],
                ["Teléfono / WhatsApp", "+57 324 278 8459"],
                ["Dirección física", "Cl 20A Sur #22-236, El Poblado, Medellín"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-12 gap-2 border-b border-border/40 pb-3">
                  <dt className="col-span-12 md:col-span-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-flame">{k}</dt>
                  <dd className="col-span-12 md:col-span-8">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-foreground/80">
              La respuesta se dará en un plazo máximo de <strong>diez (10) días hábiles</strong> para
              consultas y <strong>quince (15) días hábiles</strong> para reclamos, contados desde la
              fecha de recibo de la solicitud.
            </p>
          </section>

          {/* 7 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">7. Transferencia y Transmisión de Datos</h2>
            <p className="text-foreground/80">
              SHIT Creative Lab podrá compartir datos personales con terceros proveedores de servicios
              tecnológicos necesarios para la operación del negocio (como HubSpot CRM y Google Analytics),
              quienes actúan como encargados del tratamiento bajo estrictas obligaciones de
              confidencialidad y seguridad. No venderemos ni cederemos sus datos a terceros con fines
              comerciales no autorizados.
            </p>
          </section>

          {/* 8 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">8. Seguridad de la Información</h2>
            <p className="text-foreground/80">
              Adoptamos las medidas técnicas, humanas y administrativas necesarias para garantizar la
              seguridad de los datos personales y evitar su adulteración, pérdida, consulta, uso o
              acceso no autorizado o fraudulento.
            </p>
          </section>

          {/* 9 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">9. Vigencia de la Política</h2>
            <p className="text-foreground/80">
              La presente política rige a partir del <strong>26 de mayo de 2026</strong> y permanecerá
              vigente mientras SHIT Creative Lab desarrolle actividades de tratamiento de datos
              personales. Cualquier cambio sustancial será informado a través del sitio web
              www.shitcreativelab.com con al menos treinta (30) días de anticipación.
            </p>
          </section>

          {/* 10 */}
          <section className="border-t border-border pt-8">
            <h2 className="font-display text-2xl mb-4">10. Autoridad de Control</h2>
            <p className="text-foreground/80">
              El titular que considere que la información no ha sido tratada conforme a la ley puede
              presentar una queja ante la Superintendencia de Industria y Comercio (SIC), entidad
              encargada de vigilar el cumplimiento de la normativa de protección de datos personales
              en Colombia. Sitio web:{" "}
              <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer"
                className="link-underline text-brand-flame">
                www.sic.gov.co
              </a>
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-border pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/55 mb-6">
            ¿Tienes preguntas sobre tus datos?
          </p>
          <a
            href="mailto:team@shitcreativelab.com"
            className="inline-flex items-center gap-4 border border-foreground bg-foreground px-7 py-4 text-background transition-colors hover:bg-brand-flame hover:border-brand-flame hover:text-brand-pampas"
          >
            <span className="font-display text-2xl">Contáctanos</span>
            <span className="font-mono text-xs">team@shitcreativelab.com</span>
          </a>
        </div>

      </div>

      {/* Footer minimo */}
      <div className="border-t border-border">
        <div className="ticker-divider h-1.5 w-full" />
        <div className="container py-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/55">
          <span>© 2026 SHIT Creative Lab</span>
          <a href="/" className="link-underline">Volver al sitio</a>
        </div>
      </div>
    </main>
  );
};

export default PoliticaDatos;
