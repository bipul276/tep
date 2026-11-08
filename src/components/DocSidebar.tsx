"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SyllabusUnitGroup } from "@/lib/content";
import { useStudyProgress } from "@/lib/progress";
import { BrandLogo } from "@/components/BrandLogo";

interface DocSidebarProps {
  syllabus: SyllabusUnitGroup[];
  isOpen?: boolean;
  onClose?: () => void;
}

export function DocSidebar({ syllabus, isOpen = false, onClose }: DocSidebarProps) {
  const pathname = usePathname();
  const currentSlug = pathname ? pathname.split("/").filter(Boolean).pop() : "";

  const { isCompleted, completedCount } = useStudyProgress();
  const [query, setQuery] = useState("");

  // Determine which unit contains the current topic
  const _activeUnitTitle = useMemo(() => {
    for (const group of syllabus) {
      if (group.topics.some((t) => t.slug === currentSlug)) {
        return group.unitTitle;
      }
    }
    return "";
  }, [syllabus, currentSlug]);

  // Accordion open/close state: start with all groups expanded
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const group of syllabus) {
      init[group.unitTitle] = true;
    }
    return init;
  });

  const toggleUnit = (unitTitle: string) => {
    setExpanded((prev) => ({ ...prev, [unitTitle]: !prev[unitTitle] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    for (const group of syllabus) {
      all[group.unitTitle] = true;
    }
    setExpanded(all);
  };

  const collapseAll = () => {
    const none: Record<string, boolean> = {};
    for (const group of syllabus) {
      none[group.unitTitle] = false;
    }
    setExpanded(none);
  };

  // Filtered syllabus by search query
  const filteredSyllabus = useMemo(() => {
    if (!query.trim()) return syllabus;
    const q = query.toLowerCase();

    return syllabus
      .map((group) => {
        const matchesUnit =
          group.unitTitle.toLowerCase().includes(q) ||
          group.unitCode.toLowerCase().includes(q);

        const matchedTopics = group.topics.filter(
          (t) =>
            t.title.toLowerCase().includes(q) ||
            t.slug.toLowerCase().includes(q) ||
            t.tags.some((tag) => tag.toLowerCase().includes(q))
        );

        if (matchesUnit) {
          return group;
        }

        if (matchedTopics.length > 0) {
          return {
            ...group,
            topics: matchedTopics,
          };
        }

        return null;
      })
      .filter(Boolean) as SyllabusUnitGroup[];
  }, [syllabus, query]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Persistent Left Sidebar (w-72) */}
      <aside
        className={`
          fixed md:sticky top-0 z-50 md:z-20
          h-screen w-72 shrink-0
          bg-[#EFECE6] border-r border-[#D8D2C7]
          flex flex-col text-[#151515]
          transition-transform duration-150 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* ── Top Brand Bar ────────────────────────────────────────── */}
        <div className="p-3.5 border-b border-[#D8D2C7] bg-[#EFECE6] flex items-center justify-between shrink-0">
          <BrandLogo href="/portal" size="sm" />

          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-[#6C6760] bg-white border border-[#D8D2C7] px-2 py-0.5">
              {completedCount}/{syllabus.reduce((acc: number, g: SyllabusUnitGroup) => acc + g.topics.length, 0) || 56}
            </span>
            {onClose && (
              <button
                onClick={onClose}
                className="md:hidden font-mono font-bold text-xs p-1 border border-[#D8D2C7] bg-white hover:border-[#151515]"
                aria-label="Close navigation"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ── Search Input inside Sidebar ──────────────────────────── */}
        <div className="p-3 border-b border-[#D8D2C7] bg-[#E7E3DC] shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Filter 15 units & topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-[#D8D2C7] px-2.5 py-1.5 text-xs font-sans text-[#151515] placeholder:text-[#888278] focus:outline-none focus:border-[#151515]"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-[#888278] hover:text-black"
              >
                ×
              </button>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 font-mono text-[10px] text-[#746F68] px-0.5">
            <span>{"// SYLLABUS DIRECTORY"}</span>
            <div className="flex items-center gap-2">
              <button onClick={expandAll} className="hover:underline">
                [+] All
              </button>
              <span>/</span>
              <button onClick={collapseAll} className="hover:underline">
                [−] None
              </button>
            </div>
          </div>
        </div>

        {/* ── Collapsible 15-Unit Syllabus Accordion ───────────────── */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-2 select-none">
          {filteredSyllabus.map((group) => {
            const isGroupExpanded = expanded[group.unitTitle] ?? true;
            const containsActive = group.topics.some((t) => t.slug === currentSlug);

            return (
              <div
                key={group.unitTitle}
                className={`border border-[#D8D2C7] bg-white transition-none ${
                  containsActive ? "border-[#151515]" : ""
                }`}
              >
                {/* Accordion Unit Header */}
                <button
                  onClick={() => toggleUnit(group.unitTitle)}
                  className={`w-full p-2.5 flex items-center justify-between text-left text-xs font-bold transition-colors cursor-pointer ${
                    containsActive
                      ? "bg-[#FAF8F5] text-[#151515]"
                      : "bg-white text-[#151515] hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-1">
                    <span className="font-mono text-[10px] font-bold bg-[#EFECE6] text-[#151515] px-1.5 py-0.5 border border-[#D8D2C7] shrink-0">
                      {group.unitCode}
                    </span>
                    <span className="truncate leading-tight">{group.unitTitle}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 text-[#746F68] text-[10px]">
                    <span>({group.topics.length})</span>
                    <span className="font-mono font-bold text-[#151515]">
                      {isGroupExpanded ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Indented Topic Links */}
                {isGroupExpanded && (
                  <ul className="py-1 divide-y divide-[#EFECE6] bg-white text-xs">
                    {group.topics.map((topic, tIdx) => {
                      const isActive = topic.slug === currentSlug;
                      const done = isCompleted(topic.slug);

                      return (
                        <li key={topic.slug}>
                          <Link
                            href={`/dashboard/${topic.slug}`}
                            onClick={onClose}
                            className={`px-3 py-2 flex items-start gap-2.5 transition-colors group ${
                              isActive
                                ? "bg-[#151515] text-white font-medium"
                                : "text-[#33302C] hover:bg-[#F5F2EB] hover:text-[#151515]"
                            }`}
                          >
                            <span
                              className={`font-mono text-[11px] shrink-0 pt-0.5 ${
                                isActive ? "text-[#D8D2C7]" : "text-[#888278]"
                              }`}
                            >
                              {tIdx + 1}.
                            </span>

                            <span className="flex-1 leading-snug line-clamp-2">
                              {topic.title}
                            </span>

                            {/* Completed Status Checkmark */}
                            {done && (
                              <span
                                className={`text-[11px] font-mono shrink-0 pt-0.5 ${
                                  isActive ? "text-[#55E685] font-bold" : "text-[#2D6A4F]"
                                }`}
                                title="Completed (Saved to Browser)"
                              >
                                [✓]
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}

          {filteredSyllabus.length === 0 && (
            <div className="p-4 text-center text-xs font-mono text-[#888278] border border-dashed border-[#D8D2C7]">
              No units match &quot;{query}&quot;
            </div>
          )}
        </nav>

        {/* ── Bottom Hub Switcher ──────────────────────────────────── */}
        <div className="p-3 border-t border-[#D8D2C7] bg-[#E7E3DC] space-y-1.5 shrink-0 font-sans text-xs">
          <Link
            href="/mock-exams"
            className="w-full py-2 px-3 bg-white border border-[#D8D2C7] hover:border-[#151515] flex items-center justify-between font-semibold text-[#151515] transition-all"
          >
            <span>[CBT] Official Mock Exams</span>
            <span>→</span>
          </Link>
          <Link
            href="/formulas"
            className="w-full py-2 px-3 bg-white border border-[#D8D2C7] hover:border-[#151515] flex items-center justify-between font-semibold text-[#151515] transition-all"
          >
            <span>[FM] Formula Engine</span>
            <span>→</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
