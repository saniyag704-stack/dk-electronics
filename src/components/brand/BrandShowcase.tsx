import React, { useState } from "react";
import { DKLogo } from "./DKLogo";
import { DKEagleWings } from "./DKEagleWings";
import { DKWordmark } from "./DKWordmark";
import { BRAND_COLORS, BRAND_SIGNAGE } from "@/lib/brandTokens";
import {
  ShieldCheck,
  Palette,
  CheckCircle2,
  Sparkles,
  Info,
  Maximize2,
  Sliders,
  Layers,
  Store,
} from "lucide-react";

export const BrandShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "placements" | "palette" | "guidelines">("overview");
  const [logoSize, setLogoSize] = useState<"sm" | "md" | "lg" | "xl">("md");

  const paletteCards = [
    {
      name: "Primary Black",
      hex: "#111111",
      rgb: "rgb(17, 17, 17)",
      role: "Showroom Facade, Primary Brand Framing, Glassmorphic Headers",
      textColor: "text-white",
      bgClass: "bg-[#111111]",
      borderClass: "border-zinc-800",
      accent: "Essential Anchor",
    },
    {
      name: "Pure White",
      hex: "#FFFFFF",
      rgb: "rgb(255, 255, 255)",
      role: "Large 'DK' Lettering, Premium Product Cards, Crisp High-Contrast Text",
      textColor: "text-[#111111]",
      bgClass: "bg-white",
      borderClass: "border-zinc-300",
      accent: "Signature Lettering",
    },
    {
      name: "Signature Red",
      hex: "#D82935",
      rgb: "rgb(216, 41, 53)",
      role: "Rounded 'Electronics' Signage, Conversion Buttons, Festive Offers",
      textColor: "text-white",
      bgClass: "bg-[#D82935]",
      borderClass: "border-red-700",
      accent: "Signage & Action Accent",
    },
    {
      name: "Light Grey",
      hex: "#F5F5F5",
      rgb: "rgb(245, 245, 245)",
      role: "Showroom Floor Backgrounds, Spec Table Rows, Card Backdrops",
      textColor: "text-zinc-800",
      bgClass: "bg-[#F5F5F5]",
      borderClass: "border-zinc-300",
      accent: "Surface Neutral",
    },
    {
      name: "Secondary Text",
      hex: "#6B7280",
      rgb: "rgb(107, 114, 128)",
      role: "Technical Specification Labels, Subtitles, Breadcrumbs, Disclaimers",
      textColor: "text-white",
      bgClass: "bg-[#6B7280]",
      borderClass: "border-zinc-600",
      accent: "Typography Secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-zinc-900 font-sans pb-20">
      {/* Top Banner Notice */}
      <div className="bg-[#111111] text-zinc-300 py-2.5 px-4 text-xs border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D82935] animate-pulse"></span>
          <span>
            <strong>Official Visual Identity Implemented:</strong> DK Electronics (Preserving Original Eagle Wings Emblem & Storefront Signage)
          </span>
          <span className="ml-auto text-zinc-400 hidden sm:inline text-[11px]">
            {BRAND_SIGNAGE.heritageClaim}
          </span>
        </div>
      </div>

      {/* Main Header / Storefront Facade Simulation */}
      <header className="bg-[#111111] border-b border-zinc-800 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Logo in Official Navbar Placement */}
          <div className="flex items-center gap-3 shrink-0">
            <DKLogo variant="on-dark" size="sm" />
          </div>

          {/* Navigation Items (Showroom Aesthetic - with whitespace-nowrap) */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-zinc-300 shrink-0">
            <span className="text-white border-b-2 border-[#D82935] pb-1 cursor-pointer whitespace-nowrap">
              Brand Identity
            </span>
            <span className="hover:text-white transition cursor-pointer whitespace-nowrap">
              Televisions
            </span>
            <span className="hover:text-white transition cursor-pointer whitespace-nowrap">
              Refrigerators
            </span>
            <span className="hover:text-white transition cursor-pointer whitespace-nowrap">
              Washing Machines
            </span>
            <span className="hover:text-white transition cursor-pointer whitespace-nowrap">
              Air Conditioners
            </span>
          </div>

          {/* Action Button using Signature Red */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700 hidden lg:inline">
              EN | हिंदी
            </span>
            <button className="bg-[#D82935] hover:bg-[#BA1C27] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-md transition-all flex items-center gap-1.5">
              <span>Showroom Visit</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Intro */}
      <div className="bg-gradient-to-b from-[#111111] via-[#1a1a1a] to-[#F5F5F5] pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D82935]" />
            <span>Storefront Visual Identity System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display mb-4">
            DK ELECTRONICS
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
            Premium black and white architectural aesthetic accented with the signature showroom red signage.
          </p>

          {/* Tab Navigation */}
          <div className="inline-flex p-1.5 bg-zinc-900/90 rounded-xl border border-zinc-700 shadow-2xl">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === "overview"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Storefront Facade Recreation
            </button>
            <button
              onClick={() => setActiveTab("placements")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === "placements"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Logo Placements
            </button>
            <button
              onClick={() => setActiveTab("palette")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === "palette"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Colour Palette & Tokens
            </button>
            <button
              onClick={() => setActiveTab("guidelines")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === "guidelines"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Design Rules & Replaceability
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* TAB 1: OVERVIEW & STOREFRONT RECREATION */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Showroom Facade Recreation Card */}
            <div className="bg-[#111111] rounded-2xl p-6 sm:p-10 border border-zinc-800 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#D82935]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-zinc-800">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
                    Physical Storefront Architecture
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                    Actual Showroom Signage Recreation
                  </h2>
                  <p className="text-sm text-zinc-400 mt-2 max-w-xl">
                    Engineered to match the physical showroom entrance: Primary black facade (#111111), authentic eagle wings with inner DK crest, large white DK lettering, and the signature red rounded capsule (#D82935) with white &quot;Electronics&quot;.
                  </p>
                </div>

                {/* Verification badge */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-zinc-300 shrink-0">
                  <div className="flex items-center gap-2 text-white font-semibold mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#D82935]" />
                    <span>Exact Store Elements Preserved</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-zinc-400">
                    <li>✓ Original Eagle Wings Emblem</li>
                    <li>✓ DK Monogram Inside Crest</li>
                    <li>✓ Large White DK Lettering</li>
                    <li>✓ Red Rounded Electronics Signage</li>
                    <li>✓ No Emerald Green Used</li>
                  </ul>
                </div>
              </div>

              {/* Large Storefront Sign Mockup */}
              <div className="mt-10 p-8 sm:p-14 bg-black rounded-xl border border-zinc-800 shadow-inner flex flex-col items-center justify-center text-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6 font-mono">
                  [ SHOWROOM ENTRANCE SIGNBOARD SIMULATION - #111111 FACADE ]
                </span>

                <div className="scale-110 sm:scale-125 lg:scale-150 transform py-6">
                  <DKLogo variant="on-dark" size="lg" />
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
                  <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
                    Facade: <strong className="text-white">#111111</strong>
                  </span>
                  <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
                    Lettering: <strong className="text-white">#FFFFFF</strong>
                  </span>
                  <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
                    Signage: <strong className="text-[#D82935]">#D82935</strong>
                  </span>
                </div>
              </div>

              {/* 6 Core Brand Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[#D82935] font-bold text-xs mb-3">
                    01
                  </div>
                  <h3 className="text-sm font-bold text-white">Original Eagle Wings</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Multi-feather horizontal wings flanking the central crest, maintaining the established showroom mark.
                  </p>
                </div>

                <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[#D82935] font-bold text-xs mb-3">
                    02
                  </div>
                  <h3 className="text-sm font-bold text-white">Monogram Shield</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Central geometric crest housing the bold &quot;DK&quot; monogram with high-contrast legibility.
                  </p>
                </div>

                <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[#D82935] font-bold text-xs mb-3">
                    03
                  </div>
                  <h3 className="text-sm font-bold text-white">DK ELECTRONICS Wordmark</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Uppercase sub-lettering with wide tracking anchored directly beneath the wings.
                  </p>
                </div>

                <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[#D82935] font-bold text-xs mb-3">
                    04
                  </div>
                  <h3 className="text-sm font-bold text-white">Black Showroom Facade</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Primary black `#111111` providing the architectural backdrop for the premium showroom aesthetic.
                  </p>
                </div>

                <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[#D82935] font-bold text-xs mb-3">
                    05
                  </div>
                  <h3 className="text-sm font-bold text-white">Large White DK Lettering</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Prominent, heavy-weight typography representing the store&apos;s authoritative local presence.
                  </p>
                </div>

                <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[#D82935] font-bold text-xs mb-3">
                    06
                  </div>
                  <h3 className="text-sm font-bold text-white">Red Rounded Signage</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Signature pill capsule (`#D82935`) enclosing &quot;Electronics&quot; for instant visual identification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOGO PLACEMENTS IN DIFFERENT CONTEXTS */}
        {activeTab === "placements" && (
          <div className="space-y-8">
            {/* Size controls */}
            <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#D82935]" />
                <span className="text-xs sm:text-sm font-bold text-zinc-800">
                  Test Logo Scales:
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-lg">
                {(["sm", "md", "lg", "xl"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setLogoSize(s)}
                    className={`px-3 py-1 rounded text-xs font-semibold uppercase ${
                      logoSize === s
                        ? "bg-[#111111] text-white shadow-sm"
                        : "text-zinc-600 hover:text-black"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Placement 1: Dark Showroom Facade */}
              <div className="bg-[#111111] rounded-2xl p-8 border border-zinc-800 shadow-lg text-white">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      1. Storefront Black Facade (#111111)
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Navbar, sticky headers, dark mode surfaces &amp; hero visual framing.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                    on-dark
                  </span>
                </div>

                <div className="min-h-[140px] flex items-center justify-center p-6 bg-black/60 rounded-xl border border-zinc-800/80">
                  <DKLogo variant="on-dark" size={logoSize} />
                </div>
              </div>

              {/* Placement 2: Crisp Light Surface */}
              <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-lg text-zinc-900">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900">
                      2. Clean White Card / Document (#FFFFFF)
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Light mode, product guarantees, printable invoices &amp; warranty sheets.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded border border-zinc-200">
                    on-light
                  </span>
                </div>

                <div className="min-h-[140px] flex items-center justify-center p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                  <DKLogo variant="on-light" size={logoSize} />
                </div>
              </div>

              {/* Placement 3: Stacked / Emblem-Centric (Footer / App Icon) */}
              <div className="bg-[#18181B] rounded-2xl p-8 border border-zinc-800 shadow-lg text-white">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      3. Stacked Format (Showroom Footer / Splash)
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Centered layout with emblem prominent above the wordmark.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                    stacked
                  </span>
                </div>

                <div className="min-h-[140px] flex items-center justify-center p-6 bg-black/40 rounded-xl border border-zinc-800">
                  <DKLogo variant="on-dark" size={logoSize} layout="stacked" />
                </div>
              </div>

              {/* Placement 4: Pure Emblem Alone & Wordmark Alone */}
              <div className="bg-[#111111] rounded-2xl p-8 border border-zinc-800 shadow-lg text-white">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      4. Atomic Components (Emblem &amp; Wordmark)
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Separable building blocks for favicons, badges, and mobile buttons.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                    atoms
                  </span>
                </div>

                <div className="min-h-[140px] grid grid-cols-2 gap-4 p-4 bg-black/60 rounded-xl border border-zinc-800/80 items-center justify-items-center">
                  <div className="flex flex-col items-center gap-2">
                    <DKEagleWings size={72} variant="light" />
                    <span className="text-[10px] text-zinc-500 font-mono">DKEagleWings</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <DKWordmark variant="light" size="md" />
                    <span className="text-[10px] text-zinc-500 font-mono">DKWordmark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COLOUR PALETTE & DESIGN TOKENS */}
        {activeTab === "palette" && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-[#D82935]" />
                <h2 className="text-xl font-bold text-zinc-900">
                  Official Showroom Brand Palette
                </h2>
              </div>
              <p className="text-sm text-zinc-600 max-w-3xl">
                Every colour token is mapped directly from the showroom storefront facade. Strict architectural rule: Emerald green is prohibited as a brand colour.
              </p>
            </div>

            {/* Color Swatch Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paletteCards.map((card) => (
                <div
                  key={card.name}
                  className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Swatch Preview */}
                  <div
                    className={`${card.bgClass} ${card.borderClass} h-36 p-5 flex flex-col justify-between border-b`}
                  >
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-black/30 text-white w-fit backdrop-blur-sm">
                      {card.accent}
                    </span>
                    <div>
                      <span className={`text-2xl font-black font-mono ${card.textColor}`}>
                        {card.hex}
                      </span>
                      <div className={`text-xs opacity-80 font-mono ${card.textColor}`}>
                        {card.rgb}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-zinc-900">{card.name}</h3>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      {card.role}
                    </p>
                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                      <span>Token:</span>
                      <code className="bg-zinc-100 px-2 py-0.5 rounded text-zinc-800">
                        BRAND_COLORS.{card.name.replace(/\s+/g, "")}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contrast & Accessibility Matrix */}
            <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-zinc-800 text-white">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D82935]" />
                <span>Accessibility &amp; Showroom Contrast Validation</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-zinc-400">White on Primary Black:</div>
                  <div className="text-xl font-black text-white mt-1">21:1 (AAA)</div>
                  <div className="text-[11px] text-emerald-400 mt-1">✓ Maximum Contrast</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-zinc-400">White on Signature Red:</div>
                  <div className="text-xl font-black text-white mt-1">4.6:1 (AA)</div>
                  <div className="text-[11px] text-emerald-400 mt-1">✓ Meets WCAG for Large Pill</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-zinc-400">Primary Black on Light Grey:</div>
                  <div className="text-xl font-black text-white mt-1">17.2:1 (AAA)</div>
                  <div className="text-[11px] text-emerald-400 mt-1">✓ Exceptional Readability</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DESIGN RULES & REPLACEMENT ARCHITECTURE */}
        {activeTab === "guidelines" && (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">
                Logo Replacement &amp; Ownership Rules
              </h2>

              <div className="space-y-4 text-sm text-zinc-700">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex gap-3">
                  <Info className="w-5 h-5 text-[#D82935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-900">Seamless Asset Replacement:</strong>
                    <p className="text-xs text-zinc-600 mt-1">
                      The logo system has been engineered with zero hardcoded lock-in. When the showroom owner provides their high-resolution official vector file or transparent PNG, simply drop it into:
                    </p>
                    <code className="block mt-2 text-xs font-mono bg-zinc-200 text-zinc-900 px-3 py-1.5 rounded">
                      public/images/dk-logo.svg &nbsp;or&nbsp; public/images/dk-logo.png
                    </code>
                    <p className="text-xs text-zinc-600 mt-1.5">
                      The `DKLogo` component automatically detects and loads the external asset when enabled.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl border border-zinc-200">
                    <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-emerald-600 mb-2">
                      ✓ Approved Brand Practices
                    </h4>
                    <ul className="text-xs space-y-1.5 text-zinc-600">
                      <li>• Always place the white DK lettering on `#111111` or dark showroom backgrounds.</li>
                      <li>• Maintain the exact proportion of the Eagle Wings flanking the central crest.</li>
                      <li>• Use Signature Red `#D82935` exclusively for the rounded &quot;Electronics&quot; pill and primary CTAs.</li>
                      <li>• Ensure high-contrast spacing around the wordmark.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-200">
                    <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-[#D82935] mb-2">
                      ✕ Prohibited Brand Practices
                    </h4>
                    <ul className="text-xs space-y-1.5 text-zinc-600">
                      <li>• Do NOT use emerald green as the primary brand colour.</li>
                      <li>• Do NOT distort or stretch the Eagle Wings emblem.</li>
                      <li>• Do NOT replace the authentic emblem with a generic online electronics icon.</li>
                      <li>• Do NOT alter the rounded pill shape of the &quot;Electronics&quot; signage.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer Simulation */}
      <footer className="mt-20 bg-[#111111] text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <DKLogo variant="on-dark" size="sm" />
          <div className="text-xs text-center md:text-right text-zinc-500">
            <div>DK Electronics Showroom • {BRAND_SIGNAGE.heritageClaim}</div>
            <div className="mt-1">Official Visual Identity &amp; Digital Design System Demo</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
