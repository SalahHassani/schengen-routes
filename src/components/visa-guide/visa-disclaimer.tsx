import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export interface VisaDisclaimerProps {
  background?: "white" | "subtle";
  compact?: boolean;
}

const DISCLAIMER_POINTS = [
  "Visa decisions are made solely by the competent diplomatic missions, consular posts, or national immigration authorities.",
  "SchengeN Routes is an information and guidance platform—not an embassy, government agency, or law firm—and cannot guarantee visa approval.",
  "Visa requirements, fees, appointment procedures, and processing times change periodically without advance notice.",
  "Always verify current rules directly with the official European Commission, national foreign ministry, or responsible embassy/consulate before applying.",
  "Content in this section provides general informational guidance and does not constitute formal legal advice or a substitute for official instructions.",
] as const;

export function VisaDisclaimer({ background = "subtle", compact = false }: VisaDisclaimerProps) {
  if (compact) {
    return (
      <Card
        variant="default"
        padding="md"
        className="border-brand-gold/50 bg-surface-subtle"
        role="note"
        aria-label="Important visa information notice"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">Important Information</Badge>
          <span className="font-heading text-text-primary text-xs font-semibold">
            General Guidance Notice — No Approval Guarantees
          </span>
        </div>
        <Paragraph size="sm" className="mt-2 text-xs">
          SchengeN Routes provides structured educational and informational guidance only. Visa
          decisions belong exclusively to official consular and immigration authorities. Always
          confirm current requirements on official government portals.
        </Paragraph>
      </Card>
    );
  }

  return (
    <Section
      id="visa-disclaimer"
      background={background}
      spacing="lg"
      aria-labelledby="visa-disclaimer-heading"
    >
      <Container>
        <Card
          variant="default"
          padding="lg"
          className="border-brand-gold/60 bg-white"
          role="region"
          aria-labelledby="visa-disclaimer-heading"
        >
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent">Important Information Notice</Badge>
              <Eyebrow>Scope &amp; Responsibility</Eyebrow>
            </div>

            <Heading as="h2" id="visa-disclaimer-heading" size="h3" className="mt-3">
              How to Use This Visa Guidance Responsibly
            </Heading>

            <Paragraph size="sm" className="mt-2.5">
              Before relying on any summary for travel, study, or residence planning, keep the
              following principles in mind:
            </Paragraph>

            <ul className="text-text-secondary mt-4 space-y-2.5 text-sm">
              {DISCLAIMER_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="bg-brand-gold mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
