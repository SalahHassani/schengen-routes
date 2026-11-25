import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { BRAND } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-brand-navy relative overflow-hidden py-14 text-white sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{BRAND.name}</Badge>
              <Eyebrow tone="inverse">{BRAND.serviceLine}</Eyebrow>
            </div>

            <Heading as="h1" id="hero-heading" size="display" inverse className="mt-5">
              {BRAND.tagline}
            </Heading>

            <p className="font-heading text-brand-gold mt-3 text-xl font-bold tracking-tight sm:text-2xl">
              Study, Travel and Explore Europe with Confidence.
            </p>

            <Divider variant="gold" className="mt-5" />

            <Paragraph size="lg" tone="inverse" className="mt-6 max-w-xl text-slate-200">
              Discover European universities, understand visa requirements, plan your journeys, and
              explore everything Europe has to offer — all in one place.
            </Paragraph>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href="#services">
                <Button variant="secondary" size="lg">
                  Explore Our Services
                </Button>
              </a>
              <NextLink href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
                >
                  Get Consultation
                </Button>
              </NextLink>
            </div>
          </div>

          {/* Editorial Hero Visual Column (16:9 Landscape) */}
          <div className="lg:col-span-6">
            <div className="border-brand-gold/40 shadow-elevated rounded-card bg-brand-blue/20 relative overflow-hidden border">
              <div className="relative aspect-video w-full">
                <Image
                  src="/assets/images/countries/germany.jpg"
                  alt="Panoramic European cityscape overlooking historic bridges and spires in Prague"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-navy/95 border-t border-white/15 px-5 py-3.5">
                <p className="font-heading text-brand-gold text-xs font-semibold tracking-wider uppercase">
                  European Discovery Platform
                </p>
                <p className="mt-0.5 text-xs text-slate-200">
                  Structured guidance across European higher education, visa preparation, and
                  cross-border travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
