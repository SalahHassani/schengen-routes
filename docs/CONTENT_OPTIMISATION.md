# Content Optimisation and Editorial Standards — SchengeN Routes

## Core Accuracy Principles

1. **Verification Over Volume:** Factual accuracy across education, visa guidance, travel planning, and cultural coverage takes precedence over keyword density.
2. **Official Source Retention:** Factual entries preserve references to official government, immigration, university, and tourism authorities alongside `lastReviewed` / `updatedAt` dates.
3. **No Fabricated Data:**
   - No invented tuition fees, scholarship amounts, or unconfirmed application deadlines (`STUDY_PROGRAMMES` and `STUDY_SCHOLARSHIPS` remain empty until verified records are added).
   - No invented visa fees, processing times, or consular appointment availability; Schengen short-stay, student visa, and national long-stay rules remain clearly separated.
   - No invented street addresses, registration numbers, ratings, reviews, or opening hours.
   - SchengeN Routes is never represented as a government, embassy, or university admissions authority and makes no visa or admission guarantees.

## Page Structure & Heading Hierarchy

- Each route renders a single primary `<h1>` heading followed by semantic `<h2>` and `<h3>` section headings (`<section>`, `<article>`, `<nav>`).
- Headings describe section topics naturally and are never stuffed with repetitive keywords.

## Image SEO Standards

- Content images provide descriptive `alt` text (`imageAlt` / `coverImageAlt`) matching the actual subject depicted.
- Decorative icons and purely ornamental elements use empty `alt=""` or `aria-hidden="true"` so assistive technologies focus on meaningful content.
- Existing image aspect ratios and responsive containers are preserved to prevent layout shifts.

## Editorial Review Process

- New records added under `src/data/{study,visa-guide,travel,explore}/` must satisfy their corresponding TypeScript interfaces (`src/types/*`), include valid source citations and review dates, and pass `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` before publication.
