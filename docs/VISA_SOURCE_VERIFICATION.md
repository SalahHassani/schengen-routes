# Visa Source Verification & Content Review Policy — SchengeN Routes

## 1. Official Source Hierarchy

Every visa rule, category distinction, checklist classification, and country overview must be grounded in primary official authorities:

1. **European Commission & EU Portals:** Migration and Home Affairs (`home-affairs.ec.europa.eu`) and EU Immigration Portal (`immigration-portal.ec.europa.eu`).
2. **Official Foreign Ministries & Consular Portals:** e.g., Auswärtiges Amt (Germany), MAECI / Il Visto per l'Italia (Italy), France-Visas (France), Konzinfo (Hungary), NetherlandsWorldwide (Netherlands), BMEIA (Austria).
3. **Official National Immigration Authorities:** e.g., BAMF (Germany), Polizia di Stato / Universitaly (Italy), Service-Public / Campus France (France), OIF / Enter Hungary (Hungary), IND (Netherlands), OeAD / migration.gv.at (Austria).
4. **Authorised Visa Application Centres:** Referenced only when officially designated by the competent diplomatic mission.

---

## 2. Anti-Fabrication Rules

- **No invented fees:** Application fees are left null (`verifiedFeesNote: null`) unless verified against an active official fee schedule for a specific mission and category.
- **No invented processing times or appointment availability:** Processing durations and consular slot availability vary by mission and season and are never fabricated.
- **No universal mandatory checklist claims:** Document categories are explicitly classified as `Generally required`, `Conditional or situation-dependent`, or `Country-specific or authority-specific`.

---

## 3. Information Freshness & Review Statuses

Every published item carries `lastReviewed` (`YYYY-MM-DD`) and a visible `ReviewStatus` (`Verified`, `Review due`, `Under review`, or `Archived`) rendered via `<ReviewStatusIndicator />`. Entries requiring statutory re-confirmation (such as Hungary's updated residence procedures) are explicitly marked `Under review`.
