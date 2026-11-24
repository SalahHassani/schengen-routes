import type { Metadata } from "next";
import { AccommodationSection } from "@/components/travel/accommodation-section";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { ACCOMMODATION_CATEGORY_GUIDES } from "@/data/travel/practical";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Accommodation Guidance | ${BRAND.name}`,
  description:
    "Compare European accommodation categories—hotels, hostels, student residences, short-term rentals, budget stays, and long-term housing—with practical evaluation criteria.",
};

export default function TravelAccommodationPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Travel</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Accommodation Planning
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Accommodation Guidance
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Learn how to evaluate European hotels, hostels, student residences, short-term rentals,
            and long-term stays based on transit access, policies, and local rules.
          </Paragraph>
        </Container>
      </section>

      <TravelSubnav activeHref="/travel/accommodation" />
      <AccommodationSection categories={ACCOMMODATION_CATEGORY_GUIDES} background="white" />
      <TravelCta />
    </>
  );
}
