import React from "react";

interface DKWordmarkProps {
  className?: string;
  variant?: "light" | "dark"; // "light" = white "DK" text (for dark facade #111111), "dark" = black "DK" (for white bg)
  size?: "sm" | "md" | "lg" | "xl";
}

export const DKWordmark: React.FC<DKWordmarkProps> = ({
  className = "",
  variant = "light",
  size = "md",
}) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-[#111111]";

  // Size scalers
  const sizeMap = {
    sm: {
      dk: "text-xl sm:text-2xl",
      pill: "text-[10px] px-2 py-0.5",
      gap: "gap-1.5",
    },
    md: {
      dk: "text-2xl sm:text-3xl",
      pill: "text-xs px-2.5 py-1",
      gap: "gap-2",
    },
    lg: {
      dk: "text-3xl sm:text-4xl",
      pill: "text-sm px-3.5 py-1.5",
      gap: "gap-2.5",
    },
    xl: {
      dk: "text-4xl sm:text-5xl lg:text-6xl",
      pill: "text-base sm:text-lg px-4 py-2",
      gap: "gap-3",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* 1. Large Bold DK Lettering */}
      <span
        className={`${currentSize.dk} font-black tracking-tight ${textColor} font-display leading-none`}
      >
        DK
      </span>

      {/* 2. Red Rounded Electronics Signage (Storefront Capsule #D82935) */}
      <span
        className={`bg-[#D82935] hover:bg-[#BA1C27] text-white ${currentSize.pill} font-bold rounded-full leading-none shadow-sm flex items-center justify-center transition-colors`}
        style={{
          boxShadow: "0 2px 8px rgba(216, 41, 53, 0.35)",
        }}
      >
        Electronics
      </span>
    </div>
  );
};
