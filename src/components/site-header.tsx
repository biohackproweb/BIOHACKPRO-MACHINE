import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/categorias", label: "Categorías" },
  { to: "/maquinas", label: "Catálogo" },
  { to: "/garantia-soporte", label: "Garantía" },
  { to: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold uppercase tracking-[0.28em] text-foreground transition-colors group-hover:text-primary">
            BioHackPro
          </span>
          <span className="font-script text-[13px] text-primary -mt-0.5">
            Machines
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative text-[11px] font-medium uppercase tracking-[0.22em] transition-colors",
                  active ? "text-primary" : "text-foreground/75 hover:text-primary",
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 h-px w-6 -translate-x-1/2 bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://biohackpro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
          >
            ← Web principal
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
          aria-label="Menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu — solid background, no transparency */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[72px] z-40 bg-background backdrop-blur-2xl border-t border-border/60 transition-all duration-300",
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2",
        )}
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <nav className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-10">
          {links.map((l) => {
            const active =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "font-display py-5 text-3xl font-semibold tracking-tight border-b border-border/40",
                  active ? "text-primary" : "text-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="https://biohackpro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            ← Volver a la web principal
          </a>
        </nav>
      </div>
    </header>
  );
}
