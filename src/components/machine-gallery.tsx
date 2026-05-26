import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MachineImage } from "@/components/machine-image";
import { cn } from "@/lib/utils";

type MachineGalleryProps = {
  urls: string[];
  machineName: string;
};

export function MachineGallery({ urls, machineName }: MachineGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    setCurrent(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  if (urls.length === 0) return null;

  const navButtonClass =
    "static size-9 translate-y-0 border-border/60 bg-background/90 text-foreground hover:bg-surface disabled:opacity-30";

  return (
    <>
      {/* Móvil: carrusel */}
      <div className="mt-8 md:hidden">
        <Carousel setApi={setApi} opts={{ loop: urls.length > 1, align: "center" }} className="w-full">
          <div className="flex items-center gap-2">
            <CarouselPrevious className={navButtonClass} />
            <CarouselContent className="-ml-0 flex-1">
              {urls.map((src, i) => (
                <CarouselItem key={src} className="basis-full pl-0">
                  <div className="relative aspect-[4/3] overflow-hidden border border-border/60 bg-background">
                    <MachineImage
                      src={src}
                      alt={`${machineName} — imagen ${i + 1}`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className={navButtonClass} />
          </div>
        </Carousel>

        {urls.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex gap-1.5">
              {urls.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Ir a imagen ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "size-1.5 transition-all",
                    i === current
                      ? "w-5 bg-primary"
                      : "bg-muted-foreground/40 hover:bg-muted-foreground/70",
                  )}
                />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {current + 1} / {urls.length}
            </span>
          </div>
        )}
      </div>

      {/* Desktop: grid */}
      <div
        className={cn(
          "mt-8 hidden gap-4 md:grid",
          urls.length === 1
            ? "max-w-2xl"
            : urls.length === 2
              ? "grid-cols-2"
              : "grid-cols-2 lg:grid-cols-3",
        )}
      >
        {urls.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden border border-border/60 bg-background"
          >
            <MachineImage src={src} alt={`${machineName} — imagen ${i + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
}
