import { BRAND } from "@/lib/constants";

interface SocialChannel {
  name: string;
  handle: string;
  href: string;
}

const SOCIAL_CHANNELS: readonly SocialChannel[] = [
  {
    name: "WhatsApp Community",
    handle: "Official SchengeN Routes Community",
    href: BRAND.whatsappCommunityUrl,
  },
  {
    name: "Instagram",
    handle: BRAND.instagramHandle,
    href: BRAND.instagramUrl,
  },
  {
    name: "Facebook",
    handle: "SchengeN Routes Official Page",
    href: BRAND.facebookUrl,
  },
  {
    name: "TikTok",
    handle: BRAND.tiktokHandle,
    href: BRAND.tiktokUrl,
  },
] as const;

export function SocialLinks() {
  return (
    <ul className="mt-4 space-y-2.5">
      {SOCIAL_CHANNELS.map((channel) => (
        <li
          key={channel.name}
          className="border-border-subtle flex items-center justify-between gap-3 rounded-lg border bg-white px-3.5 py-2.5 text-xs"
        >
          <div>
            <p className="font-heading text-text-primary font-semibold">{channel.name}</p>
            <p className="text-text-secondary mt-0.5">{channel.handle}</p>
          </div>
          <a
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${channel.name} (${channel.handle}) in a new tab`}
            className="font-heading text-brand-blue hover:text-brand-navy shrink-0 font-semibold underline underline-offset-4 transition-colors"
          >
            Open ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
