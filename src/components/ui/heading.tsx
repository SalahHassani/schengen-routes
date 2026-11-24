import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  inverse?: boolean;
}

const sizeClasses: Record<HeadingSize, string> = {
  display:
    "text-[clamp(2.25rem,4vw+1rem,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.025em]",
  h1: "text-[clamp(1.875rem,2.5vw+1rem,2.75rem)] font-extrabold leading-[1.18] tracking-[-0.02em]",
  h2: "text-[clamp(1.5rem,1.8vw+0.875rem,2.125rem)] font-bold leading-[1.24] tracking-[-0.015em]",
  h3: "text-[clamp(1.25rem,1vw+0.875rem,1.5rem)] font-bold leading-[1.32] tracking-[-0.01em]",
  h4: "text-lg font-semibold leading-[1.4] tracking-[-0.005em]",
};

export function Heading({
  as = "h2",
  size,
  inverse = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as;
  const resolvedSize = size ?? as;

  return (
    <Component
      className={cn(
        "font-heading",
        inverse ? "text-text-inverse" : "text-text-primary",
        sizeClasses[resolvedSize],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
