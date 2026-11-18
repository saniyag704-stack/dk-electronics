import React from "react";
import { DKEagleWings } from "./DKEagleWings";
import { DKWordmark } from "./DKWordmark";

export interface DKLogoProps {
  className?: string;
  variant?: "on-dark" | "on-light"; // "on-dark" = for #111111 facade, "on-light" = for white/light cards
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "horizontal" | "stacked";
  showWings?: boolean;
  showWordmark?: boolean;
  showDivider?: boolean;
  /**
   * Optional custom image override.
   * If the showroom owner supplies a clean vector or transparent PNG file,
   * setting this to true or passing a path uses <img> directly.
   */
  useExternalAsset?: boolean;
  externalAssetPath?: string;
}

export const DKLogo: React.FC<DKLogoProps> = ({
  className = "",
  variant = "on-dark",
  size = "md",
  layout = "horizontal",
  showWings = true,
  showWordmark = true,
  showDivider = true,
  useExternalAsset = false,
  externalAssetPath,
}) => {
  const isDarkSurface = variant === "on-dark";
  const wingVariant = isDarkSurface ? "light" : "dark";
  const wordmarkVariant = isDarkSurface ? "light" : "dark";

  // When external official graphic is supplied by showroom owner
  if (useExternalAsset) {
    const defaultAsset = isDarkSurface
      ? "/images/dk-logo.svg"
      : "/images/dk-logo-dark.svg";
    const src = externalAssetPath || defaultAsset;

    const imgHeight = {
      sm: "h-8",
      md: "h-11",
      lg: "h-14",
      xl: "h-20",
    }[size];

    return (
      <img
        src={src}
        alt="DK Electronics Official Brand Logo"
        className={`w-auto object-contain ${imgHeight} ${className}`}
      />
    );
  }

  // Size mapping for SVG emblem
  const wingSize = {
    sm: 58,
    md: 82,
    lg: 110,
    xl: 145,
  }[size];

  if (layout === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center gap-2 select-none group ${className}`}>
        {showWings && (
          <DKEagleWings
            size={wingSize}
            variant={wingVariant}
            showSubtext={false}
            className="group-hover:scale-105 transition-transform duration-200"
          />
        )}
        {showWordmark && (
          <DKWordmark variant={wordmarkVariant} size={size} />
        )}
      </div>
    );
  }

  // Standard Horizontal Layout (Navbar & Storefront Signage format)
  return (
    <div className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
      {/* 1. Authentic Eagle Wings Emblem */}
      {showWings && (
        <div className="shrink-0 group-hover:scale-105 transition-transform duration-200">
          <DKEagleWings
            size={wingSize}
            variant={wingVariant}
            showSubtext={size !== "sm"}
          />
        </div>
      )}

      {/* Divider Line (Only if both wings and wordmark are present) */}
      {showWings && showWordmark && showDivider && (
        <div
          className={`h-8 w-px shrink-0 hidden sm:block ${
            isDarkSurface ? "bg-white/20" : "bg-black/15"
          }`}
        />
      )}

      {/* 2. Main Storefront Wordmark */}
      {showWordmark && (
        <div className="shrink-0">
          <DKWordmark variant={wordmarkVariant} size={size} />
        </div>
      )}
    </div>
  );
};
