import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { BRAND } from "@/lib/constants";

export function ExploreHero() {
  return (
    <section
      aria-labelledby="explore-hero-heading"
      className="bg-brand-navy py-14 text-white sm:py-18 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{BRAND.name}</Badge>
              <Eyebrow tone="inverse">Culture · Heritage · Inspiration</Eyebrow>
            </div>

            <Heading as="h1" id="explore-hero-heading" size="h1" inverse className="mt-4">
              Explore Europe Beyond the Ordinary
            </Heading>

            <Divider variant="gold" className="mt-4" />

            <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
              Discover the cultures, stories, landmarks and experiences that make Europe
              extraordinary.
            </Paragraph>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <NextLink href="/explore/landmarks">
                <Button variant="secondary" size="lg">
                  Explore Landmarks
                </Button>
              </NextLink>
              <NextLink href="/explore/stories">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
                >
                  Read Stories
                </Button>
              </NextLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border-brand-gold/40 shadow-elevated rounded-card bg-brand-blue/20 relative overflow-hidden border">
              <div className="relative aspect-video w-full">
                <Image
                  src="/assets/images/hero/europe-hero.jpg"
                  alt="Panoramic European riverfront and historic architectural landmarks"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-navy/95 border-t border-white/15 px-5 py-3.5">
                <p className="font-heading text-brand-gold text-xs font-semibold tracking-wider uppercase">
                  Editorial Magazine · Cultural Discovery · Heritage &amp; Lifestyle
                </p>
                <p className="mt-0.5 text-xs text-slate-200">
                  Curated look into European traditions, historic places, food culture, nature, and
                  student life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
