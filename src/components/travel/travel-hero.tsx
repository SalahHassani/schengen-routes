import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { BRAND } from "@/lib/constants";

export function TravelHero() {
  return (
    <section
      aria-labelledby="travel-hero-heading"
      className="bg-brand-navy py-14 text-white sm:py-18 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{BRAND.name}</Badge>
              <Eyebrow tone="inverse">European Travel Discovery</Eyebrow>
            </div>

            <Heading as="h1" id="travel-hero-heading" size="h1" inverse className="mt-4">
              Discover Europe. Your Journey Starts Here.
            </Heading>

            <Divider variant="gold" className="mt-4" />

            <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
              Explore remarkable European destinations, discover practical travel guides, and plan
              journeys filled with unforgettable experiences.
            </Paragraph>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <NextLink href="/travel/destinations">
                <Button variant="secondary" size="lg">
                  Explore Destinations
                </Button>
              </NextLink>
              <NextLink href="/travel/guides">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
                >
                  Discover Travel Guides
                </Button>
              </NextLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border-brand-gold/40 shadow-elevated rounded-card bg-brand-blue/20 relative overflow-hidden border">
              <div className="relative aspect-video w-full">
                <Image
                  src="/assets/images/countries/netherlands.jpg"
                  alt="European riverfront skyline and historic architectural landmarks"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-navy/95 border-t border-white/15 px-5 py-3.5">
                <p className="font-heading text-brand-gold text-xs font-semibold tracking-wider uppercase">
                  Curated Destinations · Practical Planning · Official Sources
                </p>
                <p className="mt-0.5 text-xs text-slate-200">
                  Structured country and city overviews, suggested multi-stop routes, and practical
                  European travel guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
