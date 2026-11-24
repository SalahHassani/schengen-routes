import type { Metadata } from "next";
import { ItineraryGrid } from "@/components/travel/itinerary-grid";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { TRAVEL_ITINERARIES } from "@/data/travel/itineraries";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Suggested European Itineraries | ${BRAND.name}`,
  description:
    "Explore suggested European city breaks and multi-country route plans with day-by-day outlines, transport notes, and official tourism sources.",
};

export default function TravelItinerariesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Travel</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Route Planning
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Suggested European Itineraries
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Browse single-city and multi-country route outlines structured around logical European
            geography. All itineraries are suggested plans rather than fixed schedules.
          </Paragraph>
        </Container>
      </section>

      <TravelSubnav activeHref="/travel/itineraries" />
      <ItineraryGrid
        itineraries={TRAVEL_ITINERARIES}
        background="white"
        showDailySchedule
        showFilters
      />
      <TravelCta />
    </>
  );
}
