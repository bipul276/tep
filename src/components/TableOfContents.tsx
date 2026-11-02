"use client";

import { useState, useEffect } from "react";

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ headings }: { headings: HeadingItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter((el): el is HTMLElement => el !== null);

      const scrollPos = window.scrollY + 120;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPos) {
          setActiveId(el.id);
          return;
        }
      }
      if (headingElements.length > 0 && window.scrollY < 200) {
        setActiveId(headingElements[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <div className="my-6 bg-[#FAF9F5] border border-[#E6E4DF] rounded-xl overflow-hidden print:hidden">
      {/* Mobile / Compact Toggle Bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#F2F1EC] transition-colors"
      >
        <span className="text-xs font-bold text-[#2F3437] flex items-center gap-2">
          <span>[UNITS]</span>
          <span>Table of Contents ({headings.length} Sections)</span>
        </span>
        <span className="text-[11px] font-mono text-[#787774] px-2 py-0.5 rounded bg-white border border-[#E6E4DF]">
          {isOpen ? "Collapse ▲" : "Jump to Section ▼"}
        </span>
      </button>

      {/* Headings List */}
      {isOpen && (
        <div className="p-4 pt-2 border-t border-[#E6E4DF] max-h-80 overflow-y-auto">
          <ul className="space-y-1 text-xs">
            {headings.map((h) => {
              const isActive = activeId === h.id;
              const isQuiz =
                h.text.toLowerCase().includes("practice") ||
                h.text.toLowerCase().includes("quiz") ||
                h.text.toLowerCase().includes("pyq");

              return (
                <li
                  key={h.id}
                  style={{ paddingLeft: `${(h.level - 2) * 16}px` }}
                >
                  <a
                    href={`#${h.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 px-2 rounded transition-colors ${
                      isActive
                        ? "bg-[#2F3437] text-white font-semibold"
                        : isQuiz
                        ? "text-[#8F3B2C] font-semibold hover:bg-[#FBEAE5]"
                        : "text-[#57564F] hover:bg-[#EAE8E1] hover:text-[#2F3437]"
                    }`}
                  >
                    {isQuiz && <span className="mr-1">[EXAM]</span>}
                    {h.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function FloatingScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-[#2F3437] text-white shadow-lg hover:bg-[#1E2224] transition-all flex items-center justify-center print:hidden text-xs"
      title="Scroll back to top"
    >
      ↑ Top
    </button>
  );
}
