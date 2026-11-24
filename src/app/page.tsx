import fs from "node:fs";
import path from "node:path";

const pillars = [
  {
    title: "Study",
    description:
      "European countries, universities, Bachelor's, Master's & Foundation programmes, scholarships, and verified admission intakes.",
  },
  {
    title: "Visa Guide",
    description:
      "Structured Schengen short-stay and student visa guides, document checklists, procedures, and official consular sources.",
  },
  {
    title: "Travel",
    description:
      "European destination guides, itineraries, transportation insights, accommodation guidance, and practical trip preparation.",
  },
  {
    title: "Explore",
    description:
      "Editorial city discoveries, European culture, landmarks, student life, and authentic local experiences.",
  },
];

export default function FoundationPage() {
  const logoRelativePath = "/assets/brand/logo-primary.png";
  const logoExists = fs.existsSync(
    path.join(process.cwd(), "public", "assets", "brand", "logo-primary.png")
  );

  return (
    <main className="flex flex-1 flex-col bg-white text-[#102A43]">
      <header className="border-b border-[#174A78]/20 bg-[#102A43] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            {logoExists ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={logoRelativePath}
                alt="SchengeN Routes Logo"
                className="h-10 w-auto object-contain"
              />
            ) : (
              <span className="text-sn inline-flex items-center rounded-lg border border-[#C5A15A]/50 bg-[#174A78]/40 px-3 py-1.5 font-semibold tracking-wide text-white">
                SchengeN Routes
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A15A]/60 bg-[#102A43] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#C5A15A] uppercase">
            Milestone 0 • Foundation Active
          </span>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-[#174A78]} text-sm font-semibold tracking-widest uppercase">
            Study • Travel • Explore
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#102A43] sm:text-5xl">
            SchengeN Routes
          </h1>
          <p className="text-el text-[#174A78]} mt-2 text-xl font-semibold">
            Your Gateway to Europe
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-[#C5A15A]" />
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Technical foundation initialized with Next.js App Router, React, TypeScript (strict
            mode), and Tailwind CSS. Production navigation, service sections, and enquiry flows will
            be implemented incrementally in upcoming milestones.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((Pillar) => (
            <div
              key={Pillar.title}
              className="p-z6 hover:border-[#174A78]} rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-colors"
            >
              <div className="mb-3 h-1.5 w-10 rounded-full bg-[#174A78]" />
              <h2 className="text-lg font-bold text-[#102A43]">{Pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{Pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <span className="font-semibold text-[#102A43]">Brand Logo Asset Status: </span>
          {logoExists ? (
            <span className="font-medium text-emerald-700">
              Verified at public/assets/brand/logo-primary.png
            </span>
          ) : (
            <span className="text-[#174A78]}">
              Place your original logo file at{" "}
              <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs">
                public/assets/brand/logo-primary.png
              </code>{" "}
              to display it automatically.
            </span>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#102A43] py-6 text-sm text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <p className="font-semibold text-white">
            SchengeN Routes — <span className="text-[#C5A15A]">Your Gateway to Europe</span>
          </p>
          <p>Contact: schengenroutes@gmail.com • WhatsApp: +36 70 792 3072</p>
        </div>
      </footer>
    </main>
  );
}
