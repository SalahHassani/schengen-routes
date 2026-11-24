import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Study in Europe",
  description:
    "Explore European countries, accredited universities, Bachelor's and Master's programmes, scholarships, and application timelines.",
};

export default function StudyPage() {
  return (
    <Section background="white" spacing="lg">
      <Container size="narrow">
        <Badge variant="default">Milestone 4 • Section Placeholder</Badge>
        <Eyebrow className="mt-4">European Higher Education</Eyebrow>
        <Heading as="h1" className="mt-2">
          Study in Europe
        </Heading>
        <Divider variant="gold" className="mt-4" />
        <Paragraph size="lg" className="mt-6">
          Discover European study destinations, accredited universities, English-taught
          Bachelor&apos;s and Master&apos;s programmes, scholarship pathways, and verified
          application deadlines.
        </Paragraph>
      </Container>
    </Section>
  );
}
