"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-3.5 py-1.5 rounded-lg bg-[#2F3437] text-white text-xs sm:text-sm font-semibold hover:bg-[#1A1C1D] transition-all flex items-center gap-1.5 shadow-xs active:scale-95"
    >
      ️ Print / Save as PDF
    </button>
  );
}
