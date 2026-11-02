"use client";

import React from "react";
import Link from "next/link";
import { ALL_MOCK_EXAMS, MockExam } from "@/data/mockExams";
import { BrandLogo } from "@/components/BrandLogo";

export default function MockExamHub() {
  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#151515] font-sans antialiased">
      {/* ── Top Header ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-[#EFECE6]/95 backdrop-blur-md border-b border-[#D8D2C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo href="/" size="sm" />
            <span className="text-[#A5A098] font-mono text-xs hidden sm:inline">/</span>
            <span className="font-sans text-xs font-semibold text-[#151515] uppercase tracking-wider hidden sm:inline">
              [CBT] Mock Exams
            </span>
          </div>

          <div className="flex items-center gap-3 font-sans text-xs font-medium">
            <Link
              href="/portal"
              className="px-3 py-1.5 bg-white border border-[#D8D2C7] hover:border-[#151515] text-[#151515] transition-all"
            >
              54 Modules
            </Link>
            <Link
              href="/formulas"
              className="px-3 py-1.5 bg-[#151515] text-white hover:bg-black transition-colors"
            >
              Formula Engine
            </Link>
          </div>
        </div>
      </header>

      {/* ── Main Canvas ───────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Banner Section */}
        <div className="mb-8 border-b border-[#E6E4DF] pb-6">
          <div className="max-w-3xl">
            <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#FAECE9] text-[#8F3B2C] border border-[#F3CDC6] mb-2.5">
              Authentic Past Examination Papers
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2F3437] tracking-tight">
              Official UGC NET & Bihar STET Mock Exams
            </h1>
            <p className="text-sm sm:text-base text-[#787774] mt-2 leading-relaxed">
              Full-length Computer Science examination papers directly transcribed from official question papers.
              Every single question includes authentic options, official answer keys, step-by-step mathematical & theoretical
              derivations, and direct links to syllabus study modules to brush up on weak topics.
            </p>
          </div>

          {/* Quick Features Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-white border border-[#E6E4DF] shadow-xs">
              <div className="text-lg mb-1">[TIME] Two Exam Modes</div>
              <p className="text-xs text-[#787774] leading-relaxed">
                Choose <strong>Practice Mode</strong> for instant solutions or <strong>CBT Timed Mode</strong> to simulate real exam hall pressure.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E6E4DF] shadow-xs">
              <div className="text-lg mb-1">[MODULE] Direct Topic Brush-Up</div>
              <p className="text-xs text-[#787774] leading-relaxed">
                Got a question wrong? Click the <strong>Brush-Up Link</strong> directly on the question to read the exhaustive textbook guide.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E6E4DF] shadow-xs">
              <div className="text-lg mb-1">[SE] Unit-Wise Analytics</div>
              <p className="text-xs text-[#787774] leading-relaxed">
                Complete question palette with section filtering (Computer Science, Art of Teaching, General Aptitude).
              </p>
            </div>
          </div>
        </div>

        {/* ── Mock Exam Cards Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ALL_MOCK_EXAMS.map((exam) => (
            <MockExamCard key={exam.id} exam={exam} />
          ))}
        </div>

        {/* ── Legal & Exam Statutory Footer ─────────────────────────── */}
        <footer className="mt-16 pt-8 border-t border-[#E6E4DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787774] font-sans">
          <p>
            True Exam Preparation (TEP) is an independent non-commercial study platform. Not affiliated with NTA, UGC, or BSEB.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/disclaimer" className="hover:text-[#2F3437] transition-colors">
              Exam Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-[#2F3437] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#2F3437] transition-colors">
              Terms of Service
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

function MockExamCard({ exam }: { exam: MockExam }) {
  const isUGC = exam.id === "ugc-net";

  return (
    <div className="bg-white border border-[#E6E4DF] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#2F3437] transition-all flex flex-col justify-between">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                isUGC
                  ? "bg-[#FAF4E5] text-[#8F6A1E] border border-[#F2DEB5]"
                  : "bg-[#EBF3EC] text-[#2D6A4F] border border-[#C3DCC8]"
              }`}
            >
              {exam.examType}
            </span>
            <span className="text-xs text-[#787774]">{exam.date}</span>
          </div>
          <span className="text-xs font-semibold text-[#57564F] bg-[#F4F4F2] px-2.5 py-1 rounded-md">
            {exam.totalQuestions} Questions
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#2F3437] leading-snug">
          {exam.title}
        </h2>
        <p className="text-xs text-[#8F3B2C] font-medium mt-1">
          {exam.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#57564F] mt-3 leading-relaxed">
          {exam.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-xl bg-[#F9F9F8] border border-[#E6E4DF] text-center">
          <div>
            <div className="text-base sm:text-lg font-bold text-[#2F3437]">
              {exam.totalQuestions}
            </div>
            <div className="text-[10px] sm:text-xs text-[#787774] uppercase tracking-wider">
              Questions
            </div>
          </div>
          <div className="border-x border-[#E6E4DF]">
            <div className="text-base sm:text-lg font-bold text-[#2F3437]">
              {exam.durationMinutes} min
            </div>
            <div className="text-[10px] sm:text-xs text-[#787774] uppercase tracking-wider">
              Duration
            </div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-[#2F3437]">
              {exam.totalMarks} Marks
            </div>
            <div className="text-[10px] sm:text-xs text-[#787774] uppercase tracking-wider">
              Max Score
            </div>
          </div>
        </div>

        {/* Syllabus / Sections Included */}
        <div className="mb-6">
          <div className="text-xs font-bold text-[#787774] uppercase tracking-wider mb-2">
            Sections & Units Covered:
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
            {exam.syllabusCovered.map((topic: string, i: number) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-[11px] bg-[#F4F4F2] text-[#57564F] border border-[#E6E4DF]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[#E6E4DF] flex flex-col sm:flex-row gap-2.5">
        <Link
          href={`/mock-exams/${exam.id}?mode=practice`}
          className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#2F3437] text-[#2F3437] text-xs font-bold hover:bg-[#F4F4F2] transition-all text-center flex items-center justify-center gap-1.5"
        >
          <span>[SEARCH]</span>
          <span>Practice Mode (Instant Answers)</span>
        </Link>
        <Link
          href={`/mock-exams/${exam.id}?mode=cbt`}
          className="flex-1 px-4 py-2.5 rounded-xl bg-[#2F3437] text-white text-xs font-bold hover:bg-[#1E2224] transition-all text-center flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span>[TIME]</span>
          <span>Timed CBT Exam Mode</span>
        </Link>
      </div>
    </div>
  );
}
