import React from "react";

interface DKEagleWingsProps {
  className?: string;
  size?: number | string;
  variant?: "light" | "dark"; // "light" = white wings (for dark facade #111111), "dark" = dark wings (for white bg)
  showSubtext?: boolean;
}

export const DKEagleWings: React.FC<DKEagleWingsProps> = ({
  className = "",
  size = 48,
  variant = "light",
  showSubtext = true,
}) => {
  const isLight = variant === "light";
  const wingColor = isLight ? "#FFFFFF" : "#111111";
  const shieldBorder = isLight ? "#FFFFFF" : "#111111";
  const shieldFill = isLight ? "#111111" : "#FFFFFF";
  const innerPoly = isLight ? "#FFFFFF" : "#111111";
  const textFill = isLight ? "#111111" : "#FFFFFF";
  const subtextColor = isLight ? "#E5E7EB" : "#6B7280";

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        style={{ width: size, height: "auto" }}
        viewBox="0 0 140 60"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm transition-transform duration-200"
      >
        {/* Left Horizontal Multi-Feather Wing */}
        <path
          d="M 60,32 C 50,30 36,22 8,14 C 18,22 30,28 44,34 C 32,32 18,28 4,24 C 14,32 26,38 42,42 C 28,40 18,38 8,36 C 20,44 34,48 56,48 Z"
          fill={wingColor}
        />
        <path
          d="M 58,26 C 46,24 30,16 12,6 C 24,14 38,20 54,24 Z"
          fill={wingColor}
          opacity="0.9"
        />

        {/* Right Horizontal Multi-Feather Wing */}
        <path
          d="M 80,32 C 90,30 104,22 132,14 C 122,22 110,28 96,34 C 108,32 122,28 136,24 C 126,32 114,38 98,42 C 112,40 122,38 132,36 C 120,44 106,48 84,48 Z"
          fill={wingColor}
        />
        <path
          d="M 82,26 C 94,24 110,16 128,6 C 116,14 102,20 86,24 Z"
          fill={wingColor}
          opacity="0.9"
        />

        {/* Central Geometric Monogram Shield */}
        <polygon
          points="70,12 80,24 80,38 70,50 60,38 60,24"
          fill={shieldFill}
          stroke={shieldBorder}
          strokeWidth="2"
        />
        <polygon
          points="70,16 76,24 76,36 70,44 64,36 64,24"
          fill={innerPoly}
        />
        <text
          x="70"
          y="33"
          fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
          fontWeight="900"
          fontSize="12"
          fill={textFill}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          DK
        </text>
      </svg>

      {/* Subtext beneath emblem */}
      {showSubtext && (
        <span
          className="text-[7px] sm:text-[8px] font-black tracking-[0.2em] uppercase leading-none mt-1"
          style={{ color: subtextColor }}
        >
          DK ELECTRONICS
        </span>
      )}
    </div>
  );
};
