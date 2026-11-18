import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#D82935] hover:bg-[#BA1C27] text-white shadow-sm hover:shadow focus:ring-[#D82935]/40 active:scale-[0.98]",
    secondary:
      "bg-[#111111] hover:bg-zinc-800 text-white border border-zinc-700 focus:ring-zinc-500/40 active:scale-[0.98]",
    outline:
      "bg-transparent hover:bg-zinc-800/50 text-white border border-zinc-700 hover:border-zinc-500 focus:ring-zinc-400/40 active:scale-[0.98]",
    whatsapp:
      "bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-sm hover:shadow focus:ring-[#25D366]/40 active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-zinc-800/40 text-zinc-300 hover:text-white focus:ring-zinc-400/30",
  }[variant];

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
