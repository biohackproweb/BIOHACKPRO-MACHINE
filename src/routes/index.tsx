import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GoldButton } from "@/components/gold-button";
import {
  FlagshipShowcase,
  FamiliesBento,
  ProofBand,
  SupportSection,
  FinalCTA,
} from "@/components/home-sections";
import { heroImage } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "BioHackPro Machines · Catálogo profesional de tecnología de longevidad",
      },
      {
        name: "description",
        content:
          "Crioterapia, cámaras hiperbáricas, fotobiomodulación, hipoxia, PEMF y más. Equipamiento profesional BioHackPro para clínicas y centros wellness de alto nivel.",
      },
      { property: "og:title", content: "BioHackPro Machines" },
      {
        property: "og:description",
        content:
          "Catálogo profesional de tecnología de longevidad y recuperación.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FlagshipShowcase />
      <FamiliesBento />
      <ProofBand />
      <SupportSection />
      <FinalCTA />
    </>
  );
}

function Typewriter({ text, delay = 0, speed = 75 }: { text: string; delay?: number; speed?: number }) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setTimeout(() => setDone(true), 600);
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <span className="inline-flex items-baseline">
      <span>{shown}</span>
      {!done && <span className="caret-blink" aria-hidden />}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Laboratorio de longevidad BioHackPro"
          width={1920}
          height={1080}
          className="size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/35 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 pt-28 pb-32 md:px-10 md:pt-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em] text-primary"
          >
            <span className="h-px w-10 bg-primary/70" />
            BioHackPro · Longevity Lab
          </motion.p>

          <h1 className="font-display mt-7 text-[clamp(2.5rem,7vw,6.25rem)] font-bold uppercase leading-[0.95] tracking-tight">
            <span className="inline-block min-h-[1.05em]">
              <Typewriter text="Tecnología" speed={85} delay={300} />
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              que redefine la
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-gold-gradient glow-pulse"
            >
              longevidad.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg"
          >
            Catálogo profesional de equipos de crioterapia, oxigenoterapia
            hiperbárica, fotobiomodulación y bioactivación. Para clínicas,
            centros wellness y profesionales de la longevidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <GoldButton to="/maquinas">Explorar catálogo</GoldButton>
            <GoldButton to="/categorias" variant="outline">
              Ver tecnologías
            </GoldButton>
          </motion.div>
        </motion.div>

        {/* Bottom meta bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.8 }}
          className="absolute inset-x-6 bottom-8 flex flex-col gap-4 md:inset-x-10 md:bottom-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-foreground/75">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_color-mix(in_oklab,var(--color-primary)_70%,transparent)]" />
            <span>Equipamiento profesional</span>
            <span className="text-primary/60">·</span>
            <span>Distribución oficial</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-foreground">
            <span>Scroll</span>
            <span className="arrow-bounce text-primary">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(1.6rem,4.2vw,3.25rem)] font-medium uppercase leading-[1.1] tracking-tight"
        >
          <span className="text-muted-foreground/50">
            Equipamiento de grado profesional para
          </span>{" "}
          <span className="text-foreground">
            clínicas, centros wellness y atletas de élite
          </span>
          <span className="text-primary">.</span>
        </motion.p>
      </div>
    </section>
  );
}
