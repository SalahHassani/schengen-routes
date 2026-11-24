"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  exact?: boolean;
}

export function isRouteActive(pathname: string, href: string, exact = false): boolean {
  if (href === "/" || exact) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({ href, exact = false, className, children, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const active = isRouteActive(pathname, href, exact);

  return (
    <NextLink
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "font-heading focus-visible:outline-brand-blue relative inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
        active ? "text-brand-blue" : "text-brand-navy hover:text-brand-blue",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {active && (
        <span
          aria-hidden="true"
          className="bg-brand-gold absolute right-2.5 bottom-0.5 left-2.5 h-0.5 rounded-full"
        />
      )}
    </NextLink>
  );
}
