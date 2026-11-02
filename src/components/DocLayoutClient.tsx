"use client";

import React, { useState } from "react";
import { DocSidebar } from "./DocSidebar";
import { DocBreadcrumbs } from "./DocBreadcrumbs";
import { BrandLogo } from "./BrandLogo";
import type { SyllabusUnitGroup } from "@/lib/content";
import Link from "next/link";

export function DocLayoutClient({
  syllabus,
  children,
}: {
  syllabus: SyllabusUnitGroup[];
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#EFECE6] text-[#151515] antialiased">
      {/* 1. Persistent Left Sidebar (w-72, scrollable, collapsible units) */}
      <DocSidebar
        syllabus={syllabus}
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* 2. Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col bg-[#EFECE6]">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-[#EFECE6]/95 backdrop-blur-md border-b border-[#D8D2C7] px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden font-mono font-bold text-xs px-2.5 py-1.5 border border-[#D8D2C7] bg-white hover:border-[#151515] cursor-pointer"
              aria-label="Toggle Syllabus Navigation"
            >
              [MENU]
            </button>
            <div className="md:hidden">
              <BrandLogo href="/portal" size="sm" />
            </div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#746F68] hidden md:inline-block">
              {"// CS DOCUMENTATION READER"}
            </span>
          </div>

          <div className="flex items-center gap-3 font-sans text-xs font-medium">
            <Link
              href="/formulas"
              className="px-3 py-1.5 border border-[#D8D2C7] bg-white hover:border-[#151515] text-[#151515] transition-all hidden sm:inline-block"
            >
              Formula Engine
            </Link>
            <Link
              href="/mock-exams"
              className="px-3 py-1.5 border border-[#D8D2C7] bg-white hover:border-[#151515] text-[#151515] transition-all hidden sm:inline-block"
            >
              CBT Mocks
            </Link>
            <Link
              href="/portal"
              className="px-3.5 py-1.5 bg-[#151515] text-white hover:bg-black transition-colors"
            >
              Portal Grid →
            </Link>
          </div>
        </header>

        {/* 3. Central Reading Column: max-w-4xl centered on page, crisp white paper */}
        <main className="flex-1 px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#D8D2C7] p-6 sm:p-10 lg:p-12 shadow-xs">
            {/* Breadcrumb Trail: Dashboard / Unit / Topic */}
            <DocBreadcrumbs syllabus={syllabus} />

            {/* Reading Content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
