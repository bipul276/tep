"use client";

import Link from "next/link";
import type { TopicMeta } from "@/lib/content";

export function TopicNavigation({
  prev,
  next,
  unitIndex,
  unitTotal,
  unitName,
}: {
  prev: TopicMeta | null;
  next: TopicMeta | null;
  unitIndex: number;
  unitTotal: number;
  unitName: string;
}) {
  return (
    <nav className="mt-12 pt-8 border-t border-[#E6E4DF] print:hidden">
      {/* Unit progress badge */}
      <div className="mb-4 flex items-center justify-between text-xs text-[#787774]">
        <span>
          <strong className="text-[#2F3437]">{unitName}</strong> — Topic {unitIndex} of {unitTotal}
        </span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: unitTotal }).map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-1.5 rounded-full ${
                i + 1 === unitIndex
                  ? "bg-[#2F3437]"
                  : i + 1 < unitIndex
                  ? "bg-[#8DA399]"
                  : "bg-[#E6E4DF]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Sequential Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/dashboard/${prev.slug}`}
            className="group p-4 rounded-none border border-[#D8D2C7] bg-[#FAF8F5] hover:border-[#151515] hover:bg-white transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-semibold text-[#746F68] flex items-center gap-1 group-hover:text-[#151515] transition-colors">
                <span>←</span>
                <span>Previous Topic</span>
              </span>
              <p className="text-sm font-bold text-[#151515] mt-1.5 line-clamp-1 leading-snug">
                {prev.title}
              </p>
            </div>
            <span className="text-[10px] text-[#746F68] mt-2 block truncate font-mono">
              {prev.unit}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block p-4 rounded-none border border-dashed border-[#D8D2C7] bg-[#FAF8F5]/50 flex items-center justify-center text-xs text-[#A5A098]">
            Beginning of syllabus
          </div>
        )}

        {next ? (
          <Link
            href={`/dashboard/${next.slug}`}
            className="group p-4 rounded-none border border-[#D8D2C7] bg-[#FAF8F5] hover:border-[#151515] hover:bg-white transition-all flex flex-col justify-between text-right"
          >
            <div>
              <span className="text-[11px] font-semibold text-[#746F68] flex items-center justify-end gap-1 group-hover:text-[#151515] transition-colors">
                <span>Next Topic</span>
                <span>→</span>
              </span>
              <p className="text-sm font-bold text-[#151515] mt-1.5 line-clamp-1 leading-snug">
                {next.title}
              </p>
            </div>
            <span className="text-[10px] text-[#746F68] mt-2 block truncate font-mono">
              {next.unit}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block p-4 rounded-none border border-dashed border-[#D8D2C7] bg-[#FAF8F5]/50 flex items-center justify-center text-xs text-[#A5A098]">
            End of syllabus
          </div>
        )}
      </div>
    </nav>
  );
}
