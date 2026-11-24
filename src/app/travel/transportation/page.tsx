import type { Metadata } from "next";
import { TransportationSection } from "@/components/travel/transportation-section";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { TRANSPORT_MODE_GUIDES } from "@/data/travel/practical";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Transportation Guide | ${BRAND.name}`,
  description:
    "Compare European trains, buses, flights, local public transportation, car travel, and ferries with links to official operators and EU passenger rights resources.",
};

export default function TravelTransportationPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Travel</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Transport Overview
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Transportation Guide
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Understand how European trains, intercity coaches, flights, city transit, car travel,
            and ferries compare—and where to verify official operator timetables.
          </Paragraph>
        </Container>
      </section>

      <TravelSubnav activeHref="/travel/transportation" />
      <TransportationSection modes={TRANSPORT_MODE_GUIDES} background="white" />
      <TravelCta />
    </>
  );
}
