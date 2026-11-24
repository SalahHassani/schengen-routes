import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { formatStopSequence } from "@/lib/travel/route-utils";
import type { TravelItineraryRecord } from "@/types/travel";

export interface ItineraryCardProps {
  itinerary: TravelItineraryRecord;
  showDailySchedule?: boolean;
}

export function ItineraryCard({ itinerary, showDailySchedule = false }: ItineraryCardProps) {
  const routeChain = formatStopSequence(itinerary.orderedStops);

  return (
    <Card variant="default" padding="lg" className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge variant="accent">{itinerary.durationLabel}</Badge>
        <Badge variant="neutral">{itinerary.category}</Badge>
      </div>

      <Heading as="h3" size="h4" className="mt-3">
        {itinerary.title}
      </Heading>

      <Paragraph size="sm" className="mt-2">
        {itinerary.description}
      </Paragraph>

      <div className="border-border-subtle bg-surface-subtle mt-4 rounded-lg border p-3.5 text-xs">
        <p className="font-heading text-text-primary font-semibold">Suggested Route Sequence</p>
        <p className="text-brand-blue mt-1 font-medium">{routeChain}</p>
        <p className="text-text-muted mt-1 text-[11px]">
          Suggested planning outline only — verify current operator timetables and availability
          before booking.
        </p>
      </div>

      <div className="text-text-secondary mt-4 space-y-2 text-xs">
        <div>
          <span className="font-heading text-text-primary font-semibold">
            Countries &amp; Cities:{" "}
          </span>
          <span>
            {itinerary.countries.join(", ")} · {itinerary.cities.join(", ")}
          </span>
        </div>
        <div>
          <span className="font-heading text-text-primary font-semibold">Transport Overview: </span>
          <span>{itinerary.transportationBetweenStops}</span>
        </div>
        <div>
          <span className="font-heading text-text-primary font-semibold">Accommodation Note: </span>
          <span>{itinerary.accommodationGuidance}</span>
        </div>
        <div>
          <span className="font-heading text-text-primary font-semibold">Seasonal Note: </span>
          <span>{itinerary.bestTravelPeriodNote}</span>
        </div>
        {itinerary.estimatedBudgetNote ? (
          <div>
            <span className="font-heading text-text-primary font-semibold">
              Verified Budget Reference:{" "}
            </span>
            <span>{itinerary.estimatedBudgetNote}</span>
          </div>
        ) : null}
      </div>

      {showDailySchedule ? (
        <div className="border-border-subtle mt-4 border-t pt-4">
          <p className="font-heading text-text-primary text-xs font-semibold">
            Suggested Day-by-Day Outline
          </p>
          <ol className="text-text-secondary mt-2 space-y-2 text-xs">
            {itinerary.dailySchedule.map((day) => (
              <li key={day.day}>
                <strong className="text-text-primary">
                  Day {day.day} — {day.title}:
                </strong>{" "}
                {day.summary}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {itinerary.suggestedActivities.map((act) => (
          <Badge key={act} variant="default">
            {act}
          </Badge>
        ))}
      </div>

      <div className="border-border-subtle mt-auto pt-4 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-3">
          <span className="text-text-muted">
            Pace: {itinerary.travelDifficulty} · Reviewed {itinerary.lastReviewed}
          </span>
          <div className="flex flex-wrap gap-2">
            {itinerary.sources.map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
              >
                {src.authority} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
