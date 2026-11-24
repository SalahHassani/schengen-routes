import type { Metadata } from "next";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelGuideGrid } from "@/components/travel/travel-guide-grid";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { TRAVEL_GUIDE_ARTICLES } from "@/data/travel/guides";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Practical European Travel Guides | ${BRAND.name}`,
  description:
    "Read practical European travel articles on trip planning, cross-border Schengen travel, public transport, trains, accommodation planning, and packing.",
};

export default function TravelGuidesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Travel</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Editorial Guides
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Practical European Travel Guides
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Structured planning guides designed to help travellers navigate European transit,
            cross-border rules, accommodation decisions, and trip pacing.
          </Paragraph>
        </Container>
      </section>

      <TravelSubnav activeHref="/travel/guides" />
      <TravelGuideGrid articles={TRAVEL_GUIDE_ARTICLES} background="white" expanded showFilters />
      <TravelCta />
    </>
  );
}
