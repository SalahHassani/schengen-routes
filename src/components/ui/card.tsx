import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "elevated" | "interactive";
type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
}

const variantClasses: Record<CardVariant, string> = {
  default: "border border-border-subtle bg-surface-page shadow-subtle",
  elevated: "border border-border-subtle bg-surface-page shadow-card",
  interactive:
    "border border-border-subtle bg-surface-page shadow-subtle transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-card",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4 sm:p-5",
  md: "p-6",
  lg: "p-6 sm:p-8",
};

export function Card({
  variant = "default",
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card text-text-primary",
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
