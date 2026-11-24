export interface CountryPreview {
  slug: string;
  name: string;
  region: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
}

export const FEATURED_COUNTRIES: readonly CountryPreview[] = [
  {
    slug: "germany",
    name: "Germany",
    region: "Western & Central Europe",
    summary:
      "Renowned for technical universities, research institutions, and diverse academic and cultural hubs across major cities.",
    imageSrc: "/assets/images/countries/germany.jpg",
    imageAlt: "Historic Alpine castle and forested landscape in Bavaria, Germany",
    href: "/study",
    ctaLabel: "Explore Germany",
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Southern Europe",
    summary:
      "Home to some of Europe's oldest universities, world-famous architectural heritage, and vibrant Mediterranean city life.",
    imageSrc: "/assets/images/countries/italy.jpg",
    imageAlt: "Panoramic view of the historic cathedral dome and skyline of Florence, Italy",
    href: "/study",
    ctaLabel: "Explore Italy",
  },
  {
    slug: "france",
    name: "France",
    region: "Western Europe",
    summary:
      "A major centre for higher education, arts, international business, and iconic regional landmarks across the Schengen area.",
    imageSrc: "/assets/images/countries/france.jpg",
    imageAlt: "Historic stone abbey architecture at Mont Saint-Michel in Normandy, France",
    href: "/study",
    ctaLabel: "Explore France",
  },
  {
    slug: "hungary",
    name: "Hungary",
    region: "Central Europe",
    summary:
      "An accessible Central European gateway with internationally recognised degree programmes and rich Danube heritage.",
    imageSrc: "/assets/images/countries/hungary.jpg",
    imageAlt:
      "Hungarian Parliament Building illuminated along the Danube River in Budapest, Hungary",
    href: "/study",
    ctaLabel: "Explore Hungary",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "Western Europe",
    summary:
      "Known for international campus environments, innovative teaching styles, and seamless European rail connectivity.",
    imageSrc: "/assets/images/countries/netherlands.jpg",
    imageAlt: "Traditional Dutch windmills along waterways at Kinderdijk in the Netherlands",
    href: "/study",
    ctaLabel: "Explore Netherlands",
  },
  {
    slug: "austria",
    name: "Austria",
    region: "Central Europe",
    summary:
      "Combines distinguished academic traditions, Alpine landscapes, and historic cultural centres in the heart of Europe.",
    imageSrc: "/assets/images/countries/austria.jpg",
    imageAlt: "Lakeside Alpine village and mountain scenery in Hallstatt, Austria",
    href: "/study",
    ctaLabel: "Explore Austria",
  },
] as const;
