# SchengeN Routes — Your Gateway to Europe

**Service Line:** Study • Travel • Explore

SchengeN Routes is a modular European education, visa-information, travel-planning, and cultural discovery platform built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## Core Service Pillars

1. **Study (`/study`)** — European countries, universities, Bachelor's, Master's & Foundation programmes, scholarships, admission requirements, and verified application intakes.
2. **Visa Guide (`/visa-guide`)** — Structured Schengen short-stay and student visa guides, document checklists, step-by-step procedures, FAQs, official sources, and last-reviewed dates.
3. **Travel (`/travel`)** — European destination guides, itineraries, transportation insights, accommodation guidance, and practical travel preparation.
4. **Explore (`/explore`)** — Editorial European city guides, culture, landmarks, student life, and authentic local experiences.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- +_Language:_* TypeScript (strict mode)
- **UI & Styling:** React, Tailwind CSS
- +_Typography:_* Manrope (Headings & Buttons), Inter (Body)
- **Code Quality:** ESLint, Prettier (`prttier-plugin-tailwindcss`)

---

## Getting Started (Clean Checkout)

### Prerequisites

- **Node.js** 20.x or newer
- **npm** 10.x or newer

### Installation & Local Development

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd schengen-routes
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   ```powershell
   Copy-Item .env.example .env.local
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command                | Description                                             |
| :--------------------- | :------------------------------------------------------ |
| `npm run dev`          | Starts the local Next.js development server             |
| `npm run build`        | Creates an optimized production build                   |
| `npm run start`        | Runs the compiled production server                     |
| `npm run lint`         | Runs ESLint across the codebase                         |
| `npm run typecheck`    | Runs TypeScript compiler type checking (`tsc --noEmit`) |
| `npm run format`       | Formats all files using Prettier                        |
| `npm run format:check` | Verifies code formatting without modifying files        |

---

## Project Structure

```text
schengen-routes/
├── docs/                  # Architecture, brand guidelines, roadmap & milestone specs
├── public/
│   └── assets/
│         ├── brand/         # Official SchengeN Routes logos & brand assets
┈         ├── images/        # Categorized service & destination imagery
┈         ├── icons/         # UI & custom vector icons
│         └── documents/     # Downloadable public reference files
├── src/
│   ├── app/               # Next.js App Router pages, layouts & API routes
│   ├── components/        # Modular UI & service-specific React components
│   ├── data/              # Structured typed records (countries, universities, guides)
│   ├── lib/               # Constants, metadata helpers, validation & utilities
┈   ├── styles/            # Shared style configurations
│   └── types/             # TypeScript interfaces & domain models
├── .env.example           # Environment variable template
└── README.md              # Project setup and developer guide
```

---

## Brand Identity & Contact

- **Tagline:** Your Gateway to Europe
- **Primary Palette:** White (`#FFFFFF`), Deep Navy (`#102A43`), European Blue (`#174A78`), Gold (`#C5A15A`)
- **Email:** `schengenroutes@gmail.com`
- **WhatsApp:** `+36 70 792 3072`
- **WhatsApp Community:** [Join Community](https://chat.whatsapp.com/KJBfVD5hNN5Bxxk0YfX1xj)
- **Instagram:** `@schengenroutes` | **Facebook:** SchengeN Routes | **TikTok:** `@schengen_routes`

---

## Development Roadmap

The platform is built incrementally across 14 milestones (`M0`–`M13`). See `docs/DEVELOPMENT_ROADMAP.md` and `docs/MILESTONE_0_SPECIFICATION.md` for full milestone tracking and acceptance criteria.
