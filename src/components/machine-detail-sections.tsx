import { motion } from "framer-motion";
import type { MachineContent } from "@/data/catalog";
import { galleryImageForMachine } from "@/lib/images";
import { MachineGallery } from "@/components/machine-gallery";

type MachineDetailSectionsProps = {
  machineName: string;
  slug: string;
  content: MachineContent;
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export function MachineDetailSections({
  machineName,
  slug,
  content,
}: MachineDetailSectionsProps) {
  const gallery = content.gallery ?? [];
  const galleryUrls = gallery
    .map((file) => galleryImageForMachine(slug, file))
    .filter((url): url is string => Boolean(url));

  return (
    <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
      {(content.lead || content.paragraphs?.length || content.pillars?.length) && (
        <motion.section {...fadeUp} className="border-t border-border/60 pt-16 md:pt-20">
          {content.lead && (
            <h2 className="font-display max-w-4xl text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {content.lead}
            </h2>
          )}
          {content.paragraphs?.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 md:text-lg"
            >
              {p}
            </p>
          ))}
          {content.pillars && content.pillars.length > 0 && (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {content.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="flex items-start gap-4 border border-border/60 bg-surface/30 p-5 md:p-6"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 bg-primary" />
                  <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                    {pillar}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      )}

      {content.businessBenefits && content.businessBenefits.length > 0 && (
        <motion.section {...fadeUp} className="border-t border-border/60 pt-16 md:pt-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
            Beneficios para tu empresa
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.businessBenefits.map((b, i) => (
              <div
                key={b.title}
                className="flex flex-col border border-border/60 bg-surface/30 p-5 transition-colors hover:border-primary/40 md:p-6"
              >
                <span className="font-display text-3xl font-bold text-primary/30 md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold uppercase tracking-tight text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {content.sectors && content.sectors.length > 0 && (
        <motion.section {...fadeUp} className="border-t border-border/60 pt-16 md:pt-20">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
            {content.sectorsTitle ?? "Sectores de aplicación"}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.sectors.map((sector) => (
              <li
                key={sector}
                className="border border-border/60 px-4 py-3.5 text-sm text-foreground/85 md:px-5 md:py-4 md:text-base"
              >
                {sector}
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {galleryUrls.length > 0 && (
        <motion.section {...fadeUp} className="border-t border-border/60 pt-16 md:pt-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
            Galería
          </p>
          <MachineGallery urls={galleryUrls} machineName={machineName} />
        </motion.section>
      )}
    </div>
  );
}
