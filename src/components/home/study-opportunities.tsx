import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { STUDY_OPPORTUNITY_HIGHLIGHTS } from "@/data/services";

export function StudyOpportunities() {
  return (
    <Section
      id="study-opportunities"
      background="subtle"
      spacing="lg"
      aria-labelledby="study-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Visual Column */}
          <div className="lg:col-span-5">
            <Card variant="elevated" padding="none" className="overflow-hidden">
              <div className="bg-surface-blue-tint relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src="/assets/images/study/european-university-campus.jpg"
                  alt="European university library reading room with desks and bookshelves"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-navy p-5 text-white">
                <Badge variant="accent">Study in Europe</Badge>
                <p className="font-heading mt-3 text-base font-bold text-white">
                  Structured Academic Discovery
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  Compare degree structures, institutional profiles, and preparation steps across
                  European higher-education systems.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Highlights & CTA Column */}
          <div className="lg:col-span-7">
            <Eyebrow>Higher Education Pathways</Eyebrow>
            <Heading as="h2" id="study-heading" className="mt-2">
              Find Your Study Opportunities in Europe
            </Heading>
            <Divider variant="gold" className="mt-4" />
            <Paragraph size="lg" className="mt-5">
              Explore European universities, academic programmes, admission requirements and
              upcoming application opportunities.
            </Paragraph>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {STUDY_OPPORTUNITY_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="border-border-subtle rounded-card shadow-subtle border bg-white p-4"
                >
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="bg-brand-gold h-2 w-2 shrink-0 rounded-full"
                    />
                    <Heading as="h3" size="h4" className="text-base">
                      {item.title}
                    </Heading>
                  </div>
                  <Paragraph size="sm" className="mt-1.5">
                    {item.description}
                  </Paragraph>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <NextLink href="/study">
                <Button variant="primary" size="lg">
                  Explore Study Opportunities
                </Button>
              </NextLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
