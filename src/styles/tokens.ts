/**
 * SchengeN Routes — Central Design Token Definitions (Milestone 1)
 * Visual distribution target: ~50% White, ~30% Deep Navy, ~10% European Blue, ~10% Gold
 */

export const COLOR_TOKENS = {
  brand: {
    white: "#FFFFFF",
    navy: "#102A43",
    europeanBlue: "#174A78",
    gold: "#C5A15A",
  },
  neutral: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
  surface: {
    page: "#FFFFFF",
    subtle: "#F8FAFC",
    muted: "#F1F5F9",
    navy: "#102A43",
    blueTint: "#F0F5FA",
    goldTint: "#FBF8F1",
  },
  text: {
    primary: "#102A43",
    secondary: "#334155",
    muted: "#64748B",
    inverse: "#FFFFFF",
    accent: "#174A78",
  },
  border: {
    subtle: "#E2E8F0",
    default: "#CBD5E1",
    strong: "#94A3B8",
    accent: "#174A78",
    gold: "#C5A15A",
  },
  focus: {
    ring: "#174A78",
    offset: "#FFFFFF",
  },
  semantic: {
    success: "#15803D",
    successBg: "#F0FDF4",
    warning: "#B45309",
    warningBg: "#FFFBEB",
    error: "#B91C1C",
    errorBg: "#FEF2F2",
    info: "#174A78",
    infoBg: "#F0F5FA",
  },
} as const;

export const TYPOGRAPHY_TOKENS = {
  families: {
    heading: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
    body: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
  },
  scale: {
    display: {
      size: "clamp(2.25rem, 4vw + 1rem, 3.5rem)",
      lineHeight: "1.12",
      letterSpacing: "-0.025em",
      weight: "800",
    },
    h1: {
      size: "clamp(1.875rem, 2.5vw + 1rem, 2.75rem)",
      lineHeight: "1.18",
      letterSpacing: "-0.02em",
      weight: "800",
    },
    h2: {
      size: "clamp(1.5rem, 1.8vw + 0.875rem, 2.125rem)",
      lineHeight: "1.24",
      letterSpacing: "-0.015em",
      weight: "700",
    },
    h3: {
      size: "clamp(1.25rem, 1vw + 0.875rem, 1.5rem)",
      lineHeight: "1.32",
      letterSpacing: "-0.01em",
      weight: "700",
    },
    h4: {
      size: "1.125rem",
      lineHeight: "1.4",
      letterSpacing: "-0.005em",
      weight: "600",
    },
    bodyLg: {
      size: "1.125rem",
      lineHeight: "1.65",
      letterSpacing: "0em",
      weight: "400",
    },
    body: {
      size: "1rem",
      lineHeight: "1.65",
      letterSpacing: "0em",
      weight: "400",
    },
    bodySm: {
      size: "0.875rem",
      lineHeight: "1.55",
      letterSpacing: "0em",
      weight: "400",
    },
    caption: {
      size: "0.75rem",
      lineHeight: "1.45",
      letterSpacing: "0.01em",
      weight: "500",
    },
    label: {
      size: "0.875rem",
      lineHeight: "1.4",
      letterSpacing: "0.005em",
      weight: "500",
    },
    eyebrow: {
      size: "0.75rem",
      lineHeight: "1.3",
      letterSpacing: "0.12em",
      weight: "700",
    },
    button: {
      size: "0.9375rem",
      lineHeight: "1.2",
      letterSpacing: "0.01em",
      weight: "600",
    },
  },
} as const;

export const SPACING_TOKENS = {
  scale: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
  },
  section: {
    sm: "py-10 sm:py-12",
    md: "py-14 sm:py-20",
    lg: "py-20 sm:py-28",
  },
  container: {
    maxWidth: "80rem",
    gutter: "px-4 sm:px-6 lg:px-8",
  },
} as const;

export const LAYOUT_TOKENS = {
  maxWidth: {
    narrow: "48rem",
    default: "80rem",
    wide: "90rem",
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export const SHAPE_TOKENS = {
  radius: {
    button: "0.5rem",
    input: "0.5rem",
    card: "0.875rem",
    badge: "9999px",
  },
  shadow: {
    subtle: "0 1px 2px 0 rgb(16 42 67 / 0.05)",
    card: "0 4px 16px -2px rgb(16 42 67 / 0.07), 0 1px 3px 0 rgb(16 42 67 / 0.04)",
    elevated: "0 14px 32px -6px rgb(16 42 67 / 0.12), 0 4px 10px -2px rgb(16 42 67 / 0.05)",
  },
} as const;

export const MOTION_TOKENS = {
  duration: {
    fast: "150ms",
    base: "200ms",
    slow: "300ms",
  },
  easing: {
    standard: "cubic-bezier(0.2, 0, 0, 1)",
  },
} as const;
