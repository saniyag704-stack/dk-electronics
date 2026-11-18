"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
  variant?: "header" | "mobile";
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = "",
  variant = "header",
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`flex items-center justify-between p-3 bg-zinc-900 rounded-xl border border-zinc-800 ${className}`}>
        <div className="flex items-center gap-2 text-zinc-300 text-xs font-semibold">
          <Globe className="w-4 h-4 text-[#D82935]" />
          <span>Language / भाषा:</span>
        </div>
        <div className="inline-flex p-1 bg-black rounded-lg border border-zinc-800" role="group" aria-label="Language selector">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-label="Switch language to English"
            aria-pressed={language === "en"}
            className={`px-3 py-1 rounded text-xs font-bold transition-all ${
              language === "en"
                ? "bg-[#D82935] text-white shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage("hi")}
            aria-label="भाषा हिन्दी में बदलें"
            aria-pressed={language === "hi"}
            className={`px-3 py-1 rounded text-xs font-bold transition-all ${
              language === "hi"
                ? "bg-[#D82935] text-white shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            हिन्दी
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center bg-zinc-900/90 border border-zinc-800 rounded-full p-0.5 select-none text-xs ${className}`}
      title="Switch Language / भाषा बदलें"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="Switch language to English"
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-200 ${
          language === "en"
            ? "bg-white text-[#111111] shadow-sm font-bold"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-label="भाषा हिन्दी में बदलें"
        aria-pressed={language === "hi"}
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-200 ${
          language === "hi"
            ? "bg-[#D82935] text-white shadow-sm font-bold"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
};
