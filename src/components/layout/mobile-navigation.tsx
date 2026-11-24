"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { CONSULTATION_CTA, PRIMARY_NAVIGATION } from "@/config/navigation";
import { isRouteActive } from "@/components/navigation/nav-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const drawerId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setExpandedSection(null);
        toggleRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeDrawer() {
    setOpen(false);
    setExpandedSection(null);
  }

  return (
    <div className="flex items-center lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="border-border-default text-brand-navy hover:border-brand-blue hover:bg-surface-blue-tint rounded-button focus-visible:outline-brand-blue inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center border bg-white p-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
          {/* Backdrop */}
          <div
            aria-hidden="true"
            onClick={closeDrawer}
            className="bg-brand-navy/55 fixed inset-0"
          />

          {/* Slide-over panel */}
          <div
            ref={dialogRef}
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label={`${BRAND.name} mobile navigation`}
            className="shadow-elevated relative z-10 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white"
          >
            {/* Drawer Header */}
            <div className="border-border-subtle flex items-center justify-between gap-2 border-b px-4 py-3.5">
              <NextLink
                href="/"
                onClick={closeDrawer}
                aria-label={`${BRAND.name} home`}
                className="inline-flex min-w-0 items-center"
              >
                <BrandLogo size="sm" surface="light" />
              </NextLink>

              <button
                ref={closeRef}
                type="button"
                aria-label="Close navigation menu"
                onClick={() => {
                  closeDrawer();
                  toggleRef.current?.focus();
                }}
                className="border-border-default text-brand-navy hover:border-brand-blue hover:bg-surface-blue-tint rounded-button focus-visible:outline-brand-blue inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center border bg-white p-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation List */}
            <nav aria-label="Mobile primary navigation" className="flex-1 px-4 py-4">
              <ul className="space-y-1">
                {PRIMARY_NAVIGATION.map((item) => {
                  const active = isRouteActive(pathname, item.href, item.href === "/");
                  const hasChildren = Boolean(item.children && item.children.length > 0);
                  const isExpanded = expandedSection === item.href;

                  return (
                    <li
                      key={item.href}
                      className="border-border-subtle border-b pb-1 last:border-b-0"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <NextLink
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={closeDrawer}
                          className={cn(
                            "font-heading flex min-h-11 flex-1 items-center rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-150",
                            active
                              ? "bg-surface-blue-tint text-brand-blue"
                              : "text-brand-navy hover:bg-surface-subtle hover:text-brand-blue"
                          )}
                        >
                          {item.label}
                        </NextLink>

                        {hasChildren && (
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-label={`Expand ${item.label} categories`}
                            onClick={() =>
                              setExpandedSection((prev) => (prev === item.href ? null : item.href))
                            }
                            className="text-brand-navy hover:bg-surface-subtle hover:text-brand-blue inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors duration-150"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className={cn(
                                "h-5 w-5 transition-transform duration-200",
                                isExpanded && "rotate-180"
                              )}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {hasChildren && isExpanded && (
                        <ul className="border-brand-gold/60 mt-1 mb-2 ml-3 space-y-1 border-l-2 pl-3">
                          {item.children?.map((subItem) => (
                            <li key={subItem.label}>
                              <NextLink
                                href={subItem.href}
                                onClick={closeDrawer}
                                className="hover:bg-surface-blue-tint text-text-secondary hover:text-brand-blue flex min-h-11 items-center justify-between gap-2 rounded-md px-2.5 py-2 text-sm"
                              >
                                <span className="font-medium">{subItem.label}</span>
                                {subItem.comingSoon && (
                                  <span className="border-brand-gold/50 bg-surface-gold-tint text-brand-navy shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold">
                                    Planned
                                  </span>
                                )}
                              </NextLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Drawer CTA Footer */}
            <div className="border-border-subtle bg-surface-subtle border-t p-4">
              <NextLink href={CONSULTATION_CTA.href} onClick={closeDrawer} className="block w-full">
                <Button variant="primary" size="lg" className="w-full">
                  {CONSULTATION_CTA.label}
                </Button>
              </NextLink>
              <p className="text-text-muted mt-2.5 text-center text-xs">{BRAND.serviceLine}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
