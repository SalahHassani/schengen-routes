import { Badge } from "@/components/ui/badge";
import {
  getReviewStatusBadgeVariant,
  getReviewStatusDescription,
} from "@/lib/visa-guide/review-status";
import type { ReviewStatus } from "@/types/visa-guide";

export interface ReviewStatusIndicatorProps {
  status: ReviewStatus;
  lastReviewed: string;
  showDescription?: boolean;
}

export function ReviewStatusIndicator({
  status,
  lastReviewed,
  showDescription = false,
}: ReviewStatusIndicatorProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <Badge variant={getReviewStatusBadgeVariant(status)}>{status}</Badge>
      <span className="text-[11px] text-text-muted">Last reviewed: {lastReviewed}</span>
      {showDescription ? (
        <span className="w-full text-[11px] text-text-secondary">
          {getReviewStatusDescription(status)}
        </span>
      ) : null}
    </div>
  );
}

