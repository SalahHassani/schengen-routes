import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import type { AccommodationCategoryGuide } from "@/types/travel";

export interface AccommodationSectionProps {
  categories: readonly AccommodationCategoryGuide[];
  background?: "white" | "subtle";
}

export function AccommodationSection({
  categories,
  background = "white",
}: AccommodationSectionProps) {
  return (
    <Section
      id="travel-accommodation"
      background={background}
      spacing="lg"
      aria-labelledby="travel-accommodation-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Where to Stay</Eyebrow>
          <Heading as="h2" id="travel-accommodation-heading" className="mt-2">
            European Accommodation Guidance
          </Heading>
          <Paragraph className="mt-3">
            Understand how different accommodation types work across European destinations and what
            criteria to check before booking directly with providers. SchengeN Routes does not
            operate a booking engine or sell accommodation inventory.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Card key={cat.id} variant="default" padding="lg" className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-2">
                <Heading as="h3" size="h4">
                  {cat.name}
                </Heading>
                <Badge variant="default">Category</Badge>
              </div>

              <Paragraph size="sm" className="mt-2.5">
                {cat.summary}
              </Paragraph>

              <div className="text-text-secondary mt-4 text-xs">
                <p className="font-heading text-text-primary font-semibold">What to Evaluate</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-4">
                  {cat.evaluationCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="border-border-subtle text-text-secondary mt-auto pt-4 text-xs">
                <div className="border-t pt-3">
                  <p>{cat.practicalNotes}</p>
                  <p className="text-text-muted mt-1.5 text-[11px]">
                    Last reviewed: {cat.lastReviewed}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
