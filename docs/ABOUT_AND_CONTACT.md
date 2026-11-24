# About Us & Contact Pages — SchengeN Routes (Milestone 8)

## 1. Brand Identity & Messaging

- **Brand Name:** SchengeN Routes (preserving the intentional capital `N`)
- **Tagline:** Your Gateway to Europe
- **Service Line:** Study • Travel • Explore
- **Positioning:** An informational and discovery platform connecting people with European education, visa guidance, travel information, and cultural experiences. The platform does not claim official government, legal, or university admissions authority, nor does it guarantee visa approvals or admissions.

---

## 2. About Us Page (`/about`)

Implemented in `src/app/about/page.tsx` using reusable section components under `src/components/about/`:

1. **`AboutHero` (`src/components/about/about-hero.tsx`)** — Heading `"Connecting People with European Opportunities"`, supporting tagline text, primary CTAs (`/study`, `/explore`), and verified European architectural photography (`/assets/images/destinations/vienna.jpg`).
2. **`MissionVision` (`src/components/about/mission-vision.tsx`)** — Introduces SchengeN Routes across Study, Visa Guide, Travel, and Explore alongside clear Mission and Vision cards.
3. **`CoreValues` (`src/components/about/core-values.tsx`)** — Covers Clarity, Transparency, Accessibility, Reliability, Cultural Discovery, and Continuous Learning.
4. **`AboutServices` (`src/components/about/about-services.tsx`)** — Introduces the four platform sections (`/study`, `/visa-guide`, `/travel`, `/explore`) with direct navigation links.
5. **`OurApproach` (`src/components/about/our-approach.tsx`)** — Explains clear presentation, structured discovery, linking to authoritative sources, and encouraging informed decisions.
6. **`AboutCTA` (`src/components/about/about-cta.tsx`)** — Closing call to action (`"Your European Journey Starts Here"`) linking to `/study`, `/explore`, and `/contact`.

---

## 3. Contact Page (`/contact`) & Centralised Channels

All official contact details and social links are centralised in `BRAND` (`src/lib/constants.ts`):

- **Email:** `schengenroutes@gmail.com` (`mailto:schengenroutes@gmail.com`)
- **Official Business / WhatsApp Number:** `+36 70 792 3072` (`https://wa.me/36707923072`)
- **Official WhatsApp Community:** `https://chat.whatsapp.com/KJBfVD5hNN5Bxxk0YfX1xj`
- **Instagram:** `https://www.instagram.com/schengenroutes/` (`@schengenroutes`)
- **Facebook:** `https://www.facebook.com/profile.php?id=61594905034351`
- **TikTok:** `https://www.tiktok.com/@schengen_routes` (`@schengen_routes`)

Implemented in `src/app/contact/page.tsx` using `ContactHero`, `ContactInformation`, `SocialLinks`, `ContactForm`, and `ContactGuidance`.

---

## 4. Contact Form Behavior & M9 Integration Requirements

- **Fields:** `Full Name`, `Email Address`, `Service of Interest` (`Study`, `Visa Guide`, `Travel`, `Explore`, `General enquiry`), `Subject`, `Message`, and a sensitive-document privacy confirmation checkbox.
- **M8 Frontend-Only Limitation:** `ContactForm` (`src/components/contact/contact-form.tsx`) performs client-side required-field and email-format validation with accessible error alerts, and explicitly avoids claiming that a message was transmitted over a backend. Upon validation, it discloses that automated server submission is scheduled for **Milestone 9** and provides a pre-filled `mailto:` link plus direct WhatsApp link so user input is never silently discarded.
- **M9 Integration Requirements:** Connect `ContactForm` to a validated server action / API route with rate-limiting, spam protection, server-side Zod schema validation, and structured enquiry persistence/notification.

---

## 5. Outstanding Privacy, Legal & Deployment Prerequisites

- **Privacy Policy, Terms & Cookie Policy:** Scheduled for **Milestone 13**; no unverified company registration number, physical office address, legal entity name, privacy officer, or retention period is fabricated in M8.
- **`metadataBase`:** Still unresolved until the production website domain is confirmed; must be added to `src/app/layout.tsx` prior to production deployment.
