# European Visa Guide Architecture — SchengeN Routes (Milestone 5)

## 1. Purpose & Non-Authority Positioning

The **Visa Guide** section provides structured, source-backed educational information to help users understand European visa categories, country-specific immigration frameworks, document classifications, and standard application stages.

- SchengeN Routes is an **information and guidance platform**, not an embassy, consulate, immigration authority, visa issuance service, or law firm.
- No content in this section guarantees visa approval or replaces official consular instructions.

---

## 2. Route Structure

All Visa Guide routes reuse the shared `<PageLayout>` header and footer and provide dedicated section navigation via `<VisaSubnav>`:

- `/visa-guide` — Visa Guide landing page covering Hero, Visa Categories, Country-Specific Visa Overviews, Document Checklists, Application Process, Important Information Disclaimer, FAQs, and Consultation CTA.
- `/visa-guide/schengen-visa` — Schengen Short-Stay Visa (Category C) guide covering tourism, business visits, family visits, short courses, and airport transit.
- `/visa-guide/student-visa` — Student Visa and Study Residence guide explaining national study procedures, financial proof, health insurance, accommodation, and post-arrival registration.
- `/visa-guide/national-visas` — National Long-Stay Visas (Category D) and other national residence categories.
- `/visa-guide/countries` — Searchable and filterable country-specific visa overviews (Germany, Italy, France, Hungary, Netherlands, Austria) displaying EU and Schengen membership separately.
- `/visa-guide/document-checklists` — Filterable 3-tier document checklist system.
- `/visa-guide/application-process` — Nine-stage general application workflow.
- `/visa-guide/faqs` — Accessible accordion FAQ directory with search and category/context filters.

---

## 3. Core Visa Distinctions

1. **Schengen Short-Stay Visa (Type C):** Governs short visits across participating Schengen states (generally up to 90 days in any 180-day period) under the EU Visa Code.
2. **Student Visa / Study Residence Procedures:** Issued under destination-specific national immigration rules (and EU Directive 2016/801 where applicable), not as Schengen tourist visas.
3. **National Long-Stay Visas (Type D & Residence Permits):** Governed by domestic immigration statutes in each destination country for employment, family reunification, research, or extended stays.
4. **EU vs. Schengen Membership:** Stored and displayed separately (`isEuMember` vs. `isSchengenMember`) because EU membership and Schengen Area participation are not identical.
