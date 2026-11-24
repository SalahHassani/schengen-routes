import type { Metadata } from "next";
import { AccommodationSection } from "@/components/travel/accommodation-section";
import { CityGrid } from "@/components/travel/city-grid";
import { DestinationGrid } from "@/components/travel/destination-grid";
import { ItineraryGrid } from "@/components/travel/itinerary-grid";
import { TransportationSection } from "@/components/travel/transportation-section";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelGuideGrid } from "@/components/travel/travel-guide-grid";
import { TravelHero } from "@/components/travel/travel-hero";
import { TravelIntro } from "@/components/travel/travel-intro";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { TravelTips } from "@/components/travel/travel-tips";
import { TRAVEL_CITY_GUIDES } from "@/data/travel/cities";
import { TRAVEL_DESTINATIONS } from "@/data/travel/destinations";
import { TRAVEL_GUIDE_ARTICLES } from "@/data/travel/guides";
import { TRAVEL_ITINERARIES } from "@/data/travel/itineraries";
import {
  ACCOMMODATION_CATEGORY_GUIDES,
  PRACTICAL_TRAVEL_TIPS,
  TRANSPORT_MODE_GUIDES,
} from "@/data/travel/practical";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Travel Discovery & Planning | ${BRAND.name}`,
  description:
    "Discover European destinations, cities, practical travel guides, suggested itineraries, transportation overviews, and accommodation guidance with SchengeN Routes.",
  openGraph: {
    title: `European Travel Discovery & Planning | ${BRAND.name}`,
    description:
      "Explore remarkable European destinations, practical travel guides, and suggested route plans backed by official tourism sources.",
    type: "website",
  },
};

export default function TravelPage() {
  return (
    <>
      <TravelHero />
      <TravelSubnav activeHref="/travel" />
      <TravelIntro />
      <DestinationGrid destinations={TRAVEL_DESTINATIONS} background="subtle" showFilters />
      <CityGrid cities={TRAVEL_CITY_GUIDES} background="white" />
      <TravelGuideGrid articles={TRAVEL_GUIDE_ARTICLES} background="subtle" />
      <ItineraryGrid itineraries={TRAVEL_ITINERARIES} background="white" showFilters />
      <TransportationSection modes={TRANSPORT_MODE_GUIDES} background="subtle" />
      <AccommodationSection categories={ACCOMMODATION_CATEGORY_GUIDES} background="white" />
      <TravelTips tips={PRACTICAL_TRAVEL_TIPS} background="subtle" />
      <TravelCta />
    </>
  );
}
