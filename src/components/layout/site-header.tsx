import NextLink from "next/link";
import { CONSULTATION_CTA } from "@/config/navigation";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BRAND } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="border-border-subtle shadow-subtle sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur-xs">
      <a
        href="#main-content"
        className="font-heading bg-brand-navy rounded-button sr-only px-4 py-2.5 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to main content
      </a>

      <Container>
        <div className="flex min-h-18 items-center justify-between gap-4 py-2.5">
          {/* Left: Official SchengeN Routes Logo */}
          <NextLink
            href="/"
            aria-label={`${BRAND.name} — ${BRAND.tagline}`}
            className="focus-visible:outline-brand-blue inline-flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <BrandLogo size="md" surface="light" />
          </NextLink>

          {/* Centre: Desktop Navigation */}
          <DesktopNavigation />

          {/* Right: Desktop Get Consultation CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <NextLink href={CONSULTATION_CTA.href} className="hidden lg:inline-flex">
              <Button variant="primary" size="md">
                {CONSULTATION_CTA.label}
              </Button>
            </NextLink>

            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
