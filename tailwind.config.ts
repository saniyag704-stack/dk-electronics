import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Official DK Electronics Brand Color Tokens
        brand: {
          black: "#111111",       // Primary Black (Showroom Facade)
          white: "#FFFFFF",       // Pure White (DK Lettering & Cards)
          red: {
            DEFAULT: "#D82935",   // Signature Red (Rounded Electronics Signage)
            hover: "#BA1C27",     // Deep Red for interactive hover states
            subtle: "#FEE2E2",    // Tint for offer badges & highlights
          },
          lightGrey: "#F5F5F5",   // Light Grey (Section backgrounds, card surfaces)
          secondary: "#6B7280",   // Secondary Text (Muted specs, breadcrumbs)
          darkSurface: "#18181B", // Dark Zinc Surface for premium contrast
          border: "#E5E7EB",      // Light UI borders
          darkBorder: "#27272A",  // Facade / dark element borders
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        showroom: "0 10px 30px -10px rgba(0, 0, 0, 0.4)",
        signage: "0 4px 14px 0 rgba(216, 41, 53, 0.39)",
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.02)",
      },
      borderRadius: {
        pill: "9999px",
        showroom: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
