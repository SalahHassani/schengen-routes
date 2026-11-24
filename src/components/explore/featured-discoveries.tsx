import { ExplorePlaceCard } from "@/components/explore/explore-place-card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import type { ExplorePlace } from "@/types/explore";

export interface FeaturedDiscoveriesProps {
  places: readonly ExplorePlace[];
  background?: "white" | "subtle";
}

export function FeaturedDiscoveries({ places, background = "subtle" }: FeaturedDiscoveriesProps) {
  return (
    <Section
      id="explore-featured"
      background={background}
      spacing="lg"
      aria-labelledby="explore-featured-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Featured Discoveries</Eyebrow>
          <Heading as="h2" id="explore-featured-heading" className="mt-2">
            Iconic Landmarks &amp; Heritage Landscapes
          </Heading>
          <Paragraph className="mt-3">
            A curated selection of historic monuments, cultural quarters, and dramatic natural
            landscapes across Europe.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <ExplorePlaceCard key={place.id} place={place} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
