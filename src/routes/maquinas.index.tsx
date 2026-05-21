import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search, X, LayoutGrid, Rows3 } from "lucide-react";
import {
  FAMILIES,
  allMachinesSorted,
  type FamilySlug,
  MACHINES,
} from "@/data/catalog";
import { MachineCard } from "@/components/machine-card";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/maquinas/")({
  head: () => ({
    meta: [
      { title: "Catálogo completo · BioHackPro Machines" },
      {
        name: "description",
        content:
          "Explora el catálogo completo de máquinas BioHackPro. Filtra por tecnología, busca por nombre y navega por categorías deslizando horizontalmente.",
      },
      { property: "og:title", content: "Catálogo · BioHackPro Machines" },
      {
        property: "og:description",
        content: "Explora todas las máquinas profesionales BioHackPro.",
      },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const all = useMemo(() => allMachinesSorted(), []);
  const [family, setFamily] = useState<FamilySlug | "all">("all");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"rows" | "grid">("rows");

  const normalized = query.trim().toLowerCase();
  const searchFiltered = useMemo(
    () =>
      normalized.length === 0
        ? all
        : all.filter(
            (m) =>
              m.name.toLowerCase().includes(normalized) ||
              m.tagline.toLowerCase().includes(normalized) ||
              FAMILIES.find((f) => f.slug === m.family)
                ?.name.toLowerCase()
                .includes(normalized),
          ),
    [all, normalized],
  );

  const filtered = useMemo(
    () =>
      family === "all"
        ? searchFiltered
        : searchFiltered.filter((m) => m.family === family),
    [searchFiltered, family],
  );

  // When in "rows" view AND no filters, render machines grouped by family in horizontal carousels.
  const showRows = view === "rows" && family === "all" && normalized.length === 0;

  return (
    <div className="pb-20 pt-32 md:pt-36">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            ← Inicio
          </Link>
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                Catálogo completo
              </p>
              <h1 className="font-display mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                Todas las máquinas
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {all.length} equipos profesionales organizados por tecnología.
                Busca por nombre o desliza horizontalmente por cada categoría.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {filtered.length} resultados
            </p>
          </div>

          {/* Search bar */}
          <div className="relative mt-8 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar máquina, tecnología o aplicación…"
              className="w-full border border-border/60 bg-surface/40 py-3.5 pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-surface focus:outline-none transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Limpiar"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category nav with arrows */}
      <section className="sticky top-[72px] z-30 mt-10 border-y border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <CategoryScroller family={family} setFamily={setFamily} all={all} view={view} setView={setView} />
        </div>
      </section>

      {/* Content */}
      <section className="mt-10 px-6 md:mt-12 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          {filtered.length === 0 ? (
            <p className="py-32 text-center text-muted-foreground">
              No hay equipos que coincidan con tu búsqueda.
            </p>
          ) : showRows ? (
            <div className="space-y-14 md:space-y-16">
              {FAMILIES.map((f) => {
                const items = MACHINES.filter((m) => m.family === f.slug);
                if (items.length === 0) return null;
                return (
                  <FamilyRow
                    key={f.slug}
                    family={f}
                    items={items}
                    onOpenFamily={() => setFamily(f.slug)}
                  />
                );
              })}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((m, i) => (
                <MachineCard key={m.slug} machine={m} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function CategoryScroller({
  family,
  setFamily,
  all,
  view,
  setView,
}: {
  family: FamilySlug | "all";
  setFamily: (f: FamilySlug | "all") => void;
  all: ReturnType<typeof allMachinesSorted>;
  view: "rows" | "grid";
  setView: (v: "rows" | "grid") => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center gap-2 py-3">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Anterior"
        className={cn(
          "hidden md:flex size-9 shrink-0 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-primary hover:text-primary",
          !canLeft && "opacity-30 pointer-events-none",
        )}
      >
        <ChevronLeft className="size-4" />
      </button>

      <div
        ref={scrollRef}
        className="scrollbar-none flex flex-1 items-center gap-2 overflow-x-auto"
      >
        <FilterChip active={family === "all"} onClick={() => setFamily("all")}>
          Todas · {all.length}
        </FilterChip>
        {FAMILIES.map((f) => {
          const count = all.filter((m) => m.family === f.slug).length;
          return (
            <FilterChip
              key={f.slug}
              active={family === f.slug}
              onClick={() => setFamily(f.slug)}
            >
              {f.name} · {count}
            </FilterChip>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Siguiente"
        className={cn(
          "hidden md:flex size-9 shrink-0 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-primary hover:text-primary",
          !canRight && "opacity-30 pointer-events-none",
        )}
      >
        <ChevronRight className="size-4" />
      </button>

      {/* View switch */}
      <div className="hidden lg:flex items-center gap-px ml-2 border border-border/60">
        <button
          type="button"
          onClick={() => setView("rows")}
          className={cn(
            "flex size-9 items-center justify-center transition-colors",
            view === "rows" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-primary",
          )}
          aria-label="Vista en filas horizontales"
          title="Filas horizontales"
        >
          <Rows3 className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => setView("grid")}
          className={cn(
            "flex size-9 items-center justify-center transition-colors",
            view === "grid" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-primary",
          )}
          aria-label="Vista en cuadrícula"
          title="Cuadrícula"
        >
          <LayoutGrid className="size-4" />
        </button>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-10 w-8 bg-gradient-to-r from-background to-transparent md:left-12" />
      <div className="pointer-events-none absolute inset-y-0 right-10 w-8 bg-gradient-to-l from-background to-transparent md:right-12" />
    </div>
  );
}

function FamilyRow({
  family,
  items,
  onOpenFamily,
}: {
  family: (typeof FAMILIES)[number];
  items: typeof MACHINES;
  onOpenFamily: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-primary">
            {items.length} equipos
          </p>
          <button
            type="button"
            onClick={onOpenFamily}
            className="font-display mt-1 block text-left text-xl font-bold uppercase tracking-tight transition-colors hover:text-primary md:text-2xl"
          >
            {family.name}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Anterior"
            className={cn(
              "hidden sm:flex size-9 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-primary hover:text-primary",
              !canLeft && "opacity-30 pointer-events-none",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Siguiente"
            className={cn(
              "hidden sm:flex size-9 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-primary hover:text-primary",
              !canRight && "opacity-30 pointer-events-none",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
          <button
            type="button"
            onClick={onOpenFamily}
            className="ml-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            Ver todo →
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:-mx-10 md:px-10"
          style={{ scrollPaddingLeft: "1.5rem" }}
        >
          {items.map((m, i) => (
            <div
              key={m.slug}
              className="snap-start shrink-0 basis-[72%] sm:basis-[42%] md:basis-[32%] lg:basis-[24%] xl:basis-[20%]"
            >
              <MachineCard machine={m} index={i} />
            </div>
          ))}
        </div>

        {/* Edge fades */}
        {canLeft && (
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent md:w-16" />
        )}
        {canRight && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent md:w-16" />
        )}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-all whitespace-nowrap",
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border/60 text-muted-foreground hover:border-primary/60 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
