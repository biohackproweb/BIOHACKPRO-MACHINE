import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { type Machine, FAMILIES, formatPrice } from "@/data/catalog";
import { imageForMachine, isMachineSvgImage } from "@/lib/images";

export function MachineCard({ machine, index = 0 }: { machine: Machine; index?: number }) {
  const family = FAMILIES.find((f) => f.slug === machine.family);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.4) }}
    >
      <Link
        to="/maquinas/$slug"
        params={{ slug: machine.slug }}
        className="group flex h-full flex-col border border-border/60 bg-surface/40 transition-all duration-500 hover:border-primary/60 hover:bg-surface"
      >
        <div className="relative aspect-square overflow-hidden bg-background">
          <img
            src={imageForMachine(machine.slug, machine.family)}
            alt={machine.name}
            loading="lazy"
            className={
              isMachineSvgImage(machine.slug)
                ? "size-full object-contain p-4 opacity-90 transition-all duration-[1200ms] group-hover:scale-[1.04] group-hover:opacity-100 md:p-5"
                : "size-full object-cover opacity-90 transition-all duration-[1200ms] group-hover:scale-[1.06] group-hover:opacity-100"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          {machine.tier === "flagship" && (
            <span className="absolute left-3 top-3 border border-primary/60 bg-background/70 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
              Flagship
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
            {family?.name}
          </p>
          <h3 className="font-display mt-2 text-base font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary md:text-lg">
            {machine.name}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground md:text-sm">{machine.tagline}</p>

          <div className="mt-auto flex items-end justify-between pt-5">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                Desde
              </p>
              <p className="font-display mt-0.5 text-base font-semibold text-foreground md:text-lg">
                {formatPrice(machine.priceFrom)}
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Ver →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
