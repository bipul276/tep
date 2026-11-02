"use client";

import React, { useState } from "react";
import { FormattedExplanation } from "./FormattedExplanation";

export interface QuizBlockProps {
  question?: string;
  options?: string[] | string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  correctAnswer?: string | number;
  correctOption?: string | number;
  explanation?: string;
  examBadge?: string;
  topicHint?: string;
}

/**
 * QuizBlock — Interactive "Exercise" component for MDX.
 * Warm editorial aesthetic with 1px hairline borders, calm contrast,
 * tactile option buttons, immediate grading feedback, and step-by-step derivation.
 */
export function QuizBlock({
  question = "Practice Question",
  options,
  optionA,
  optionB,
  optionC,
  optionD,
  correctAnswer,
  correctOption,
  explanation = "",
  examBadge = "UGC NET / STET PYQ",
  topicHint,
}: QuizBlockProps) {
  // 1. Resolve options list from array, individual props, or pipe-separated string
  let resolvedOptions: string[] = [];
  if (Array.isArray(options) && options.length > 0) {
    resolvedOptions = options;
  } else if (optionA && optionB) {
    resolvedOptions = [optionA, optionB, optionC || "", optionD || ""].filter(Boolean);
  } else if (typeof options === "string") {
    resolvedOptions = options.split("|").map((s) => s.trim()).filter(Boolean);
  }

  // 2. Resolve target index from correctAnswer or correctOption
  const targetKey = (correctAnswer !== undefined ? correctAnswer : correctOption) ?? "A";
  let targetIdx = 0;

  if (typeof targetKey === "number") {
    targetIdx = targetKey;
  } else if (typeof targetKey === "string") {
    const trimmed = targetKey.trim();
    const upper = trimmed.toUpperCase();
    if (upper === "A" || upper === "1") targetIdx = 0;
    else if (upper === "B" || upper === "2") targetIdx = 1;
    else if (upper === "C" || upper === "3") targetIdx = 2;
    else if (upper === "D" || upper === "4") targetIdx = 3;
    else if (!isNaN(Number(trimmed))) {
      targetIdx = Number(trimmed);
    } else {
      const matchIdx = resolvedOptions.findIndex(
        (opt) => opt.toLowerCase().trim() === trimmed.toLowerCase()
      );
      if (matchIdx !== -1) targetIdx = matchIdx;
    }
  }

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelectedIdx(idx);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setSubmitted(false);
  };

  const isCorrect = selectedIdx === targetIdx;
  const targetLetter = String.fromCharCode(65 + targetIdx);
  const selectedLetter = selectedIdx !== null ? String.fromCharCode(65 + selectedIdx) : "";

  if (resolvedOptions.length === 0) return null;

  return (
    <div className="my-8 bg-[#FAF8F5] border border-[#DDD7CD] p-5 sm:p-7 shadow-xs text-[#151515]">
      {/* ── Top Exercise Bar ──────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-4 border-b border-[#E2DCD3] font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold bg-[#151515] text-white px-2 py-0.5 uppercase tracking-wider text-[11px]">
            [EXERCISE]
          </span>
          <span className="font-medium text-[#524E48] bg-white border border-[#DDD7CD] px-2 py-0.5 text-[11px]">
            {examBadge}
          </span>
          {topicHint && (
            <span className="hidden sm:inline-block text-[#746F68]">
              {"// "}{topicHint}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {submitted ? (
            <div className="flex items-center gap-2">
              <span
                className={`font-semibold px-2 py-0.5 text-[11px] border ${
                  isCorrect
                    ? "bg-[#EDF6EE] text-[#2D6A4F] border-[#2D6A4F]"
                    : "bg-[#FAF0ED] text-[#9A3412] border-[#F5C7BC]"
                }`}
              >
                {isCorrect ? "[CORRECT]" : "[INCORRECT]"}
              </span>
              <button
                onClick={handleReset}
                className="text-[#6C6760] hover:text-[#151515] underline px-1 py-0.5 cursor-pointer font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <span className="text-[#888278] font-medium text-[11px]">
              [Status: Unattempted]
            </span>
          )}
        </div>
      </div>

      {/* ── Question Statement ────────────────────────────────────── */}
      <div className="mb-5">
        <h4 className="text-sm sm:text-base font-semibold text-[#151515] leading-snug tracking-tight">
          {question}
        </h4>
      </div>

      {/* ── Interactive Option Buttons ────────────────────────────── */}
      <div className="space-y-2 mb-5">
        {resolvedOptions.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          let btnStyle = "bg-white border border-[#DDD7CD] text-[#2F3437] hover:border-[#151515] hover:bg-[#FAF8F5]";
          let badgeStyle = "bg-[#EFECE6] text-[#151515] border border-[#DDD7CD]";

          if (submitted) {
            if (idx === targetIdx) {
              btnStyle = "bg-[#EDF6EE] border border-[#2D6A4F] text-[#1E4620] font-semibold";
              badgeStyle = "bg-[#2D6A4F] text-white border-[#2D6A4F]";
            } else if (idx === selectedIdx) {
              btnStyle = "bg-[#FAF0ED] border border-[#C84B31] text-[#7A2818] font-medium";
              badgeStyle = "bg-[#C84B31] text-white border-[#C84B31]";
            } else {
              btnStyle = "bg-white/60 border border-[#EBE7E0] text-[#A5A098] opacity-60";
              badgeStyle = "bg-[#F3EFEA] text-[#A5A098] border-[#EBE7E0]";
            }
          } else if (selectedIdx === idx) {
            btnStyle = "bg-[#F5F2EB] border border-[#151515] text-[#151515] font-semibold";
            badgeStyle = "bg-[#151515] text-white border-[#151515]";
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={submitted}
              className={`w-full text-left p-3.5 sm:p-4 transition-colors flex items-start gap-3 cursor-pointer ${btnStyle}`}
            >
              {/* Option Letter Badge [A], [B], [C], [D] */}
              <span
                className={`shrink-0 w-6 h-6 flex items-center justify-center font-mono text-xs font-bold ${badgeStyle}`}
              >
                {letter}
              </span>

              {/* Option Content Text */}
              <span className="flex-1 pt-0.5 text-xs sm:text-sm leading-relaxed">
                {opt}
              </span>

              {/* Status Flag */}
              {submitted && idx === targetIdx && (
                <span className="font-mono text-xs font-bold text-[#2D6A4F] px-2 py-0.5 bg-white border border-[#2D6A4F] shrink-0 self-center">
                  [Official Key ✓]
                </span>
              )}
              {submitted && idx === selectedIdx && idx !== targetIdx && (
                <span className="font-mono text-xs font-bold text-[#C84B31] px-2 py-0.5 bg-white border border-[#C84B31] shrink-0 self-center">
                  [Your Choice ✗]
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Revealed Explanation & Derivation Card ─────────────────── */}
      {submitted && (
        <div
          className={`mt-4 p-4 sm:p-5 border ${
            isCorrect
              ? "bg-[#EDF6EE]/80 border-[#2D6A4F]/40"
              : "bg-[#FAF7F0] border-[#DDD7CD]"
          }`}
        >
          {/* Solution Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D8D2C7]/60 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold bg-[#151515] text-white px-2 py-0.5 uppercase text-[10px]">
                {isCorrect ? "[SOLVED]" : "[ANALYSIS]"}
              </span>
              <span className="font-bold text-[#151515] uppercase tracking-wider text-[11px]">
                {isCorrect ? "Correct Solution" : "Step-by-Step Derivation"}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap text-xs">
              {!isCorrect && selectedIdx !== null && (
                <span className="px-2 py-0.5 font-medium bg-[#FAF0ED] text-[#C84B31] border border-[#F5C7BC]">
                  Selected: Option {selectedLetter}
                </span>
              )}
              <span className="px-2 py-0.5 font-semibold bg-white text-[#2D6A4F] border border-[#2D6A4F]">
                Correct Key: Option {targetLetter} ({resolvedOptions[targetIdx]})
              </span>
            </div>
          </div>

          {/* Formatted Explanation Body */}
          <div className="mt-2 text-xs sm:text-sm leading-relaxed text-[#37352F]">
            <FormattedExplanation explanation={explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
