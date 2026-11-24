import { BRAND, BRAND_ASSETS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";
type LogoSurface = "light" | "dark";

export interface BrandLogoProps {
  size?: LogoSize;
  surface?: LogoSurface;
  className?: string;
}

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-8 w-auto",
  md: "h-10 sm:h-11 w-auto",
  lg: "h-14 sm:h-16 w-auto",
};

export function BrandLogo({ size = "md", surface = "light", className }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        surface === "dark" && "shadow-subtle rounded-lg bg-white/95 px-2.5 py-1.5",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BRAND_ASSETS.primaryLogo}
        alt={`${BRAND.name} — ${BRAND.tagline}`}
        className={cn("max-w-full object-contain select-none", sizeClasses[size])}
      />
    </span>
  );
}
