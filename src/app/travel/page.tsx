import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Travel",
  description:
    "Curated European destinations, practical travel guides, intercity transportation tips, and accommodation planning across Schengen.",
};

export default function TravelPage() {
  return (
    <Section background="white" spacing="lg">
      <Container size="narrow">
        <Badge variant="default">Milestone 6 • Section Placeholder</Badge>
        <Eyebrow className="mt-4">European Mobility & Routes</Eyebrow>
        <Heading as="h1" className="mt-2">
          Travel
        </Heading>
        <Divider variant="gold" className="mt-4" />
        <Paragraph size="lg" className="mt-6">
          Practical European travel guides, destination itineraries, cross-border rail and flight
          planning, and accommodation insights for students and visitors across the Schengen area.
        </Paragraph>
      </Container>
    </Section>
  );
}
