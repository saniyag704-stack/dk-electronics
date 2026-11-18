import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "dark" | "light" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "red",
  className = "",
}) => {
  const variantStyles = {
    red: "bg-[#D82935] text-white",
    dark: "bg-zinc-900 text-zinc-200 border border-zinc-800",
    light: "bg-zinc-100 text-zinc-800 border border-zinc-200",
    outline: "bg-transparent text-zinc-300 border border-zinc-700",
  }[variant];

  return (
    <span
      className={`inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full select-none ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
