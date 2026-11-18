import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "white" | "dark" | "glass";
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "white",
  className = "",
  hoverEffect = false,
}) => {
  const variantStyles = {
    white: "bg-white text-zinc-900 border border-zinc-200/80 shadow-sm",
    dark: "bg-[#111111] text-white border border-zinc-800 shadow-md",
    glass: "bg-[#111111]/90 backdrop-blur-md text-white border border-zinc-800",
  }[variant];

  const hoverStyles = hoverEffect
    ? "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
    : "";

  return (
    <div className={`rounded-2xl p-6 ${variantStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
