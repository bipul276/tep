"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { isSameUnit, getUnitNumber, getUnitCode } from "@/lib/units";
import { useStudyProgress } from "@/lib/progress";
import type { TopicMeta, Priority } from "@/lib/content";
import { BrandLogo } from "@/components/BrandLogo";

// ─── Priority Badge Component (Muted Academic Palette) ────────────────
function PriorityBadge({ priority }: { priority: Priority }) {
  const classes: Record<Priority, string> = {
    High: "bg-[#FAECE9] text-[#8F3B2C] border-[#F3CDC6]",
    Med: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
    Low: "bg-[#EBF3ED] text-[#2E5C3B] border-[#D1E5D5]",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wide border ${classes[priority]}`}
    >
      {priority}
    </span>
  );
}

// ─── Exam Badge Component (Muted Organic Palette) ────────────────────
function ExamBadge({ examType }: { examType: string }) {
  const styleMap: Record<string, string> = {
    Common: "bg-[#F3EFF8] text-[#5E3F78] border-[#E3D8ED]",
    Both: "bg-[#F3EFF8] text-[#5E3F78] border-[#E3D8ED]",
    "UGC-NET": "bg-[#EBF1F6] text-[#2C4C64] border-[#D0DFEB]",
    STET: "bg-[#FAF4E6] text-[#825C18] border-[#F2E5C4]",
  };
  const label =
    examType === "Common" || examType === "Both"
      ? "Common (Both)"
      : examType === "STET"
      ? "STET Only"
      : "UGC NET Only";

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border ${
        styleMap[examType] ?? styleMap.Common
      }`}
    >
      {label}
    </span>
  );
}

// ─── Semantic Tag Palette Helper ─────────────────────────────────────
function getTagClass(tag: string, index: number): string {
  const palettes = ["tag-sage", "tag-stone", "tag-lavender", "tag-ochre"];
  return palettes[index % palettes.length];
}

// ─── Helpers ─────────────────────────────────────────────────────────
function parseReadMinutes(readTime: string): number {
  const match = readTime.match(/\d+/);
  return match ? parseInt(match[0], 10) : 15;
}

