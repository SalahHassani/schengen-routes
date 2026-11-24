import type { Metadata } from "next";
import { DestinationGrid } from "@/components/travel/destination-grid";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { TRAVEL_DESTINATIONS } from "@/data/travel/destinations";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Explore European Destinations | ${BRAND.name}`,
  description:
    "Search and filter European destinations by country, city, and travel category with official national tourism portals.",
};

export default function TravelDestinationsPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Travel</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Destination Discovery
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Explore European Destinations
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Filter European destinations across historic cities, Alpine landscapes, cultural
            heritage routes, and river corridors.
          </Paragraph>
        </Container>
      </section>

      <TravelSubnav activeHref="/travel/destinations" />
      <DestinationGrid destinations={TRAVEL_DESTINATIONS} background="white" showFilters />
      <TravelCta />
    </>
  );
}
