import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Explore Europe",
  description:
    "Explore European cities, cultural heritage, historic landmarks, and everyday student life across Europe.",
};

export default function ExplorePage() {
  return (
    <Section background="white" spacing="lg">
      <Container size="narrow">
        <Badge variant="default">Milestone 7 • Section Placeholder</Badge>
        <Eyebrow className="mt-4">Culture, Cities & Student Life</Eyebrow>
        <Heading as="h1" className="mt-2">
          Explore Europe
        </Heading>
        <Divider variant="gold" className="mt-4" />
        <Paragraph size="lg" className="mt-6">
          Editorial stories and practical insights covering European cities, cultural traditions,
          historic landmarks, and day-to-day student life across Europe.
        </Paragraph>
      </Container>
    </Section>
  );
}
