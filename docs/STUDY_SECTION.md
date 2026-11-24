# Study in Europe Section — SchengeN Routes (Milestone 4)

## 1. Overview

Milestone 4 establishes the modular, data-driven **Study in Europe** foundation for **SchengeN Routes**. Rather than publishing speculative admissions rules, tuition figures, scholarship amounts, or unverified deadlines, the section separates verified records from clear empty states and links directly to official higher-education and university sources.

---

## 2. Routes & Navigation

All Study pages reuse the global header and footer via `<PageLayout>` and share a dedicated `<StudySubnav>` bar:

- `/study` — Study landing page covering Hero, Study Destinations, Find Your Programme, Universities, Scholarships, Application Deadlines, How We Help, and Consultation CTA.
- `/study/countries` — Detailed country profiles across Germany, Italy, Hungary, France, Netherlands, and Austria.
- `/study/universities` — Searchable and filterable university directory with official admissions links.
- `/study/programmes` — Degree-level overview (`Bachelor's`, `Master's`, `Foundation`, `PhD / Doctoral`), multi-facet filter controls, and verified-dataset empty state.
- `/study/scholarships` — Scholarship discovery foundation and verified-provider empty state.
- `/study/application-deadlines` — Application opening dates, submission deadlines, intake start dates, and dynamically derived deadline statuses.

---

## 3. Search, Filtering & Deadline Status Logic

- **University Filtering (`src/lib/study/filters.ts`):** Supports case-insensitive keyword search (university name, city, country, institution type, summary, and programme categories), country filtering, institution type filtering, filter reset, result count readouts, and empty search results states.
- **Programme Filtering (`src/lib/study/filters.ts`):** Supports search query, country, degree level, subject area, language of instruction, and university filtering, paired with a clear empty state while individual verified programme records are pending.
- **Application Deadline Derivation (`src/lib/study/deadline-status.ts`):** Separates `applicationOpeningDate`, `applicationDeadline`, and `intakeStartDate`, computing `DeadlineStatus` (`Not announced`, `Upcoming`, `Open`, `Closing soon`, `Closed`, `Awaiting official confirmation`) strictly from dates and the reference date.

---

## 4. Source Verification & Data Freshness

Every verified record includes `sourceUrl` and `lastReviewed` (`YYYY-MM-DD`). Official university websites, admissions pages, and recognised national higher-education portals take priority over third-party aggregators. Unverified fields are explicitly left null or marked as awaiting official confirmation.
