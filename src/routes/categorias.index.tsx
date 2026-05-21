import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FAMILIES, MACHINES } from "@/data/catalog";
import { imageForFamily } from "@/lib/images";
import { SectionHead } from "@/components/home-sections";

export const Route = createFileRoute("/categorias/")({
  head: () => ({
    meta: [
      { title: "Categorías · BioHackPro Machines" },
      {
        name: "description",
        content:
          "Las 9 familias tecnológicas del catálogo BioHackPro: crioterapia, hiperbáricas, fotobiomodulación, hipoxia, multitecnología, neuroacústica, PEMF, hidrógeno y diagnóstico.",
      },
      { property: "og:title", content: "Categorías · BioHackPro Machines" },
      {
        property: "og:description",
        content: "Las 9 familias tecnológicas del catálogo BioHackPro.",
      },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="pt-40 pb-20">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <SectionHead
            eyebrow="Catálogo por tecnología"
            title="Nueve familias"
            subtitle="Cada familia agrupa equipos por tecnología y aplicación clínica. Explora la categoría que se adapta a tu centro."
          />
        </div>
      </section>

      <section className="mt-20 px-6 md:px-10">
        <div className="mx-auto grid max-w-[1480px] gap-3 md:grid-cols-2 lg:grid-cols-3">
          {FAMILIES.map((f, i) => {
            const count = MACHINES.filter((m) => m.family === f.slug).length;
            return (
              <motion.div
                key={f.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
              >
                <Link
                  to="/categorias/$slug"
                  params={{ slug: f.slug }}
                  className="group block h-full overflow-hidden border border-border/60 bg-surface/40 transition-all duration-500 hover:border-primary/60"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-background">
                    <img
                      src={imageForFamily(f.slug)}
                      alt={f.name}
                      loading="lazy"
                      className="size-full object-cover opacity-50 transition-all duration-[1200ms] group-hover:scale-105 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-primary">
                            0{i + 1} · {count} equipos
                          </p>
                          <h3 className="font-display mt-2 text-2xl font-bold uppercase tracking-tight md:text-3xl">
                            {f.name}
                          </h3>
                        </div>
                        <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border/60 p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {f.tagline}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
