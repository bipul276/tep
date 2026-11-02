import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Acceptable Academic Use",
  description:
    "Terms of Service and Acceptable Use Policy for True Exam Preparation (TEP) Computer Science.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#151515] flex flex-col font-sans">
      {/* ── TOP NAVIGATION BAR ────────────────────────────────────── */}
      <header className="w-full bg-[#EFECE6] border-b border-[#D8D2C7] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <BrandLogo href="/" size="sm" />
          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-[#524E48]">
            <Link href="/portal" className="hover:text-[#151515] transition-colors">
              Study Portal
            </Link>
            <Link href="/formulas" className="hover:text-[#151515] transition-colors">
              Formulas
            </Link>
            <Link href="/mock-exams" className="hover:text-[#151515] transition-colors">
              Mock CBT
            </Link>
          </nav>
        </div>
      </header>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-16 flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#746F68] mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#151515] font-bold">Terms of Service</span>
        </div>

        {/* Legal Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#D8D2C7] pb-3">
          <Link
            href="/disclaimer"
            className="px-4 py-2 bg-white text-[#524E48] hover:text-[#151515] border border-[#D8D2C7] text-xs font-medium uppercase tracking-wider transition-colors"
          >
            Exam Disclaimer
          </Link>
          <Link
            href="/privacy"
            className="px-4 py-2 bg-white text-[#524E48] hover:text-[#151515] border border-[#D8D2C7] text-xs font-medium uppercase tracking-wider transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="px-4 py-2 bg-[#151515] text-white text-xs font-bold uppercase tracking-wider"
          >
            Terms of Service
          </Link>
        </div>

        {/* Document Card */}
        <div className="bg-white border border-[#D8D2C7] p-6 sm:p-10 shadow-xs">
          <div className="border-b border-[#EAE5DF] pb-6 mb-8">
            <span className="font-mono text-xs font-bold text-[#FF6A35] uppercase tracking-wider block mb-1">
              {"// USER AGREEMENT & ACCEPTABLE USE"}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-[#746F68] mt-2 font-mono">
              Effective Date: November 2026
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-[#37352F] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or utilizing <strong>True Exam Preparation Computer Science (TEP)</strong>, you agree to comply with and be bound by these Terms of Service. If you disagree with any portion of these terms, your sole remedy is to cease accessing the platform.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                2. Permitted Academic &amp; Personal Use
              </h2>
              <p>
                The materials on TEP—including the 54 unit syllabus notes, formula reference engines, and mock CBT question banks—are provided free of charge for <strong>personal, academic study, and non-commercial examination preparation</strong>. You may view, reference, and print individual pages for self-study.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                3. Prohibited Activities &amp; Security Measures
              </h2>
              <p>
                To maintain uptime and platform integrity for all students, users agree not to engage in:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#524E48]">
                <li>Automated mass scraping or crawling using bots that degrades server infrastructure.</li>
                <li>Attempting to bypass security headers, inject malicious scripts, or probe for vulnerabilities.</li>
                <li>Conducting denial-of-service (DoS) or distributed denial-of-service (DDoS) operations.</li>
                <li>Re-packaging, re-selling, or redistributing the aggregated materials commercially under another paid service.</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#524E48]">
                Violation of these conditions may result in immediate IP-based blocking and enforcement under the Indian Information Technology Act, 2000.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                4. Intellectual Property
              </h2>
              <p>
                All original software source code, interface designs, mathematical diagrams, step-by-step problem derivations, and editorial analyses are the intellectual property of True Exam Preparation. Third-party examination identifiers remain the property of their respective owners.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                5. Disclaimer of Warranties &amp; Limitation of Liability
              </h2>
              <p>
                This platform is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. Under no circumstances shall TEP or its authors be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this educational resource.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="w-full bg-[#EFECE6] border-t border-[#D8D2C7] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#524E48]">
          <BrandLogo href="/" size="sm" />
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/disclaimer" className="hover:text-[#151515] transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-[#151515] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#151515] font-semibold underline">
              Terms of Service
            </Link>
            <Link href="/portal" className="hover:text-[#151515] transition-colors">
              Study Portal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
