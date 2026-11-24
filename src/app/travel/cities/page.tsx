import type { Metadata } from "next";
import { CityGrid } from "@/components/travel/city-grid";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { TRAVEL_CITY_GUIDES } from "@/data/travel/cities";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European City Travel Guides | ${BRAND.name}`,
  description:
    "Explore European city guides covering neighbourhoods, public transportation, suggested activities, and official city visitor portals.",
};

export default function TravelCitiesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Travel</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            City Discovery
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European City Guides
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Search and filter European city guides with neighbourhood highlights, local public
            transit overviews, and official city tourism links.
          </Paragraph>
        </Container>
      </section>

      <TravelSubnav activeHref="/travel/cities" />
      <CityGrid cities={TRAVEL_CITY_GUIDES} background="white" detailed showFilters />
      <TravelCta />
    </>
  );
}
