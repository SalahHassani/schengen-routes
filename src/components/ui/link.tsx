import NextLink from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LinkVariant = "default" | "subtle" | "nav";

export interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: LinkVariant;
  external?: boolean;
}

const variantClasses: Record<LinkVariant, string> = {
  default:
    "font-medium text-brand-blue underline decoration-brand-blue/40 underline-offset-4 transition-colors duration-200 hover:text-brand-navy hover:decoration-brand-navy",
  subtle: "font-medium text-text-secondary transition-colors duration-200 hover:text-brand-blue",
  nav: "font-heading text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-brand-blue",
};

export function Link({
  href,
  variant = "default",
  external,
  className,
  children,
  ...props
}: AppLinkProps) {
  const isExternal = external ?? (href.startsWith("http://") || href.startsWith("https://"));

  const combinedClasses = cn(
    "inline-flex items-center gap-1 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
    variantClasses[variant],
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={combinedClasses} {...props}>
      {children}
    </NextLink>
  );
}
