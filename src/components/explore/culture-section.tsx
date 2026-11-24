import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export interface CultureThemeHighlight {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export interface CultureSectionProps {
  highlights: readonly CultureThemeHighlight[];
  background?: "white" | "subtle";
}

export function CultureSection({ highlights, background = "white" }: CultureSectionProps) {
  return (
    <Section
      id="explore-culture-highlights"
      background={background}
      spacing="lg"
      aria-labelledby="explore-culture-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>European Culture &amp; Lifestyle</Eyebrow>
          <Heading as="h2" id="explore-culture-heading" className="mt-2">
            Traditions, Cuisine, Student Life &amp; Outdoors
          </Heading>
          <Paragraph className="mt-3">
            Explore the everyday cultural fabric of Europe—from historic civic spaces and regional
            food tables to student communities and Alpine landscapes.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <Card key={item.id} variant="default" padding="lg" className="flex h-full flex-col">
              <div>
                <Badge variant="default">{item.eyebrow}</Badge>
              </div>
              <Heading as="h3" size="h4" className="mt-3">
                {item.title}
              </Heading>
              <Paragraph size="sm" className="mt-2.5">
                {item.description}
              </Paragraph>
              <div className="border-border-subtle mt-auto pt-4 text-xs">
                <div className="border-t pt-3.5">
                  <NextLink
                    href={item.href}
                    className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
                  >
                    <span>{item.linkLabel}</span>
                    <span aria-hidden="true">→</span>
                  </NextLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
