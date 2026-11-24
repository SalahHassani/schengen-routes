import NextLink from "next/link";
import type { ServicePillar } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  service: ServicePillar;
}

const pillarAccents: Record<ServicePillar["id"], { topBar: string; number: string }> = {
  study: {
    topBar: "bg-brand-navy",
    number: "01",
  },
  "visa-guide": {
    topBar: "bg-brand-blue",
    number: "02",
  },
  travel: {
    topBar: "bg-brand-gold",
    number: "03",
  },
  explore: {
    topBar: "bg-brand-navy",
    number: "04",
  },
};

export function ServiceCard({ service }: ServiceCardProps) {
  const accent = pillarAccents[service.id];

  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div aria-hidden="true" className={cn("h-1.5 w-full", accent.topBar)} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <Badge variant={service.id === "travel" ? "accent" : "default"}>{service.badge}</Badge>
          <span className="font-heading text-text-muted text-xs font-bold tracking-wider">
            {accent.number}
          </span>
        </div>

        <Heading as="h3" size="h4" className="mt-4">
          {service.title}
        </Heading>

        <Paragraph size="sm" className="mt-2.5 flex-1">
          {service.description}
        </Paragraph>

        <ul className="border-border-subtle mt-5 space-y-1.5 border-t pt-4">
          {service.highlights.map((highlight) => (
            <li
              key={highlight}
              className="text-text-secondary flex items-center gap-2 text-xs font-medium"
            >
              <span
                aria-hidden="true"
                className="bg-brand-gold h-1.5 w-1.5 shrink-0 rounded-full"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <NextLink href={service.href} className="block w-full">
            <Button variant="outline" size="md" className="w-full justify-between">
              <span>{service.ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </Button>
          </NextLink>
        </div>
      </div>
    </Card>
  );
}
