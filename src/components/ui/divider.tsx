import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type DividerVariant = "subtle" | "default" | "gold";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: DividerVariant;
}

const variantClasses: Record<DividerVariant, string> = {
  subtle: "border-border-subtle",
  default: "border-border-default",
  gold: "h-1 w-20 rounded-full border-0 bg-brand-gold",
};

export function Divider({ variant = "subtle", className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        variant === "gold" ? variantClasses.gold : cn("w-full border-t", variantClasses[variant]),
        className
      )}
      {...props}
    />
  );
}
