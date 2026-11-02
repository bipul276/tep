import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Zero-Tracking Architecture",
  description:
    "Privacy Policy for True Exam Preparation (TEP) Computer Science. Zero cookies, zero personal data collection, 100% browser-local storage.",
};

export default function PrivacyPage() {
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
          <span className="text-[#151515] font-bold">Privacy Policy</span>
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
            className="px-4 py-2 bg-[#151515] text-white text-xs font-bold uppercase tracking-wider"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="px-4 py-2 bg-white text-[#524E48] hover:text-[#151515] border border-[#D8D2C7] text-xs font-medium uppercase tracking-wider transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        {/* Document Card */}
        <div className="bg-white border border-[#D8D2C7] p-6 sm:p-10 shadow-xs">
          <div className="border-b border-[#EAE5DF] pb-6 mb-8">
            <span className="font-mono text-xs font-bold text-[#FF6A35] uppercase tracking-wider block mb-1">
              {"// ZERO-DATA COLLECTION GUARANTEE"}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-[#746F68] mt-2 font-mono">
              Compliant with India DPDP Act 2023 &amp; IT Act 2000 • Effective: November 2026
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-[#37352F] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                1. Core Architectural Principle: Zero Personal Data Collection
              </h2>
              <p>
                True Exam Preparation Computer Science (TEP) is built from the ground up on a <strong>privacy-first, client-only architecture</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
                <div className="p-3 bg-[#FAF8F5] border border-[#E2DCD3]">
                  <span className="font-bold text-[#151515] block mb-1">[NO ACCOUNTS]</span>
                  No registration, email, phone number, or passwords required.
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#E2DCD3]">
                  <span className="font-bold text-[#151515] block mb-1">[NO COOKIES]</span>
                  Zero tracking cookies or cross-site profiling identifiers.
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#E2DCD3]">
                  <span className="font-bold text-[#151515] block mb-1">[NO SERVER DB]</span>
                  Zero database stores holding user answers or progress.
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                2. Use of Browser LocalStorage (Client-Side Only)
              </h2>
              <p>
                To provide persistent tracking without requiring login credentials, TEP uses standard HTML5 Web Storage (<code className="font-mono text-xs bg-[#F4F1EA] px-1.5 py-0.5 border border-[#E2DCD3]">localStorage</code>) directly on your device. This data includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#524E48]">
                <li><strong className="text-[#151515]">Completed Module Slugs:</strong> A list of the 54 topics you have marked as reviewed.</li>
                <li><strong className="text-[#151515]">Last Visited Topic:</strong> The most recent module you were reading to enable resume functionality.</li>
                <li><strong className="text-[#151515]">Mock Exam State:</strong> Real-time question answers and timers for active mock tests.</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#524E48]">
                This data <strong>never leaves your browser</strong> and is never transmitted to our servers or any third-party analytics provider.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                3. User Control &amp; Data Deletion
              </h2>
              <p>
                You retain complete, instantaneous control over all local data. You may delete your study records at any moment by clicking &ldquo;Reset Progress&rdquo; on the Study Portal, clearing your browser cache/cookies for this domain, or opening the site in an Incognito / Private browsing window.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                4. Third-Party CDNs &amp; Static Assets
              </h2>
              <p>
                Mathematical formulas are rendered client-side using KaTeX style definitions loaded from a reputable static CDN (<span className="font-mono text-xs">cdn.jsdelivr.net</span>). No analytics or advertising trackers are embedded into these resources.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                5. Legal Compliance
              </h2>
              <p>
                Because no personal identifiable information (PII) is acquired, processed, or transferred, TEP operates in strict compliance with the <strong>Digital Personal Data Protection Act (DPDP Act 2023, India)</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and international data protection standards.
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
            <Link href="/privacy" className="text-[#151515] font-semibold underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#151515] transition-colors">
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
