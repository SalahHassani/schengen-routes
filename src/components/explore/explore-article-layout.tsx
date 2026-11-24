import Image from "next/image";
import NextLink from "next/link";
import {
  ExploreBreadcrumbs,
  type ExploreBreadcrumbItem,
} from "@/components/explore/explore-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import type { ExploreSourceReference } from "@/types/explore";

export interface ExploreArticleLayoutProps {
  breadcrumbs: readonly ExploreBreadcrumbItem[];
  eyebrow: string;
  title: string;
  locationBadge: string;
  metaText?: string;
  imageSrc: string;
  imageAlt: string;
  imageAspect?: "video" | "4/3";
  leadText: string;
  paragraphs: readonly string[];
  highlightLabel?: string;
  highlightText?: string;
  sources: readonly ExploreSourceReference[];
  lastReviewed: string;
  backHref: string;
  backLabel: string;
}

export function ExploreArticleLayout({
  breadcrumbs,
  eyebrow,
  title,
  locationBadge,
  metaText,
  imageSrc,
  imageAlt,
  imageAspect = "video",
  leadText,
  paragraphs,
  highlightLabel,
  highlightText,
  sources,
  lastReviewed,
  backHref,
  backLabel,
}: ExploreArticleLayoutProps) {
  return (
    <article>
      <header className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs items={breadcrumbs} inverse />
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="accent">{locationBadge}</Badge>
            <Eyebrow tone="inverse">{eyebrow}</Eyebrow>
            {metaText ? <span className="text-xs text-slate-300">· {metaText}</span> : null}
          </div>
          <Heading as="h1" size="h1" inverse className="mt-3 max-w-4xl">
            {title}
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            {leadText}
          </Paragraph>
        </Container>
      </header>

      <Section background="white" spacing="lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="border-border-subtle shadow-card rounded-card bg-surface-subtle overflow-hidden border">
              <div
                className={`relative w-full ${
                  imageAspect === "4/3" ? "aspect-4/3" : "aspect-video"
                }`}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {paragraphs.map((para, index) => (
                <Paragraph key={index} size="base">
                  {para}
                </Paragraph>
              ))}
            </div>

            {highlightLabel && highlightText ? (
              <Card variant="default" padding="md" className="bg-surface-subtle mt-8">
                <p className="font-heading text-brand-blue text-xs font-semibold tracking-wider uppercase">
                  {highlightLabel}
                </p>
                <p className="text-text-primary mt-2 text-sm leading-relaxed">{highlightText}</p>
              </Card>
            ) : null}

            <Card variant="default" padding="md" className="mt-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-heading text-text-primary text-xs font-semibold">
                    Authoritative Sources &amp; Verification
                  </p>
                  <p className="text-text-muted mt-1 text-xs">Last reviewed: {lastReviewed}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {sources.map((src) => (
                    <a
                      key={src.url}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-navy text-xs font-semibold underline underline-offset-4"
                    >
                      {src.title} ↗
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            <div className="mt-8">
              <NextLink
                href={backHref}
                className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              >
                <span aria-hidden="true">←</span>
                <span>{backLabel}</span>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
