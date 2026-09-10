import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FAMILIES,
  formatPrice,
  featuredMachines,
  MACHINES,
} from "@/data/catalog";
import { imageForMachine } from "@/lib/images";
import { GoldButton } from "./gold-button";
import { BUSINESS_HOURS_LONG } from "@/lib/contact";

export function FlagshipShowcase() {
  const featured = featuredMachines();
  return (
    <section className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <SectionHead
          eyebrow="Equipos integrados"
          title="Flagship"
          subtitle="Las piezas centrales del catálogo BioHackPro. Equipos de máximo rendimiento para centros de longevidad y clínicas de referencia."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {featured.slice(0, 4).map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/maquinas/$slug"
                params={{ slug: m.slug }}
                className="group block border border-border/60 bg-surface/30 transition-all duration-500 hover:border-primary/60 hover:bg-surface"
              >
                <div className="relative aspect-square overflow-hidden bg-background">
                  <img
                    src={imageForMachine(m.slug, m.family)}
                    alt={m.name}
                    loading="lazy"
                    className="size-full object-cover opacity-90 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 border border-primary/50 bg-background/70 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
                    Flagship
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                    {FAMILIES.find((f) => f.slug === m.family)?.name}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {m.name}
                  </h3>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-foreground/85">
                    Desde {formatPrice(m.priceFrom)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
          {align === "center" && <span className="h-px w-8 bg-primary/60" />}
          {eyebrow}
          <span className="h-px w-8 bg-primary/60" />
        </p>
      )}
      <h2 className="font-display mt-5 text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FamiliesBento() {
  const counts = Object.fromEntries(
    FAMILIES.map((f) => [f.slug, MACHINES.filter((m) => m.family === f.slug).length]),
  );

  return (
    <section className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <SectionHead
          eyebrow="Categorías"
          title="Nueve tecnologías"
          subtitle="Cada familia agrupa equipos por tecnología y aplicación clínica. Explora la categoría que se adapta a tu centro."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-3">
          {FAMILIES.map((f, i) => {
            const span =
              i === 0
                ? "md:col-span-2 md:row-span-2"
                : i === 4
                  ? "md:col-span-2"
                  : "";
            return (
              <motion.div
                key={f.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className={`group relative overflow-hidden bg-surface ${span}`}
              >
                <Link
                  to="/categorias/$slug"
                  params={{ slug: f.slug }}
                  className="flex h-full flex-col justify-between border border-border/60 p-7 transition-all duration-500 hover:border-primary/60 hover:bg-surface-elevated"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {counts[f.slug]} equipos
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                      {f.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProofBand() {
  const stats = [
    { value: "−110", suffix: "ºC", label: "Crioterapia profesional" },
    { value: "2", suffix: "ATA", label: "Cámaras hiperbáricas" },
    { value: "45.000", suffix: "LEDs", label: "Fotobiomodulación XL" },
    { value: "CE", suffix: "MDR", label: "Certificación médica" },
  ];
  return (
    <section className="relative border-y border-border/60 bg-surface/40 px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto grid max-w-[1480px] gap-8 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-primary/40 pl-6">
            <p className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-gold-gradient">{s.value}</span>
              <span className="ml-2 text-base text-muted-foreground">{s.suffix}</span>
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SupportSection() {
  const items = [
    {
      n: "01",
      title: "Garantía 1 año",
      body: "Cobertura total contra defectos no derivados del mal uso. Soporte técnico priorizado.",
    },
    {
      n: "02",
      title: "Formación gratuita",
      body: "Formación online incluida y formación presencial en Barcelona sin coste adicional.",
    },
    {
      n: "03",
      title: "Instalación profesional",
      body: "Transporte, montaje y puesta en funcionamiento gestionados por nuestro equipo.",
    },
  ];
  return (
    <section className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <SectionHead
          eyebrow="Servicio profesional"
          title="Garantía y soporte"
          subtitle="No vendemos solo equipos. Acompañamos la puesta en marcha y la operación de cada máquina."
        />
        <div className="mt-14 grid gap-px bg-border/60 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.n}
              className="bg-background p-8 transition-colors duration-300 hover:bg-surface md:p-10"
            >
              <p className="font-display text-4xl font-bold text-gold-gradient md:text-5xl">{it.n}</p>
              <h3 className="font-display mt-6 text-lg font-bold uppercase tracking-tight md:text-xl">
                {it.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/60 to-background" />
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
          Solicita asesoramiento
        </p>
        <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
          ¿Listo para equipar tu centro?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Nuestro equipo te asesora en la selección de máquinas, layout del centro,
          formación y puesta en marcha. {BUSINESS_HOURS_LONG}.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GoldButton to="/contacto">Solicitar información</GoldButton>
          <GoldButton to="/maquinas" variant="outline">
            Explorar catálogo
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
