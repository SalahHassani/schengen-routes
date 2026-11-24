import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ParagraphSize = "lg" | "base" | "sm" | "caption";
type ParagraphTone = "primary" | "secondary" | "muted" | "inverse";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  tone?: ParagraphTone;
}

const sizeClasses: Record<ParagraphSize, string> = {
  lg: "text-base leading-[1.65] sm:text-lg",
  base: "text-base leading-[1.65]",
  sm: "text-sm leading-[1.55]",
  caption: "text-xs font-medium leading-[1.45] tracking-[0.01em]",
};

const toneClasses: Record<ParagraphTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  inverse: "text-slate-200",
};

export function Paragraph({
  size = "base",
  tone = "secondary",
  className,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p className={cn("font-sans", sizeClasses[size], toneClasses[tone], className)} {...props}>
      {children}
    </p>
  );
}

export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: "blue" | "gold" | "inverse";
}

const eyebrowToneClasses = {
  blue: "text-brand-blue",
  gold: "text-[#8A6A2B]",
  inverse: "text-brand-gold",
};

export function Eyebrow({ tone = "blue", className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-heading text-xs font-bold tracking-[0.12em] uppercase",
        eyebrowToneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
