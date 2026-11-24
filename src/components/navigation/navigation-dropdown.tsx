"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { isRouteActive } from "./nav-link";

export interface NavigationDropdownProps {
  item: NavItem;
}

export function NavigationDropdown({ item }: NavigationDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  const active = isRouteActive(pathname, item.href);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const subItems = item.children ?? [];

  return (
    <div ref={containerRef} className="relative inline-flex items-center">
      <div className="relative inline-flex items-center">
        <NextLink
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={() => setOpen(false)}
          className={cn(
            "font-heading focus-visible:outline-brand-blue inline-flex items-center rounded-l-md py-2 pr-1 pl-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
            active ? "text-brand-blue" : "text-brand-navy hover:text-brand-blue"
          )}
        >
          {item.label}
        </NextLink>

        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-label={`Toggle ${item.label} submenu`}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "focus-visible:outline-brand-blue inline-flex min-h-9 min-w-7 cursor-pointer items-center justify-center rounded-r-md pr-2 pl-1 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
            open || active ? "text-brand-blue" : "text-brand-navy hover:text-brand-blue"
          )}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {active && (
          <span
            aria-hidden="true"
            className="bg-brand-gold absolute right-2.5 bottom-0.5 left-2.5 h-0.5 rounded-full"
          />
        )}
      </div>

      {open && subItems.length > 0 && (
        <div
          id={menuId}
          role="region"
          aria-label={`${item.label} categories`}
          className="border-border-subtle shadow-elevated rounded-card absolute top-full left-0 z-50 mt-2 w-72 border bg-white p-2"
        >
          <div className="border-border-subtle mb-1.5 flex items-center justify-between border-b px-3 py-2">
            <span className="font-heading text-brand-navy text-xs font-bold tracking-wider uppercase">
              {item.label} Overview
            </span>
            <NextLink
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-brand-blue hover:text-brand-navy text-xs font-semibold"
            >
              View Section →
            </NextLink>
          </div>

          <ul className="space-y-0.5">
            {subItems.map((subItem) => (
              <li key={subItem.label}>
                <NextLink
                  href={subItem.href}
                  onClick={() => setOpen(false)}
                  className="group hover:bg-surface-blue-tint focus-visible:outline-brand-blue flex flex-col rounded-lg px-3 py-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-heading text-brand-navy group-hover:text-brand-blue text-sm font-semibold">
                      {subItem.label}
                    </span>
                    {subItem.comingSoon && (
                      <span className="border-brand-gold/50 bg-surface-gold-tint text-brand-navy rounded-full border px-2 py-0.5 text-[10px] font-semibold">
                        Planned
                      </span>
                    )}
                  </span>
                  <span className="text-text-muted mt-0.5 text-xs">{subItem.description}</span>
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
