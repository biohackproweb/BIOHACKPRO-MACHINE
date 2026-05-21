import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  machineBySlug,
  familyBySlug,
  machinesByFamily,
  formatPrice,
} from "@/data/catalog";
import { imageForMachine } from "@/lib/images";
import { GoldButton } from "@/components/gold-button";
import { MachineCard } from "@/components/machine-card";

export const Route = createFileRoute("/maquinas/$slug")({
  head: ({ params }) => {
    const m = machineBySlug(params.slug);
    if (!m) return { meta: [{ title: "Máquina · BioHackPro" }] };
    return {
      meta: [
        { title: `${m.name} · BioHackPro Machines` },
        { name: "description", content: m.description },
        { property: "og:title", content: `${m.name} · BioHackPro` },
        { property: "og:description", content: m.tagline },
        { property: "og:image", content: imageForMachine(m.slug, m.family) },
      ],
    };
  },
  loader: ({ params }): { machine: NonNullable<ReturnType<typeof machineBySlug>> } => {
    const m = machineBySlug(params.slug);
    if (!m) throw notFound();
    return { machine: m };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-script text-primary text-2xl">404</p>
      <h1 className="font-display mt-4 text-4xl font-bold uppercase">Máquina no encontrada</h1>
      <Link to="/maquinas" className="mt-8 text-primary underline-offset-4 hover:underline">
        Ver catálogo completo
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 text-primary underline">
        Reintentar
      </button>
    </div>
  ),
  component: MachinePage,
});

function MachinePage() {
  const { machine } = Route.useLoaderData();
  const family = familyBySlug(machine.family)!;
  const related = machinesByFamily(machine.family)
    .filter((m) => m.slug !== machine.slug)
    .slice(0, 3);

  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <Link to="/maquinas" className="hover:text-primary">
              Catálogo
            </Link>
            <span>/</span>
            <Link
              to="/categorias/$slug"
              params={{ slug: family.slug }}
              className="hover:text-primary"
            >
              {family.name}
            </Link>
            <span>/</span>
            <span className="text-foreground">{machine.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="mt-10 px-6 md:px-10">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden border border-border/60 bg-surface lg:sticky lg:top-32 lg:self-start"
          >
            <img
              src={imageForMachine(machine.slug, machine.family)}
              alt={machine.name}
              className="size-full object-cover"
            />
            {machine.tier === "flagship" && (
              <span className="absolute left-5 top-5 border border-primary/60 bg-background/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-primary backdrop-blur">
                Flagship
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Link
              to="/categorias/$slug"
              params={{ slug: family.slug }}
              className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary hover:underline"
            >
              {family.name}
            </Link>
            <h1 className="font-display mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
              {machine.name}
            </h1>
            <p className="mt-5 text-lg text-foreground/85">{machine.tagline}</p>

            <div className="mt-10 border-y border-border/60 py-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Precio desde
              </p>
              <p className="font-display mt-2 text-4xl font-bold text-gold-gradient">
                {formatPrice(machine.priceFrom)}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Transporte, montaje y puesta en funcionamiento a consultar
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <GoldButton to="/contacto">Solicitar información</GoldButton>
              <GoldButton to="/contacto" variant="outline">
                Pedir presupuesto
              </GoldButton>
            </div>

            {machine.highlights.length > 0 && (
              <div className="mt-12">
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                  Aplicaciones clave
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {machine.highlights.map((h: string) => (
                    <span
                      key={h}
                      className="border border-border/60 px-3 py-1.5 text-xs text-foreground/80"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mt-14 border-t border-border/60 pt-10">
              <h2 className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                Descripción
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">
                {machine.description}
              </p>
            </div>

            {/* Specs */}
            <div className="mt-14 border-t border-border/60 pt-10">
              <h2 className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                Especificaciones técnicas
              </h2>
              <dl className="mt-6 divide-y divide-border/60">
                {machine.specs.map((s: { label: string; value: string }) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="font-display text-right text-base font-medium text-foreground">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Service */}
            <div className="mt-14 border-t border-border/60 pt-10">
              <h2 className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                Servicio incluido
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-primary" />
                  Garantía de 1 año contra todo defecto no derivado del mal uso.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-primary" />
                  Formación online incluida. Formación presencial gratuita en Barcelona.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-primary" />
                  Transporte, montaje y puesta en funcionamiento gestionados a consultar.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-32 px-6 md:px-10">
          <div className="mx-auto max-w-[1480px]">
            <div className="mb-10 flex items-end justify-between border-b border-border/60 pb-6">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                Más en {family.name}
              </h2>
              <Link
                to="/categorias/$slug"
                params={{ slug: family.slug }}
                className="text-[11px] uppercase tracking-[0.22em] text-primary hover:underline"
              >
                Ver familia →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((m, i) => (
                <MachineCard key={m.slug} machine={m} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
