import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/home-sections";
import { BUSINESS_HOURS_LONG } from "@/lib/contact";

export const Route = createFileRoute("/garantia-soporte")({
  head: () => ({
    meta: [
      { title: "Garantía y soporte · BioHackPro Machines" },
      {
        name: "description",
        content:
          "Garantía de 1 año, formación gratuita en Barcelona, transporte e instalación profesional para todos los equipos BioHackPro.",
      },
      { property: "og:title", content: "Garantía y soporte · BioHackPro Machines" },
      {
        property: "og:description",
        content: "Garantía, formación e instalación profesional BioHackPro.",
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const blocks = [
    {
      n: "01",
      title: "Garantía 1 año",
      body: "Todos los equipos incluyen 1 año de garantía contra todo defecto no derivado del mal uso. Soporte técnico priorizado y piezas originales.",
    },
    {
      n: "02",
      title: "Transporte y montaje",
      body: "Transporte, montaje y puesta en funcionamiento gestionados por nuestro equipo. Coste a consultar según destino y equipo.",
    },
    {
      n: "03",
      title: "Formación online",
      body: "Formación online incluida sin coste adicional para tu equipo. Acceso a protocolos clínicos y buenas prácticas.",
    },
    {
      n: "04",
      title: "Formación presencial Barcelona",
      body: "Formación presencial gratuita en Barcelona. Sesiones prácticas con casos reales sobre el equipo adquirido.",
    },
    {
      n: "05",
      title: "Formación en tu centro",
      body: "Formación presencial en el centro del cliente disponible bajo consulta. Adaptada a tu equipo y volumen.",
    },
    {
      n: "06",
      title: "Distribución oficial",
      body: "Distribuidor oficial autorizado de todas las marcas del catálogo. Garantía del fabricante y soporte directo.",
    },
  ];

  return (
    <div className="pt-40 pb-20">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <SectionHead
            eyebrow="Servicio profesional"
            title="Garantía y soporte"
            subtitle="No vendemos solo equipos. Acompañamos la puesta en marcha y la operación de cada máquina, desde el transporte hasta la formación clínica."
          />
        </div>
      </section>

      <section className="mt-20 px-6 md:px-10">
        <div className="mx-auto grid max-w-[1480px] gap-px bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.n}
              className="bg-background p-10 transition-colors duration-300 hover:bg-surface"
            >
              <p className="font-display text-5xl font-bold text-gold-gradient">{b.n}</p>
              <h3 className="font-display mt-8 text-xl font-bold uppercase tracking-tight">
                {b.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 px-6 md:px-10">
        <div className="mx-auto max-w-[1480px] border border-border/60 bg-surface/30 p-10 text-center md:p-16">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">
            ¿Necesitas un presupuesto detallado?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Incluyendo transporte, instalación y formación para tu centro. {BUSINESS_HOURS_LONG}.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center justify-center gold-gradient px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </section>
    </div>
  );
}
