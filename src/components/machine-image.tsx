import { useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type MachineImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MachineImage({ src, alt, className }: MachineImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative flex size-full cursor-zoom-in items-center justify-center bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        aria-label={`Ampliar imagen de ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain p-5 md:p-8"
        />
        <span className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 border border-border/60 bg-background/85 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-muted-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ZoomIn className="size-3" aria-hidden />
          Ampliar
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[95vh] w-[min(96vw,1200px)] max-w-[min(96vw,1200px)] border-border/60 bg-background/98 p-3 sm:p-5">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <img
            src={src}
            alt={alt}
            className="mx-auto max-h-[calc(95vh-4rem)] w-auto max-w-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
