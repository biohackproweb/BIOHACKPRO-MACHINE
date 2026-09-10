import { Link } from "@tanstack/react-router";
import { FAMILIES } from "@/data/catalog";
import {
  BUSINESS_HOURS,
  BUSINESS_HOURS_SHORT,
  whatsAppUrl,
  WHATSAPP_DISPLAY,
} from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1480px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold uppercase tracking-[0.28em]">
                BioHackPro
              </span>
              <span className="font-script text-primary text-base -mt-0.5">
                Machines
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Catálogo profesional de tecnologías de longevidad, recuperación y
              rendimiento para clínicas, centros wellness y profesionales.
            </p>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
              Horario
            </p>
            <p className="mt-2 text-sm text-foreground/85">{BUSINESS_HOURS}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
              Catálogo
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/maquinas" className="text-foreground/80 hover:text-primary transition">
                  Todas las máquinas
                </Link>
              </li>
              <li>
                <Link to="/categorias" className="text-foreground/80 hover:text-primary transition">
                  Por categoría
                </Link>
              </li>
              <li>
                <Link to="/garantia-soporte" className="text-foreground/80 hover:text-primary transition">
                  Garantía y soporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
              Tecnologías
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {FAMILIES.slice(0, 6).map((f) => (
                <li key={f.slug}>
                  <Link
                    to="/categorias/$slug"
                    params={{ slug: f.slug }}
                    className="text-foreground/80 hover:text-primary transition"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/contacto" className="text-foreground/80 hover:text-primary transition">
                  Solicitar información
                </Link>
              </li>
              <li>
                <a
                  href={whatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="text-foreground/80">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-primary">
                  Horario
                </span>
                <span className="mt-1 block">{BUSINESS_HOURS_SHORT}</span>
              </li>
              <li>
                <a
                  href="https://biohackpro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition"
                >
                  Web principal BioHackPro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BioHackPro Machines</p>
          <p>Equipamiento profesional · {BUSINESS_HOURS}</p>
        </div>
      </div>
    </footer>
  );
}
