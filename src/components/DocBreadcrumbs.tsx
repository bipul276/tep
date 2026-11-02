"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SyllabusUnitGroup } from "@/lib/content";

interface DocBreadcrumbsProps {
  syllabus: SyllabusUnitGroup[];
}

export function DocBreadcrumbs({ syllabus }: DocBreadcrumbsProps) {
  const pathname = usePathname();
  const currentSlug = pathname ? pathname.split("/").filter(Boolean).pop() : "";

  // Locate the active unit and topic metadata
  let activeUnitTitle = "";
  let activeUnitCode = "";
  let activeTopicTitle = "";

  for (const group of syllabus) {
    const topic = group.topics.find((t) => t.slug === currentSlug);
    if (topic) {
      activeUnitTitle = group.unitTitle;
      activeUnitCode = group.unitCode;
      activeTopicTitle = topic.title;
      break;
    }
  }

  if (!activeTopicTitle) {
    return (
      <div className="flex items-center gap-2 font-sans text-xs text-[#6C6760] mb-6 pb-3 border-b border-[#D8D2C7]">
        <Link href="/portal" className="text-[#151515] font-semibold hover:underline">
          Portal
        </Link>
        <span>/</span>
        <span className="text-[#151515] font-semibold">Study Module</span>
      </div>
    );
  }

  return (
    <nav
      aria-label="Breadcrumbs"
      className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#6C6760] mb-6 pb-4 border-b border-[#D8D2C7] select-none"
    >
      {/* 1. Dashboard / Portal Root */}
      <Link
        href="/portal"
        className="text-[#151515] font-medium hover:text-[#FF6A35] transition-colors"
      >
        Portal
      </Link>

      <span className="text-[#A5A098]">/</span>

      {/* 2. Unit Name */}
      <span className="flex items-center gap-1.5 font-medium text-[#44403C]">
        <span className="font-mono text-[10px] font-bold bg-[#EFECE6] text-[#151515] px-1.5 py-0.5 border border-[#D8D2C7]">
          {activeUnitCode}
        </span>
        <span>{activeUnitTitle.split(":")[0]}</span>
      </span>

      <span className="text-[#A5A098]">/</span>

      {/* 3. Active Topic Title */}
      <span className="font-semibold text-[#151515] truncate max-w-xs sm:max-w-md">
        {activeTopicTitle}
      </span>
    </nav>
  );
}
