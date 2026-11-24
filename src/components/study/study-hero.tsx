import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { BRAND } from "@/lib/constants";

export function StudyHero() {
  return (
    <section
      aria-labelledby="study-hero-heading"
      className="bg-brand-navy py-14 text-white sm:py-18 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{BRAND.name}</Badge>
              <Eyebrow tone="inverse">Higher Education Directory</Eyebrow>
            </div>

            <Heading as="h1" id="study-hero-heading" size="h1" inverse className="mt-4">
              Study in Europe
            </Heading>

            <Divider variant="gold" className="mt-4" />

            <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
              Discover European universities, academic programmes, scholarships and opportunities to
              take your education further.
            </Paragraph>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <NextLink href="/study/universities">
                <Button variant="secondary" size="lg">
                  Explore Universities
                </Button>
              </NextLink>
              <NextLink href="/study/countries">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
                >
                  Explore Countries
                </Button>
              </NextLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-brand-gold/40 shadow-elevated rounded-card bg-brand-blue/20 relative overflow-hidden border">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/assets/images/study/european-university-campus.jpg"
                  alt="European university library reading room with wooden study desks and book shelves"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-navy/95 border-t border-white/15 px-5 py-3.5">
                <p className="font-heading text-brand-gold text-xs font-semibold tracking-wider uppercase">
                  Source-Backed Academic Discovery
                </p>
                <p className="mt-0.5 text-xs text-slate-200">
                  Official institution links, review dates, and separated application timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
