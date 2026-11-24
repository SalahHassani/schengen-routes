import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

const GUIDANCE_ITEMS: readonly { title: string; description: string }[] = [
  {
    title: "1. Service of Interest",
    description:
      "Let us know whether your question relates to Study, Visa Guide, Travel, Explore, or a general platform enquiry.",
  },
  {
    title: "2. Country or Destination",
    description:
      "Mention the European country, city, university, or theme you are researching so we can point you to the most relevant resources.",
  },
  {
    title: "3. Your Specific Question",
    description:
      "Share a concise summary of what you are looking for—while keeping sensitive personal documents out of general messages.",
  },
] as const;

export function ContactGuidance() {
  return (
    <Section
      id="contact-guidance"
      background="subtle"
      spacing="lg"
      aria-labelledby="contact-guidance-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Helpful Tips</Eyebrow>
          <Heading as="h2" id="contact-guidance-heading" className="mt-2">
            What to Include When Reaching Out
          </Heading>
          <Paragraph className="mt-3">
            Sharing three clear details helps us direct you quickly to the right guides and official
            resources.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {GUIDANCE_ITEMS.map((item) => (
            <Card key={item.title} variant="default" padding="lg" className="flex h-full flex-col">
              <Heading as="h3" size="h4">
                {item.title}
              </Heading>
              <Paragraph size="sm" className="mt-2.5">
                {item.description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
