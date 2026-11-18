"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] text-zinc-900 selection:bg-[#D82935] selection:text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
