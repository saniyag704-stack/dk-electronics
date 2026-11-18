/**
 * DK Electronics - Official Brand Identity & Design Tokens
 * Derived from the actual physical showroom architecture and signage:
 * 1. Original DK Eagle Wings emblem
 * 2. DK letters inside the emblem
 * 3. DK ELECTRONICS wordmark
 * 4. Black showroom facade (#111111)
 * 5. Large white DK lettering (#FFFFFF)
 * 6. Red rounded Electronics signage (#D82935)
 */

export const BRAND_COLORS = {
  // Primary Black: Showroom Facade & Architectural Framing
  primaryBlack: "#111111",
  
  // Pure White: Primary DK Lettering, Clean Card Backgrounds, High-Contrast Text
  white: "#FFFFFF",
  
  // Signature Red: Rounded "Electronics" Signage, Key Conversion CTAs, Offer Badges
  signatureRed: "#D82935",
  signatureRedHover: "#BA1C27",
  signatureRedSubtle: "#FEE2E2",
  
  // Light Grey: Section Backgrounds, In-Store Product Shelves, Subtle Alternating Rows
  lightGrey: "#F5F5F5",
  
  // Secondary Text: Technical Specs, Breadcrumbs, Inactive Filter Labels
  secondaryText: "#6B7280",
  
  // Architectural Accents
  darkSurface: "#18181B",
  darkBorder: "#27272A",
  lightBorder: "#E5E7EB",
} as const;

export const BRAND_TYPOGRAPHY = {
  displayFont: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
  bodyFont: "'Inter', -apple-system, sans-serif",
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
} as const;

export const BRAND_SIGNAGE = {
  // Storefront Pill Badge Geometry
  pillRadius: "9999px",
  pillPadding: "0.25rem 0.75rem",
  pillBg: BRAND_COLORS.signatureRed,
  pillText: BRAND_COLORS.white,
  
  // Showroom Heritage
  heritageClaim: "Established circa 1996 [~28 Years — Pending Owner Verification]",
  
  // Logo Asset Paths (Easily replaceable by the showroom owner)
  logoSvgLightBg: "/images/dk-logo-dark.svg",
  logoSvgDarkBg: "/images/dk-logo.svg",
  storeReferenceImage: "/images/dk-store-reference.jpg",
} as const;
