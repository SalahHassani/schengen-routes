import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { ExploreCategory } from "@/types/explore";

export interface ExploreCategoryCardProps {
  category: ExploreCategory;
}

export function ExploreCategoryCard({ category }: ExploreCategoryCardProps) {
  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="neutral">
            <span aria-hidden="true" className="text-brand-gold mr-1">
              {category.icon}
            </span>
            Explore Topic
          </Badge>
          {typeof category.contentCount === "number" ? (
            <span className="text-text-muted text-xs font-medium">
              {category.contentCount} items
            </span>
          ) : null}
        </div>

        <Heading as="h3" size="h4" className="mt-3">
          {category.title}
        </Heading>

        <Paragraph size="sm" className="mt-2">
          {category.description}
        </Paragraph>

        <div className="border-border-subtle mt-auto pt-4 text-xs">
          <div className="border-t pt-3.5">
            <NextLink
              href={category.href}
              className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
            >
              <span>Browse {category.title}</span>
              <span aria-hidden="true">→</span>
            </NextLink>
          </div>
        </div>
      </div>
    </Card>
  );
}
