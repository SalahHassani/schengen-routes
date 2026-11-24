import Image from "next/image";
import NextLink from "next/link";
import type { CountryPreview } from "@/data/countries";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export interface CountryCardProps {
  country: CountryPreview;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={country.imageSrc}
          alt={country.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <Heading as="h3" size="h4">
            {country.name}
          </Heading>
          <Badge variant="neutral">{country.region}</Badge>
        </div>

        <Paragraph size="sm" className="mt-3 flex-1">
          {country.summary}
        </Paragraph>

        <div className="border-border-subtle mt-5 border-t pt-4">
          <NextLink
            href={country.href}
            className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          >
            <span>{country.ctaLabel}</span>
            <span aria-hidden="true">→</span>
          </NextLink>
        </div>
      </div>
    </Card>
  );
}
