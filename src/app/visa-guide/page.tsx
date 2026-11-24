import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Visa Guide",
  description:
    "Structured Schengen short-stay and national student visa guidance, country checklists, and official consular source references.",
};

export default function VisaGuidePage() {
  return (
    <Section background="white" spacing="lg">
      <Container size="narrow">
        <Badge variant="default">Milestone 5 • Section Placeholder</Badge>
        <Eyebrow className="mt-4">Entry & Residence Guidance</Eyebrow>
        <Heading as="h1" className="mt-2">
          Visa Guide
        </Heading>
        <Divider variant="gold" className="mt-4" />
        <Paragraph size="lg" className="mt-6">
          Clear, structured Schengen Visa (Type C) and Student Visa (Type D) guidance,
          country-by-country preparation checklists, and direct links to official government and
          consular sources.
        </Paragraph>
      </Container>
    </Section>
  );
}
