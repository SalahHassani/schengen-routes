import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import { BRAND, CONTACT } from "@/lib/constants";

const brandSwatches = [
  {
    name: "White",
    hex: "#FFFFFF",
    share: "~50% Target",
    usage: "Page backgrounds, reading surfaces, cards, and clean negative space.",
    swatchClass: "bg-brand-white border border-border-default",
  },
  {
    name: "Deep Navy",
    hex: "#102A43",
    share: "~30% Target",
    usage: "Primary headings, primary CTAs, navigation, footer, and dark hero sections.",
    swatchClass: "bg-brand-navy",
  },
  {
    name: "European Blue",
    hex: "#174A78",
    share: "~10% Target",
    usage: "Secondary buttons, interactive links, active states, and section eyebrows.",
    swatchClass: "bg-brand-blue",
  },
  {
    name: "Gold",
    hex: "#C5A15A",
    share: "~10% Target",
    usage: "Restrained highlights, accent rules, milestone badges, and selected details.",
    swatchClass: "bg-brand-gold",
  },
];

export default function DesignSystemShowcasePage() {
  return (
    <main className="flex-1">
      {/* Brand Identity & Logo Hero */}
      <Section background="navy" spacing="md">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <BrandLogo size="lg" surface="dark" />
            <Badge variant="accent">Milestone 1 • Design System</Badge>
          </div>

          <div className="mt-10 max-w-3xl">
            <Eyebrow tone="inverse">{BRAND.serviceLine}</Eyebrow>
            <Heading as="h1" size="display" inverse className="mt-3">
              {BRAND.name}
            </Heading>
            <Paragraph size="lg" tone="inverse" className="mt-2 font-semibold text-white">
              {BRAND.tagline}
            </Paragraph>
            <Divider variant="gold" className="mt-5" />
            <Paragraph tone="inverse" className="mt-6">
              Centralized brand identity, design tokens, responsive typography, and accessible UI
              foundation powering Study, Visa Guide, Travel, and Explore across every viewport from
              320px mobile to 1920px+ desktop.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Brand Logo Rendering Check */}
      <Section background="subtle" spacing="sm">
        <Container>
          <Eyebrow>Brand Asset Verification</Eyebrow>
          <Heading as="h2" size="h3" className="mt-2">
            Approved Logo Rendering
          </Heading>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card variant="default" padding="lg">
              <Badge variant="neutral">Light Surface</Badge>
              <div className="border-border-subtle mt-5 flex min-h-24 items-center rounded-lg border bg-white p-4">
                <BrandLogo size="lg" surface="light" />
              </div>
              <Paragraph size="sm" tone="muted" className="mt-3">
                Original asset rendered at natural aspect ratio without distortion.
              </Paragraph>
            </Card>

            <Card variant="default" padding="lg" className="bg-brand-navy text-white">
              <Badge variant="accent">Dark Surface Framing</Badge>
              <div className="mt-5 flex min-h-24 items-center">
                <BrandLogo size="lg" surface="dark" />
              </div>
              <Paragraph size="sm" tone="inverse" className="mt-3">
                Clean light surface container preserves full logo legibility on Deep Navy.
              </Paragraph>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Official Colour Palette */}
      <Section background="white" spacing="md">
        <Container>
          <Eyebrow>Colour System</Eyebrow>
          <Heading as="h2" className="mt-2">
            Four-Colour Brand Palette
          </Heading>
          <Paragraph className="mt-3 max-w-2xl">
            Balanced visual distribution designed for clarity, European authority, and WCAG 2.2 AA
            contrast compliance.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandSwatches.map((swatch) => (
              <Card key={swatch.name} variant="elevated" padding="md">
                <div className={`h-20 w-full rounded-lg ${swatch.swatchClass}`} />
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Heading as="h3" size="h4">
                    {swatch.name}
                  </Heading>
                  <Badge variant="neutral">{swatch.hex}</Badge>
                </div>
                <Paragraph size="caption" className="text-brand-blue mt-1">
                  {swatch.share}
                </Paragraph>
                <Paragraph size="sm" className="mt-2">
                  {swatch.usage}
                </Paragraph>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Divider />

      {/* Typography Scale */}
      <Section background="white" spacing="md">
        <Container>
          <Eyebrow>Typography</Eyebrow>
          <Heading as="h2" className="mt-2">
            Manrope & Inter Responsive Scale
          </Heading>

          <Card variant="default" padding="lg" className="mt-8 space-y-6">
            <div>
              <Paragraph size="caption" tone="muted">
                Display Heading (Manrope ExtraBold)
              </Paragraph>
              <Heading as="h2" size="display" className="mt-1">
                Your Gateway to Europe
              </Heading>
            </div>
            <Divider />
            <div>
              <Paragraph size="caption" tone="muted">
                H1 Heading (Manrope ExtraBold)
              </Paragraph>
              <Heading as="h2" size="h1" className="mt-1">
                Study, Travel & Explore Across Schengen
              </Heading>
            </div>
            <Divider />
            <div>
              <Paragraph size="caption" tone="muted">
                H2 & H3 Headings (Manrope Bold)
              </Paragraph>
              <Heading as="h2" className="mt-1">
                Structured European University Guidance
              </Heading>
              <Heading as="h3" className="mt-2">
                Verified Admission Requirements & Official Visa Checklists
              </Heading>
            </div>
            <Divider />
            <div className="space-y-3">
              <Paragraph size="caption" tone="muted">
                Body Copy (Inter Regular / Medium)
              </Paragraph>
              <Paragraph size="lg">
                Body Large — Clear, accessible guidance tailored for international students,
                applicants, and European travellers.
              </Paragraph>
              <Paragraph size="base">
                Body Regular — Every guide separates verified official procedures from general
                planning insights so you can prepare with confidence.
              </Paragraph>
              <Paragraph size="sm" tone="muted">
                Body Small — Last reviewed dates and official consular references are maintained
                consistently across all service modules.
              </Paragraph>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Interactive Controls, Cards & Badges */}
      <Section background="subtle" spacing="md">
        <Container>
          <Eyebrow>UI Components</Eyebrow>
          <Heading as="h2" className="mt-2">
            Buttons, Badges, Cards & Links
          </Heading>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Card variant="default" padding="lg" className="space-y-6">
              <div>
                <Heading as="h3" size="h4">
                  Button Variants & States
                </Heading>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="primary" loading>
                    Loading
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <Divider />

              <div>
                <Heading as="h3" size="h4">
                  Badges & Inline Links
                </Heading>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <Badge variant="default">Study in Europe</Badge>
                  <Badge variant="neutral">Last Reviewed: Nov 2026</Badge>
                  <Badge variant="accent">Featured Guide</Badge>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
                  <Link href="#form-controls">Internal Section Link</Link>
                  <Link href={CONTACT.whatsappDirectUrl}>
                    Direct WhatsApp ({CONTACT.whatsappDisplay})
                  </Link>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <Card variant="default" padding="md">
                <Badge variant="neutral">Default Card</Badge>
                <Heading as="h3" size="h4" className="mt-3">
                  Standard Surface
                </Heading>
                <Paragraph size="sm" className="mt-1">
                  Clean white card with subtle border and hairline elevation.
                </Paragraph>
              </Card>

              <Card variant="elevated" padding="md">
                <Badge variant="default">Elevated Card</Badge>
                <Heading as="h3" size="h4" className="mt-3">
                  Featured Content Surface
                </Heading>
                <Paragraph size="sm" className="mt-1">
                  Soft Deep Navy shadow depth for key callouts and summaries.
                </Paragraph>
              </Card>

              <Card variant="interactive" padding="md">
                <Badge variant="accent">Interactive Card</Badge>
                <Heading as="h3" size="h4" className="mt-3">
                  Hover & Focus Elevation
                </Heading>
                <Paragraph size="sm" className="mt-1">
                  Subtle lift and European Blue border transition on hover.
                </Paragraph>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Accessible Form Controls */}
      <Section id="form-controls" background="white" spacing="md">
        <Container size="narrow">
          <Eyebrow>Form Primitives</Eyebrow>
          <Heading as="h2" className="mt-2">
            Accessible Inputs & Textareas
          </Heading>
          <Paragraph className="mt-2">
            Semantic labels, explicit helper descriptions, non-colour-only error indicators, and
            WCAG-compliant focus rings.
          </Paragraph>

          <Card variant="elevated" padding="lg" className="mt-8 space-y-5">
            <Input
              label="Full Name"
              placeholder="e.g. Elena Kovacs"
              helperText="Enter your name as it appears on your passport."
              required
            />
            <Input
              label="Email Address"
              type="email"
              defaultValue="invalid-email"
              error="Please enter a valid email address."
              required
            />
            <Input
              label="Selected Programme (Disabled State)"
              value="MSc Computer Science — Central Europe"
              disabled
            />
            <Textarea
              label="Consultation Notes"
              placeholder="Share your preferred European destination, study level, or travel timeline..."
              helperText="Our team responds via email or WhatsApp within 1–2 business days."
            />
          </Card>
        </Container>
      </Section>
    </main>
  );
}
