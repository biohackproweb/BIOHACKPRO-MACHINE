import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  familyBySlug,
  machinesByFamily,
  FAMILIES,
} from "@/data/catalog";
import { imageForFamily } from "@/lib/images";
import { MachineCard } from "@/components/machine-card";
import { GoldButton } from "@/components/gold-button";

export const Route = createFileRoute("/categorias/$slug")({
  head: ({ params }) => {
    const family = familyBySlug(params.slug);
    if (!family) return { meta: [{ title: "Categoría · BioHackPro Machines" }] };
    return {
      meta: [
        { title: `${family.name} · BioHackPro Machines` },
        { name: "description", content: family.description },
        { property: "og:title", content: `${family.name} · BioHackPro Machines` },
        { property: "og:description", content: family.description },
        { property: "og:image", content: imageForFamily(family.slug) },
      ],
    };
  },
  loader: ({ params }): { family: NonNullable<ReturnType<typeof familyBySlug>> } => {
    const family = familyBySlug(params.slug);
    if (!family) throw notFound();
    return { family };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-script text-primary text-2xl">404</p>
      <h1 className="font-display mt-4 text-4xl font-bold uppercase">Categoría no encontrada</h1>
      <Link to="/categorias" className="mt-8 text-primary underline-offset-4 hover:underline">
        Ver todas las categorías
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
  component: FamilyPage,
});

function FamilyPage() {
  const { family } = Route.useLoaderData();
  const machines = machinesByFamily(family.slug);
  const otherFamilies = FAMILIES.filter((f) => f.slug !== family.slug).slice(0, 4);

  return (
    <div className="pt-40 pb-20">
      {/* Hero */}
      <section className="relative px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <Link
            to="/categorias"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            ← Todas las categorías
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end"
          >
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                Familia · {machines.length} equipos
              </p>
              <h1 className="font-display mt-5 text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
                {family.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {family.description}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border/60">
              <img
                src={imageForFamily(family.slug)}
                alt={family.name}
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="mt-24 px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-10 flex items-end justify-between border-b border-border/60 pb-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {machines.length} equipos en {family.name}
            </p>
            <Link
              to="/maquinas"
              className="text-[11px] uppercase tracking-[0.22em] text-primary hover:underline"
            >
              Ver catálogo completo →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machines.map((m, i) => (
              <MachineCard key={m.slug} machine={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1480px] border border-border/60 bg-surface/30 p-10 text-center md:p-16">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">
            ¿No sabes cuál se adapta a tu centro?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Te ayudamos a elegir la configuración óptima según tu espacio,
            público y objetivos clínicos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GoldButton to="/contacto">Pedir asesoramiento</GoldButton>
          </div>
        </div>
      </section>

      {/* Other families */}
      <section className="mt-24 px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
            Explorar también
          </p>
          <div className="mt-6 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {otherFamilies.map((f) => (
              <Link
                key={f.slug}
                to="/categorias/$slug"
                params={{ slug: f.slug }}
                className="group bg-background p-6 transition-colors hover:bg-surface"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {f.tagline}
                </p>
                <h3 className="font-display mt-3 text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-primary">
                  {f.name} →
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
