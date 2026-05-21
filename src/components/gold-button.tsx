import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "ghost" | "outline";

interface Props {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
  params?: Record<string, string>;
  onClick?: () => void;
  type?: "button" | "submit";
}

const base =
  "group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] transition-all duration-300";

const variants: Record<Variant, string> = {
  solid:
    "gold-gradient text-primary-foreground shadow-gold hover:shadow-gold-strong hover:-translate-y-0.5",
  ghost:
    "text-foreground/80 hover:text-primary border-b border-transparent hover:border-primary",
  outline:
    "border border-border-strong text-foreground hover:text-primary hover:border-primary",
};

export function GoldButton({
  to,
  href,
  children,
  variant = "solid",
  className,
  icon = true,
  params,
  onClick,
  type,
}: Props) {
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} params={params} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
