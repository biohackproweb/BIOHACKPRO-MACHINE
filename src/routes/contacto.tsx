import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHead } from "@/components/home-sections";
import { FAMILIES } from "@/data/catalog";
import { buildContactWhatsAppMessage, whatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · BioHackPro Machines" },
      {
        name: "description",
        content:
          "Solicita información, presupuesto o asesoramiento para equipar tu centro con tecnología BioHackPro.",
      },
      { property: "og:title", content: "Contacto · BioHackPro Machines" },
      {
        property: "og:description",
        content: "Solicita información o presupuesto para tu centro.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-40 pb-20">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <SectionHead
            eyebrow="Solicita información"
            title="Hablemos de tu centro"
            subtitle="Cuéntanos qué tipo de proyecto estás desarrollando. Te respondemos con una propuesta personalizada en menos de 24 horas laborables."
          />
        </div>
      </section>

      <section className="mt-20 px-6 md:px-10">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="border border-border/60 bg-surface/30 p-8 md:p-12">
            {sent ? (
              <div className="py-16 text-center">
                <p className="font-script text-primary text-3xl">Gracias</p>
                <h3 className="font-display mt-4 text-3xl font-bold uppercase">
                  Solicitud enviada
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Te hemos redirigido a WhatsApp. Si no se abrió, escríbenos al{" "}
                  <a
                    href={whatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const familySlug = String(data.get("family") ?? "");
                  const familyLabel =
                    FAMILIES.find((f) => f.slug === familySlug)?.name ??
                    (familySlug === "varios" ? "Varias / asesoramiento integral" : "");

                  const url = whatsAppUrl(
                    buildContactWhatsAppMessage({
                      name: String(data.get("name") ?? ""),
                      email: String(data.get("email") ?? ""),
                      phone: String(data.get("phone") ?? ""),
                      company: String(data.get("company") ?? ""),
                      family: familyLabel,
                      message: String(data.get("message") ?? ""),
                    }),
                  );

                  window.open(url, "_blank", "noopener,noreferrer");
                  setSent(true);
                }}
                className="space-y-7"
              >
                <Field label="Nombre" name="name" required />
                <div className="grid gap-7 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Teléfono" name="phone" type="tel" />
                </div>
                <Field label="Centro / Empresa" name="company" />
                <div>
                  <label className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                    Tecnología de interés
                  </label>
                  <select
                    name="family"
                    className="mt-3 w-full border border-border/60 bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="">Selecciona una opción</option>
                    {FAMILIES.map((f) => (
                      <option key={f.slug} value={f.slug}>
                        {f.name}
                      </option>
                    ))}
                    <option value="varios">Varias / asesoramiento integral</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Cuéntanos brevemente tu proyecto, espacio y plazos..."
                    className="mt-3 w-full resize-none border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gold-gradient px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground transition hover:shadow-gold-strong"
                >
                  Enviar por WhatsApp →
                </button>
                <p className="text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Se abrirá WhatsApp · {WHATSAPP_DISPLAY}
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-10">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                Cómo trabajamos
              </p>
              <ol className="mt-6 space-y-5">
                {[
                  "Recibes una primera respuesta personalizada.",
                  "Te enviamos fichas técnicas y referencias detalladas.",
                  "Diseñamos la propuesta completa: equipos, layout, formación e instalación.",
                  "Confirmamos plazos, transporte y puesta en funcionamiento.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-4 text-sm text-foreground/85">
                    <span className="font-display shrink-0 text-primary">0{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-border/60 pt-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                WhatsApp directo
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Escríbenos para solicitar información, presupuesto o asesoramiento sobre equipos.
              </p>
              <a
                href={whatsAppUrl(
                  "Hola, me gustaría recibir información sobre BioHackPro Machines.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-primary hover:underline"
              >
                {WHATSAPP_DISPLAY} →
              </a>
            </div>

            <div className="border-t border-border/60 pt-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                Web principal
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Para reservas y servicios al cliente final, visita la web
                principal BioHackPro.
              </p>
              <a
                href="https://biohackpro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-primary hover:underline"
              >
                biohackpro.com →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
        {label} {required && <span className="text-primary/60">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className={cn(
          "mt-3 w-full border border-border/60 bg-background px-4 py-3 text-sm text-foreground",
          "placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none",
        )}
      />
    </div>
  );
}
