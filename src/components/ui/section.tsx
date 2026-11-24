import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionSpacing = "sm" | "md" | "lg";
type SectionBackground = "white" | "subtle" | "navy" | "blue-tint" | "gold-tint";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  background?: SectionBackground;
}

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-20",
  lg: "py-20 sm:py-28",
};

const backgroundClasses: Record<SectionBackground, string> = {
  white: "bg-surface-page text-text-primary",
  subtle: "bg-surface-subtle text-text-primary",
  navy: "bg-surface-navy text-text-inverse",
  "blue-tint": "bg-surface-blue-tint text-text-primary",
  "gold-tint": "bg-surface-gold-tint text-text-primary",
};

export function Section({
  spacing = "md",
  background = "white",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("w-full", spacingClasses[spacing], backgroundClasses[background], className)}
      {...props}
    >
      {children}
    </section>
  );
}
