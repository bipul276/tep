"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getStoredCompletedSlugs } from "@/lib/progress";
import { BrandLogo } from "@/components/BrandLogo";

export default function LandingPage() {
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCompletedCount(getStoredCompletedSlugs().length);
  }, []);

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#151515] font-sans antialiased selection:bg-[#151515] selection:text-white flex flex-col">
      {/* ── TOP NAVIGATION ─────────────────────────────────────────── */}
      <header className="w-full bg-[#EFECE6] border-b border-[#D8D2C7] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with TEP and True Exam Preparation for NET & STET */}
          <div className="flex items-center gap-6">
            <BrandLogo href="/" size="md" />
            <div className="h-6 w-px bg-[#D8D2C7] hidden lg:block" />
            <span className="font-mono text-xs text-[#746F68] hidden lg:inline-block">
              {"// CS ACADEMIC ENGINE"}
            </span>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-[#4A4640]">
            <Link
              href="/portal"
              className="hover:text-[#151515] transition-colors"
            >
              54 Modules
            </Link>
            <Link
              href="/formulas"
              className="hover:text-[#151515] transition-colors"
            >
              Formula Engine
            </Link>
            <Link
              href="/mock-exams"
              className="hover:text-[#151515] transition-colors"
            >
              CBT Mocks
            </Link>
            <Link
              href="/cheat-sheet"
              className="hover:text-[#151515] transition-colors"
            >
              Revision Sheet
            </Link>
          </nav>

          {/* Right Action: Clean 1px Outline Button (matching SkillForge "Join Now ↗") */}
          <div className="flex items-center gap-4">
            {isClient && completedCount > 0 && (
              <span className="font-mono text-xs bg-white text-[#151515] border border-[#D8D2C7] px-3 py-1.5 hidden sm:inline-block">
                Read: {completedCount}/54
              </span>
            )}
            <Link
              href="/portal"
              className="group font-sans text-xs sm:text-sm font-medium px-5 py-2.5 bg-transparent text-[#151515] border border-[#151515] hover:bg-[#151515] hover:text-white transition-all inline-flex items-center gap-2"
            >
              <span>Access Portal</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── MAIN BENTO GRID HERO (Exact SkillForge-inspired Aesthetic) ── */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-12 sm:space-y-16">
        
        {/* ── SECTION 1: THE HERO BENTO ROW ───────────────────────────── */}
        <div className="border border-[#D8D2C7] bg-[#EFECE6] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#D8D2C7]">
            
            {/* ── COLUMN 1: Headline, CTA & Orange Card (5 cols) ────── */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-[#EFECE6]">
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-[#746F68] uppercase block mb-6">
                  {"// OFFICIAL SYLLABUS SPECIFICATIONS"}
                </span>

                {/* Editorial Sans-Serif Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#151515] leading-[1.08] mb-8">
                  Master Skills <br />
                  Achieve <br />
                  Goals
                </h1>

                <p className="text-sm sm:text-base text-[#524E48] leading-relaxed max-w-md mb-8">
                  The definitive Computer Science preparation portal for UGC NET and Bihar STET. 54 textbook-quality modules, KaTeX formula engine, and authentic CBT examination papers.
                </p>

                {/* Flat Charcoal CTA Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/portal"
                    className="font-sans text-sm font-medium px-7 py-3.5 bg-[#151515] text-white hover:bg-black transition-colors inline-flex items-center gap-2"
                  >
                    <span>Start Learning Today</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/formulas"
                    className="font-sans text-sm font-medium px-5 py-3.5 bg-transparent text-[#151515] border border-[#D8D2C7] hover:border-[#151515] hover:bg-white transition-all"
                  >
                    Formula Reference
                  </Link>
                </div>
              </div>

              {/* ── VIBRANT ORANGE CARD (from SkillForge hero) ──────── */}
              <div className="relative bg-[#FF6A35] text-white p-7 sm:p-8 overflow-hidden mt-6">
                {/* Lighter Orange Geometric Overlay Accent */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/15 pointer-events-none transform origin-bottom-right rotate-45 translate-x-12 translate-y-12" />
                
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2">
                    54+
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white/95 mb-3">
                    Exhaustive Modules
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-xs">
                    Comprehensive computer science modules mapped to official NTA UGC-NET and BSEB STET syllabi.
                  </p>
                </div>
              </div>
            </div>

            {/* ── COLUMN 2: Hero Student Photography (4 cols) ───────── */}
            <div className="lg:col-span-4 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full bg-[#EAE5DF] overflow-hidden">
              <Image
                src="/images/ai-hero-student-v2.jpg"
                alt="Computer Science Student"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* ── COLUMN 3: Right Callouts & Numbers (3 cols) ────────── */}
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-10 bg-[#EFECE6]">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#746F68] uppercase tracking-wider">
                  [ COMMUNITY ]
                </span>
                <p className="text-base sm:text-lg text-[#3A3732] leading-snug font-medium">
                  Aspirants from across India preparing for UGC NET &amp; Bihar STET.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-[#D8D2C7]">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#151515] tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6C6760] mt-1">
                    Syllabus Coverage
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#151515] tracking-tight">
                    250+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6C6760] mt-1">
                    Verified PYQs &amp; CBT Questions
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#151515] tracking-tight">
                    15
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6C6760] mt-1">
                    Official Exam Units
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2C7]">
                <span className="font-mono text-xs text-[#746F68] block">
                  {"// ZERO LOGIN REQUIRED"}
                </span>
                <span className="font-mono text-xs font-bold text-[#151515] block mt-0.5">
                  Permanent Browser Storage
                </span>
              </div>
            </div>

          </div>

          {/* ── SECTION 2: BOTTOM BENTO ROW (Graduation + Mission + Diamond) ── */}
          <div className="border-t border-[#D8D2C7] grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#D8D2C7]">
            
            {/* Bottom-Left: Graduates Photo (4 cols) */}
            <div className="lg:col-span-4 relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-[#E2DED8]">
              <Image
                src="/images/ai-graduation-celebration-v2.jpg"
                alt="Graduates Celebrating Success"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Bottom-Middle: Empowering Learners Mission (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-center space-y-4">
              <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-[#151515]">
                EMPOWERING ASPIRANTS, TRANSFORMING CS FUTURES
              </h2>
              <p className="text-xs sm:text-sm text-[#524E48] leading-relaxed">
                At True Exam Preparation (TEP), we believe computer science exam preparation should be exhaustive, mathematically precise, and distraction-free. Our mission is to bridge the gap between syllabus theory and exam day victory, helping students and professionals master core algorithms, system architecture, and formal theory.
              </p>
              <div className="pt-2">
                <Link
                  href="/portal"
                  className="font-sans text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-[#FF6A35] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Syllabus Directory</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Bottom-Right: Clean Geometric Diamond Facet Motif (3 cols) */}
            <div className="lg:col-span-3 p-8 bg-white flex items-center justify-center relative overflow-hidden">
              <svg
                viewBox="0 0 200 200"
                className="w-44 h-44 text-[#EAE5DF]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Clean Bauhaus/Minimalist Diamond Structure */}
                <polygon points="100,20 180,100 100,180 20,100" fill="#F4F0E8" stroke="#D8D2C7" strokeWidth="1" />
                <polygon points="100,20 100,180 20,100" fill="#ECE8E1" />
                <polygon points="100,20 180,100 100,100" fill="#FAF8F5" />
                <polygon points="100,100 180,100 100,180" fill="#E5E0D6" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="#D8D2C7" strokeWidth="1" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="#D8D2C7" strokeWidth="1" />
              </svg>
            </div>

          </div>
        </div>

        {/* ── SECTION 3: 15-UNIT SYLLABUS DIRECTORY MATRIX ───────────── */}
        <div className="bg-white border border-[#D8D2C7] p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D2C7] pb-6 mb-8">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#746F68] block mb-1">
                {"// FULL SYLLABUS MAPPING"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151515]">
                15-Unit Computer Science Curriculum
              </h3>
            </div>
            <Link
              href="/portal"
              className="font-sans text-xs sm:text-sm font-semibold px-4 py-2 border border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <span>View All 54 Modules</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: "U01", name: "Discrete Structures & Optimization", count: "3 Modules", slug: "boolean-algebra-k-maps-co" },
              { code: "U02", name: "Computer System Architecture", count: "3 Modules", slug: "instruction-pipelining-hazards-co" },
              { code: "U03", name: "Programming & Computer Graphics", count: "3 Modules", slug: "c-cpp-pointers-memory" },
              { code: "U04", name: "Database Management Systems", count: "4 Modules", slug: "normalization-dbms" },
              { code: "U05", name: "System Software & Operating System", count: "4 Modules", slug: "cpu-scheduling-os" },
              { code: "U06", name: "Software Engineering", count: "3 Modules", slug: "software-engineering-models-metrics" },
              { code: "U07", name: "Data Communications & Networks", count: "4 Modules", slug: "tcp-ip-subnetting-cn" },
              { code: "U08", name: "Data Structures & Algorithms", count: "5 Modules", slug: "asymptotic-notation-algorithms" },
              { code: "U09", name: "Theory of Computation & Compilers", count: "4 Modules", slug: "regular-expressions-finite-automata-toc" },
              { code: "U10", name: "Advanced Web Technologies", count: "3 Modules", slug: "web-technologies-xml-security" },
              { code: "U11", name: "Artificial Intelligence (AI)", count: "4 Modules", slug: "artificial-intelligence-search-heuristics" },
              { code: "U12", name: "Internet of Things (IoT)", count: "3 Modules", slug: "iot-architecture-middleware" },
              { code: "U13", name: "Cyber Security & Cryptography", count: "3 Modules", slug: "cryptographic-algorithms-security-cn" },
              { code: "U14", name: "Cloud Computing & Data Warehousing", count: "3 Modules", slug: "data-warehousing-data-mining-dbms" },
              { code: "U15", name: "Object Oriented Design & Java", count: "5 Modules", slug: "java-multithreading-collections-framework" },
            ].map((unit) => (
              <Link
                key={unit.code}
                href={`/dashboard/${unit.slug}`}
                className="group p-5 bg-[#FAF8F5] border border-[#E2DCD3] hover:border-[#151515] hover:bg-white transition-all flex items-start justify-between gap-3"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF6A35] block mb-1">
                    [{unit.code}]
                  </span>
                  <h4 className="text-sm font-semibold text-[#151515] leading-snug group-hover:text-[#FF6A35] transition-colors">
                    {unit.name}
                  </h4>
                  <span className="font-mono text-xs text-[#746F68] mt-2 block">
                    {unit.count}
                  </span>
                </div>
                <span className="text-[#A5A098] group-hover:text-[#151515] group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: CORE CAPABILITIES MATRIX ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white border border-[#D8D2C7] flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs font-bold text-[#FF6A35] uppercase tracking-wider block mb-2">
                {"// 01 FORMULA ENGINE"}
              </span>
              <h4 className="text-lg font-bold text-[#151515] mb-2">
                15-Unit Formula Reference
              </h4>
              <p className="text-xs sm:text-sm text-[#524E48] leading-relaxed">
                Shannon channel capacity, CSMA/CD frame sizing, TLB EMAT derivations, and pipeline speedup formulas rendered with clean KaTeX mathematics and custom notation definitions.
              </p>
            </div>
            <Link
              href="/formulas"
              className="font-sans text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-[#FF6A35] inline-flex items-center gap-1"
            >
              <span>Launch Formulas</span>
              <span>→</span>
            </Link>
          </div>

          <div className="p-8 bg-white border border-[#D8D2C7] flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs font-bold text-[#FF6A35] uppercase tracking-wider block mb-2">
                {"// 02 CBT SIMULATOR"}
              </span>
              <h4 className="text-lg font-bold text-[#151515] mb-2">
                Authentic CBT Examination
              </h4>
              <p className="text-xs sm:text-sm text-[#524E48] leading-relaxed">
                Full-length UGC NET (100 Questions) and Bihar STET (150 Questions) Computer Science test simulators with authentic timers, question palettes, and topic-tagged analytics.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/mock-exams/ugc-net"
                className="font-sans text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-[#FF6A35] inline-flex items-center gap-1"
              >
                <span>UGC NET CBT →</span>
              </Link>
              <Link
                href="/mock-exams/bihar-stet"
                className="font-sans text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-[#FF6A35] inline-flex items-center gap-1"
              >
                <span>STET CBT →</span>
              </Link>
            </div>
          </div>

          <div className="p-8 bg-white border border-[#D8D2C7] flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs font-bold text-[#FF6A35] uppercase tracking-wider block mb-2">
                {"// 03 PROOF DRIVEN"}
              </span>
              <h4 className="text-lg font-bold text-[#151515] mb-2">
                Zero Discrepancies
              </h4>
              <p className="text-xs sm:text-sm text-[#524E48] leading-relaxed">
                Every practice exercise and mock question is audited. Clear step-by-step mathematical solutions and official answer key verifications ensure 100% confidence.
              </p>
            </div>
            <div className="font-mono text-xs font-semibold text-[#151515] bg-[#FAF8F5] p-2.5 border border-[#E2DCD3]">
              AUDITED: 54/54 MODULES VERIFIED
            </div>
          </div>
        </div>

      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="w-full bg-[#EFECE6] border-t border-[#D8D2C7] mt-16 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <BrandLogo href="/" size="sm" />

            <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs font-medium text-[#524E48]">
              <Link href="/portal" className="hover:text-[#151515] transition-colors">
                Study Portal
              </Link>
              <Link href="/formulas" className="hover:text-[#151515] transition-colors">
                Formula Engine
              </Link>
              <Link href="/mock-exams" className="hover:text-[#151515] transition-colors">
                CBT Mock Exams
              </Link>
              <Link href="/cheat-sheet" className="hover:text-[#151515] transition-colors">
                Revision Sheet
              </Link>
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
          </div>

          <div className="pt-6 border-t border-[#D8D2C7] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#746F68] font-sans">
            <p>
              True Exam Preparation (TEP) is an independent open educational portal not affiliated with NTA, UGC, or BSEB.
            </p>
            <div className="font-mono">
              {"// STORAGE: PERMANENT LOCAL BROWSER • ZERO COOKIES"}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