// ─── Topic Card Component (Muted Bento Grid View) ─────────────────────
function TopicCard({
  topic,
  isCompleted,
  onToggleCompleted,
}: {
  topic: TopicMeta;
  isCompleted: boolean;
  onToggleCompleted: (slug: string) => void;
  }) {
  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleCompleted(topic.slug);
  };

  const unitCode = getUnitCode(topic.unit);

  return (
    <div
      className={`group relative rounded-xl border p-5 transition-all duration-150 flex flex-col justify-between ${
        isCompleted
          ? "bg-[#FAF9F6] border-[#E0DED8] opacity-80 hover:opacity-100 shadow-none"
          : "bg-white border-[#E2E0D8] hover:border-[#2F3437] shadow-[2px_2px_0_0_#E0DED7] hover:shadow-[3px_3px_0_0_#D5D3CB]"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EFEFEA] text-[#57564F] border border-[#E0DED8]">
              {unitCode}
            </span>
            <span className="text-[11px] font-medium tracking-wide text-[#787774] uppercase">
              {topic.unit.split(":")[0]}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <PriorityBadge priority={topic.priority} />

            <button
              onClick={handleCheckboxClick}
              className={`w-6 h-6 rounded flex items-center justify-center border transition-all cursor-pointer ${
                isCompleted
                  ? "bg-[#2E5C3B] border-[#2E5C3B] text-white"
                  : "bg-white border-[#D8D6D0] text-transparent hover:border-[#2F3437]"
              }`}
              title={isCompleted ? "Mark as unread" : "Mark as read (saved to browser)"}
              aria-label="Toggle completed"
            >
              <svg
                className={`w-3.5 h-3.5 stroke-current ${
                  isCompleted ? "opacity-100" : "opacity-0 group-hover:opacity-30 text-[#787774]"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Title */}
        <Link href={`/dashboard/${topic.slug}`} className="block">
          <h3
            className={`font-bold text-base leading-snug tracking-tight transition-colors line-clamp-2 mb-2 ${
              isCompleted
                ? "text-[#57564F] line-through decoration-[#9C9A94] group-hover:text-[#2F3437]"
                : "text-[#2F3437] group-hover:text-[#8F3B2C]"
            }`}
          >
            {topic.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-[#57564F] leading-relaxed mb-4 line-clamp-2">
          {topic.description}
        </p>
      </div>

      {/* Bottom meta row */}
      <div className="pt-3 border-t border-[#F0EFEA] flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <ExamBadge examType={topic.examType} />
          <span className="text-[11px] text-[#787774] flex items-center gap-1 font-mono">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <polyline points="12 6 12 12 16 14" strokeWidth={2} />
            </svg>
            {topic.readTime}
          </span>
        </div>

        {topic.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {topic.tags.slice(0, 2).map((tag, idx) => (
              <span key={tag} className={`tag-pill ${getTagClass(tag, idx)}`}>
                {tag}
              </span>
            ))}
            {topic.tags.length > 2 && (
              <span
                className="text-[10px] px-1.5 py-0.5 rounded text-[#787774] bg-[#F4F3EF] border border-[#E8E6E0]"
                title={topic.tags.slice(2).join(", ")}
              >
                +{topic.tags.length - 2}
              </span>
            )}
            {isCompleted && (
              <span className="ml-auto text-[11px] font-mono font-medium text-[#2E5C3B] flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Read
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Sequential Accordion Unit Section (Muted Bento Contrast) ─────────
function SequentialUnitSection({
  unit,
  topics,
  isExpanded,
  onToggleExpand,
  isCompleted,
  onToggleCompleted,
}: {
  unit: string;
  topics: TopicMeta[];
  isExpanded: boolean;
  onToggleExpand: () => void;
  isCompleted: (slug: string) => boolean;
  onToggleCompleted: (slug: string) => void;
}) {
  const completedInUnit = topics.filter((t) => isCompleted(t.slug)).length;
  const unitProgress = topics.length > 0 ? Math.round((completedInUnit / topics.length) * 100) : 0;
  const unitCode = getUnitCode(unit);

  return (
    <div className="bg-white border border-[#E2E0D8] rounded-xl overflow-hidden shadow-[2px_2px_0_0_#E0DED7] transition-all">
      {/* Unit Header Bar (Clickable) */}
      <div
        onClick={onToggleExpand}
        className="px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F5] transition-colors select-none"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#EFEFEA] text-[#2F3437] border border-[#DCDAD2] shrink-0">
            {unitCode}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-sm sm:text-base text-[#2F3437] leading-snug">
                {unit}
              </h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#EFEFEA] text-[#57564F] border border-[#E0DED8]">
                {topics.length} {topics.length === 1 ? "module" : "modules"}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1 text-xs text-[#787774]">
              <span>
                {completedInUnit} of {topics.length} completed ({unitProgress}%)
              </span>
              <div className="w-20 sm:w-28 bg-[#E6E4DF] h-1.5 rounded overflow-hidden hidden sm:block">
                <div
                  className="bg-[#2E5C3B] h-full rounded transition-all duration-300"
                  style={{ width: `${unitProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand();
            }}
            className="w-8 h-8 rounded border border-[#E0DED8] bg-white flex items-center justify-center text-[#57564F] hover:bg-[#F2F1ED] transition-colors"
            aria-label="Toggle section"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Module List */}
      {isExpanded && (
        <div className="border-t border-[#EAE8E2] divide-y divide-[#F0EFEA] bg-[#FAF9F6]">
          {topics.map((t, idx) => {
            const finished = isCompleted(t.slug);
            return (
              <div
                key={t.slug}
                className={`px-5 py-3.5 flex items-center justify-between gap-4 transition-colors hover:bg-white ${
                  finished ? "bg-[#FAF9F6]/60 opacity-80" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="font-mono text-xs text-[#787774] w-6 text-right shrink-0">
                    {idx + 1}.
                  </span>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/dashboard/${t.slug}`}
                      className={`text-xs sm:text-sm font-semibold hover:text-[#8F3B2C] line-clamp-1 transition-colors ${
                        finished
                          ? "line-through text-[#787774]"
                          : "text-[#2F3437]"
                      }`}
                    >
                      {t.title}
                    </Link>
                    <div className="flex items-center gap-2 mt-0.5">
                      <ExamBadge examType={t.examType} />
                      <span className="text-[11px] font-mono text-[#787774]">
                        {t.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <PriorityBadge priority={t.priority} />
                  <button
                    onClick={() => onToggleCompleted(t.slug)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium border transition-all cursor-pointer flex items-center gap-1 ${
                      finished
                        ? "bg-[#EBF3ED] text-[#2E5C3B] border-[#D1E5D5]"
                        : "bg-white text-[#787774] border-[#E0DED8] hover:border-[#2F3437] hover:text-[#2F3437]"
                    }`}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {finished ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      ) : (
                        <circle cx="12" cy="12" r="9" strokeWidth={2} />
                      )}
                    </svg>
                    <span>{finished ? "Completed" : "Mark as Read"}</span>
                  </button>
                  <Link
                    href={`/dashboard/${t.slug}`}
                    className="p-1 rounded text-[#787774] hover:text-[#2F3437] hover:bg-[#F0EFEA]"
                    title="Open study module"
                  >
                    →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Filter Options ──────────────────────────────────────────────────
const EXAM_FILTERS = ["All", "Common", "UGC-NET", "STET"] as const;
type ExamFilter = (typeof EXAM_FILTERS)[number];

type SortOption =
  | "unit-asc"
  | "priority-desc"
  | "read-time-asc"
  | "read-time-desc"
  | "alpha-asc";

type StatusFilter = "All" | "InProgress" | "Completed";

// ─── Dashboard Component (Muted Neo-Bento Interface) ───────────────────
export default function Dashboard({
  topics,
  units,
  unitCounts,
  stats,
}: {
  topics: TopicMeta[];
  units: readonly string[] | string[];
  unitCounts: Record<string, number>;
  stats: {
    totalTopics: number;
    commonTopics: number;
    stetOnly: number;
    ugcNetOnly: number;
  };
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [examFilter, setExamFilter] = useState<ExamFilter>("All");
  const [activeUnit, setActiveUnit] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [sortBy, setSortBy] = useState<SortOption>("unit-asc");
  const [viewMode, setViewMode] = useState<"accordion" | "grid">("accordion");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Permanent Browser Storage Hook (localStorage)
  const { isCompleted, toggleCompleted, resetAll, completedCount, progressPercent } =
    useStudyProgress(stats.totalTopics);

  // Accordion expansion state: all units expanded by default
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const u of units) init[u] = true;
    return init;
  });

  const toggleUnitExpand = useCallback((unit: string) => {
    setExpandedUnits((prev) => ({ ...prev, [unit]: !prev[unit] }));
  }, []);

  const expandAllUnits = useCallback(() => {
    const next: Record<string, boolean> = {};
    for (const u of units) next[u] = true;
    setExpandedUnits(next);
  }, [units]);

  const collapseAllUnits = useCallback(() => {
    const next: Record<string, boolean> = {};
    for (const u of units) next[u] = false;
    setExpandedUnits(next);
  }, [units]);

  const mainContentRef = useRef<HTMLElement>(null);

  // Filtered & Sorted Topics
  const filteredTopics = useMemo(() => {
    let result = topics;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.unit.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (examFilter !== "All") {
      result = result.filter(
        (t) =>
          t.examType === examFilter ||
          (examFilter === "Common" && (t.examType === "Common" || t.examType === "Both"))
      );
    }

    if (activeUnit) {
      result = result.filter((t) => isSameUnit(t.unit, activeUnit));
    }

    if (statusFilter === "Completed") {
      result = result.filter((t) => isCompleted(t.slug));
    } else if (statusFilter === "InProgress") {
      result = result.filter((t) => !isCompleted(t.slug));
    }

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "priority-desc": {
          const order: Record<Priority, number> = { High: 3, Med: 2, Low: 1 };
          return order[b.priority] - order[a.priority];
        }
        case "read-time-asc":
          return parseReadMinutes(a.readTime) - parseReadMinutes(b.readTime);
        case "read-time-desc":
          return parseReadMinutes(b.readTime) - parseReadMinutes(a.readTime);
        case "alpha-asc":
          return a.title.localeCompare(b.title);
        case "unit-asc": {
          const unitDiff = getUnitNumber(a.unit) - getUnitNumber(b.unit);
          if (unitDiff !== 0) return unitDiff;
          return a.title.localeCompare(b.title);
        }
        default:
          return 0;
      }
    });

    return result;
  }, [
    topics,
    examFilter,
    activeUnit,
    statusFilter,
    searchQuery,
    sortBy,
    isCompleted,
  ]);

  // Group filtered topics by unit for Sequential Accordion view
  const groupedByUnit = useMemo(() => {
    const groups: { unit: string; topics: TopicMeta[] }[] = [];
    for (const unit of units) {
      const unitTopics = filteredTopics.filter((t) => isSameUnit(t.unit, unit));
      if (unitTopics.length > 0) {
        groups.push({ unit, topics: unitTopics });
      }
    }
    return groups;
  }, [units, filteredTopics]);

  const handleUnitClick = useCallback(
    (unit: string) => {
      setActiveUnit((prev) => (prev === unit ? null : unit));
      setSidebarOpen(false);
      if (mainContentRef.current) {
        mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[#EFECE6] text-[#151515] font-sans antialiased">
      {/* ── Mobile Sidebar Overlay ─────────────────────────────────── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar (Warm Stone #EFECE6) ────────────────────────────── */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-76 bg-[#EFECE6] border-r border-[#D8D2C7] text-[#151515]
          flex flex-col
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Brand Header */}
        <div className="px-4 py-4 border-b border-[#D8D2C7] flex items-center justify-between">
          <BrandLogo href="/" size="sm" />

          <Link
            href="/formulas"
            className="p-1.5 rounded hover:bg-[#DDD7CD] text-[#524E48] transition-colors font-mono text-xs font-bold"
            title="Formula Sheet"
          >
            [FM]
          </Link>
        </div>

        {/* Overall Study Progress Indicator (Permanent Browser Storage) */}
        <div className="px-5 py-4 border-b border-[#D8D6CE] bg-[#E3E1DA]">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            <span className="text-[#37352F] font-semibold">Your Study Journey</span>
            <span className="font-mono text-[#2E5C3B] font-bold">
              {completedCount} / {stats.totalTopics} ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-[#D4D2CA] h-2 rounded overflow-hidden">
            <div
              className="bg-[#2E5C3B] h-full transition-all duration-300 rounded"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 font-mono text-[10px] text-[#787774]">
            <span>Local Storage: Synced</span>
            {completedCount > 0 && (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="text-[#8F3B2C] hover:underline cursor-pointer"
              >
                [Reset]
              </button>
            )}
          </div>
        </div>

        {/* Units Navigation List (All 15 Units) */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          <div className="px-2 mb-2 flex items-center justify-between">
            <p className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#57564F]">
              {"// SYLLABUS UNITS (1–15)"}
            </p>
            {activeUnit && (
              <button
                onClick={() => setActiveUnit(null)}
                className="text-[10px] font-mono text-[#8F3B2C] hover:underline font-bold"
              >
                [Clear]
              </button>
            )}
          </div>

          {units.map((unit) => {
            const isSelected = activeUnit === unit;
            const count = unitCounts[unit] ?? 0;
            const unitCode = getUnitCode(unit);

            return (
              <button
                key={unit}
                onClick={() => handleUnitClick(unit)}
                className={`
                  w-full text-left px-3 py-2 rounded text-xs font-medium
                  flex items-center gap-2.5 transition-all duration-150 cursor-pointer
                  ${
                    isSelected
                      ? "bg-[#2F3437] text-white shadow-xs font-semibold"
                      : "text-[#2F3437] hover:bg-[#DDDCD4] hover:text-[#1A1C1D]"
                  }
                `}
                title={`Filter topics for ${unit}`}
              >
                <span className="font-mono text-[10px] font-bold w-7 shrink-0 text-center rounded py-0.5 bg-black/10">
                  {unitCode}
                </span>
                <span className="flex-1 truncate text-[12px]">{unit}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded font-semibold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-[#DDDCD4] text-[#57564F]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer Links */}
        <div className="p-3 border-t border-[#D8D6CE] bg-[#E3E1DA] space-y-2">
          <Link
            href="/mock-exams"
            className="w-full px-3 py-2 rounded bg-[#2F3437] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#1E2224] transition-all shadow-xs"
          >
            <span>[CBT] Official Mock Exams</span>
          </Link>
          <Link
            href="/formulas"
            className="w-full px-3 py-2 rounded bg-white border border-[#D0CEC6] text-[#2F3437] text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#F9F9F8] transition-all shadow-xs"
          >
            <span>[FM] Formula Engine</span>
          </Link>
        </div>
      </aside>

      {/* ── Main Scrollable Canvas (#EFECE6) ─────────────────────────── */}
      <main ref={mainContentRef} className="flex-1 overflow-y-auto bg-[#EFECE6]">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 bg-[#EFECE6]/95 backdrop-blur-md border-b border-[#D8D2C7]">
          <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            {/* Mobile menu trigger */}
            <button
              className="lg:hidden p-2 -ml-2 rounded hover:bg-[#EFEFEA] text-[#2F3437]"
              onClick={() => setSidebarOpen(true)}
              aria-label="Toggle units sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search input */}
            <div className="flex-1 max-w-lg relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#787774]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search topics, protocols, theorems, algorithms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-white border border-[#E2E0D8] rounded text-xs sm:text-sm text-[#2F3437] placeholder:text-[#787774] focus:outline-none focus:border-[#2F3437] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#787774] hover:text-[#2F3437]"
                >
                  ×
                </button>
              )}
            </div>

            {/* Top Right Quick Actions & Storage Indicator */}
            <div className="flex items-center gap-2">
              <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EBF3ED] text-[#2E5C3B] border border-[#D1E5D5] font-mono text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#2E5C3B]" />
                Browser Storage: Synced
              </span>
              <Link
                href="/mock-exams"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#2F3437] text-white font-mono text-xs font-bold hover:bg-[#1E2224] transition-all shadow-xs"
              >
                <span>[CBT Mocks]</span>
              </Link>
              <Link
                href="/formulas"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-[#E0DED9] text-[#2F3437] font-mono text-xs font-bold hover:border-[#2F3437] transition-all"
              >
                <span>[Formulas]</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto space-y-5">
          
          {/* ── BENTO METRICS ROW (Muted Architectural Contrast) ───────── */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-white border border-[#E2E0D8] rounded-xl p-4 shadow-[2px_2px_0_0_#E0DED7]">
              <p className="text-xl sm:text-2xl font-black font-mono text-[#2F3437]">
                {stats.totalTopics}
              </p>
              <p className="text-xs text-[#787774] mt-0.5 font-medium">Total Syllabus Modules</p>
            </div>

            <div className="bg-white border border-[#E2E0D8] rounded-xl p-4 shadow-[2px_2px_0_0_#E0DED7]">
              <p className="text-xl sm:text-2xl font-black font-mono text-[#5E3F78]">
                {stats.commonTopics}
              </p>
              <p className="text-xs text-[#787774] mt-0.5 font-medium">Common (Both Exams)</p>
            </div>

            <div className="bg-white border border-[#E2E0D8] rounded-xl p-4 shadow-[2px_2px_0_0_#E0DED7]">
              <p className="text-xl sm:text-2xl font-black font-mono text-[#825C18]">
                {stats.stetOnly}
              </p>
              <p className="text-xs text-[#787774] mt-0.5 font-medium">STET Exclusive</p>
            </div>

            <div className="bg-white border border-[#E2E0D8] rounded-xl p-4 shadow-[2px_2px_0_0_#E0DED7]">
              <p className="text-xl sm:text-2xl font-black font-mono text-[#2C4C64]">
                {stats.ugcNetOnly}
              </p>
              <p className="text-xs text-[#787774] mt-0.5 font-medium">UGC NET Exclusive</p>
            </div>

            <div className="bg-white border border-[#E2E0D8] rounded-xl p-4 shadow-[2px_2px_0_0_#E0DED7] col-span-2 sm:col-span-1">
              <p className="text-xl sm:text-2xl font-black font-mono text-[#2E5C3B]">
                {completedCount} <span className="text-xs font-normal font-sans text-[#787774]">/ {stats.totalTopics}</span>
              </p>
              <p className="text-xs text-[#787774] mt-0.5 font-medium">Read ({progressPercent}%)</p>
            </div>
          </div>

          {/* ── FILTERING, SORTING & CONTROLS BAR (Muted Contrast) ─────── */}
          <div className="bg-white border border-[#E2E0D8] rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-[2px_2px_0_0_#E0DED7]">
            {/* Exam Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              <span className="text-[#787774] font-medium mr-1 hidden sm:inline">
                EXAM:
              </span>
              {EXAM_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setExamFilter(filter)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    examFilter === filter
                      ? "bg-[#2F3437] text-white shadow-xs"
                      : "bg-[#F9F9F8] text-[#57564F] hover:bg-[#EFEFEA] hover:text-[#2F3437] border border-[#E2E0D8]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* View Mode & Status Filter */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {/* View Mode Switcher: Sequential Accordion vs Grid */}
              <div className="flex items-center rounded border border-[#E2E0D8] p-0.5 bg-[#F9F9F8]">
                <button
                  onClick={() => setViewMode("accordion")}
                  className={`px-2.5 py-1 rounded text-xs transition-all font-semibold cursor-pointer ${
                    viewMode === "accordion"
                      ? "bg-white text-[#2F3437] shadow-xs"
                      : "text-[#787774] hover:text-[#2F3437]"
                  }`}
                  title="Sequential Learning Progression by Units"
                >
                  [Sequential Units]
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-2.5 py-1 rounded text-xs transition-all font-semibold cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-white text-[#2F3437] shadow-xs"
                      : "text-[#787774] hover:text-[#2F3437]"
                  }`}
                  title="Card Grid View"
                >
                  [Grid View]
                </button>
              </div>

              {/* Status Filter (All / To Read / Read) */}
              <div className="flex items-center rounded border border-[#E2E0D8] p-0.5 bg-[#F9F9F8]">
                <button
                  onClick={() => setStatusFilter("All")}
                  className={`px-2.5 py-1 rounded text-xs transition-all font-medium cursor-pointer ${
                    statusFilter === "All"
                      ? "bg-white text-[#2F3437] shadow-xs font-semibold"
                      : "text-[#787774] hover:text-[#2F3437]"
                  }`}
                >
                  All ({topics.length})
                </button>
                <button
                  onClick={() => setStatusFilter("InProgress")}
                  className={`px-2.5 py-1 rounded text-xs transition-all font-medium cursor-pointer ${
                    statusFilter === "InProgress"
                      ? "bg-white text-[#2F3437] shadow-xs font-semibold"
                      : "text-[#787774] hover:text-[#2F3437]"
                  }`}
                >
                  To Read ({topics.length - completedCount})
                </button>
                <button
                  onClick={() => setStatusFilter("Completed")}
                  className={`px-2.5 py-1 rounded text-xs transition-all font-medium cursor-pointer ${
                    statusFilter === "Completed"
                      ? "bg-white text-[#2E5C3B] font-bold shadow-xs"
                      : "text-[#787774] hover:text-[#2F3437]"
                  }`}
                >
                  Read ({completedCount})
                </button>
              </div>

              {/* Sorting Dropdown */}
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-white border border-[#E2E0D8] text-xs text-[#2F3437] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#2F3437] font-medium"
              >
                <option value="unit-asc">Syllabus Unit (1 → 15)</option>
                <option value="priority-desc">Priority (High → Low)</option>
                <option value="read-time-asc">Shortest Read Time</option>
                <option value="read-time-desc">Longest Read Time</option>
                <option value="alpha-asc">Alphabetical (A → Z)</option>
              </select>
            </div>
          </div>

          {/* Active Unit Filter Pill Banner */}
          {activeUnit && (
            <div className="px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E0D8] rounded-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-[#D5D3CE] text-[#2F3437]">
                  {getUnitCode(activeUnit)}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#2F3437]">
                  Filtered by: {activeUnit}
                </span>
                <span className="text-xs text-[#787774]">
                  ({filteredTopics.length} topic{filteredTopics.length === 1 ? "" : "s"})
                </span>
              </div>
              <button
                onClick={() => setActiveUnit(null)}
                className="text-xs font-mono font-bold text-[#8F3B2C] hover:underline"
              >
                [Clear Unit Filter ×]
              </button>
            </div>
          )}

          {/* Master Accordion Controls (Only visible in Accordion view) */}
          {viewMode === "accordion" && groupedByUnit.length > 1 && (
            <div className="flex items-center justify-between px-1">
              <p className="text-xs text-[#787774] font-mono">
                Showing {groupedByUnit.length} active syllabus units ({filteredTopics.length} modules)
              </p>
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={expandAllUnits}
                  className="text-[#57564F] hover:text-[#2F3437] hover:underline cursor-pointer"
                >
                  [Expand All]
                </button>
                <span className="text-[#D8D6CE]">/</span>
                <button
                  onClick={collapseAllUnits}
                  className="text-[#57564F] hover:text-[#2F3437] hover:underline cursor-pointer"
                >
                  [Collapse All]
                </button>
              </div>
            </div>
          )}

          {/* Content Rendering: Sequential Accordion vs Grid */}
          {filteredTopics.length > 0 ? (
            viewMode === "accordion" ? (
              <div className="space-y-4">
                {groupedByUnit.map(({ unit, topics: uTopics }) => (
                  <SequentialUnitSection
                    key={unit}
                    unit={unit}
                    topics={uTopics}
                    isExpanded={Boolean(expandedUnits[unit])}
                    onToggleExpand={() => toggleUnitExpand(unit)}
                    isCompleted={isCompleted}
                    onToggleCompleted={toggleCompleted}
                  />
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredTopics.map((topic) => (
                  <TopicCard
                    key={topic.slug}
                    topic={topic}
                    isCompleted={isCompleted(topic.slug)}
                    onToggleCompleted={toggleCompleted}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20 bg-white border border-[#E2E0D8] rounded-xl shadow-[2px_2px_0_0_#E0DED7]">
              <div className="font-mono text-sm text-[#787774] mb-2">[0 RESULTS]</div>
              <h3 className="text-base font-bold text-[#2F3437] mb-1">
                No matching topics found
              </h3>
              <p className="text-xs text-[#787774] max-w-sm mx-auto mb-4">
                No topics match the selected combination of unit, exam type, or progress status.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setExamFilter("All");
                  setStatusFilter("All");
                  setActiveUnit(null);
                }}
                className="px-4 py-2 bg-[#2F3437] text-white rounded text-xs font-mono font-bold hover:bg-[#1A1C1D] transition-colors cursor-pointer"
              >
                [Reset All Filters]
              </button>
            </div>
          )}

          {/* Bottom Count */}
          {filteredTopics.length > 0 && (
            <p className="text-xs text-[#787774] pt-4 text-center font-mono">
              Displaying {filteredTopics.length} of {stats.totalTopics} syllabus modules • Stored in Browser Storage
            </p>
          )}

          {/* Legal Footer */}
          <footer className="mt-12 pt-6 border-t border-[#D8D2C7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#746F68] font-sans">
            <div>
              True Exam Preparation (TEP) CS • Independent Educational Portal
            </div>
            <div className="flex items-center gap-4">
              <Link href="/disclaimer" className="hover:text-[#151515] transition-colors">
                Exam Disclaimer
              </Link>
              <Link href="/privacy" className="hover:text-[#151515] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#151515] transition-colors">
                Terms of Service
              </Link>
            </div>
          </footer>
        </div>
      </main>

      {/* ── RESET PROGRESS CONFIRMATION MODAL ───────────────────────── */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#2F3437] rounded-xl max-w-sm w-full p-6 shadow-[4px_4px_0_0_#2F3437]">
            <h3 className="text-lg font-bold text-[#2F3437] mb-2">
              Reset Browser Progress?
            </h3>
            <p className="text-xs text-[#787774] leading-relaxed mb-5">
              This will clear all {completedCount} completed module markers saved in your browser&apos;s local storage. This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-2.5 font-mono text-xs">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3.5 py-2 rounded bg-white border border-[#E2E0D8] text-[#57564F] hover:border-[#2F3437] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetAll();
                  setShowResetConfirm(false);
                }}
                className="px-3.5 py-2 rounded bg-[#8F3B2C] text-white font-bold hover:bg-[#722A1E] cursor-pointer"
              >
                Clear All Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
