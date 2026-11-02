import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Examination Disclaimer — Fair Use Notice",
  description:
    "Official non-affiliation disclaimer and copyright fair use notice for True Exam Preparation (TEP) Computer Science.",
};

export default function DisclaimerPage() {
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
        {/* Breadcrumb / Category Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#746F68] mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#151515] font-bold">Legal &amp; Examination Disclaimer</span>
        </div>

        {/* Legal Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#D8D2C7] pb-3">
          <Link
            href="/disclaimer"
            className="px-4 py-2 bg-[#151515] text-white text-xs font-bold uppercase tracking-wider"
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
            className="px-4 py-2 bg-white text-[#524E48] hover:text-[#151515] border border-[#D8D2C7] text-xs font-medium uppercase tracking-wider transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        {/* Document Card */}
        <div className="bg-white border border-[#D8D2C7] p-6 sm:p-10 shadow-xs">
          <div className="border-b border-[#EAE5DF] pb-6 mb-8">
            <span className="font-mono text-xs font-bold text-[#FF6A35] uppercase tracking-wider block mb-1">
              {"// STATUTORY NOTICE & COMPLIANCE"}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight">
              Legal &amp; Examination Disclaimer
            </h1>
            <p className="text-xs sm:text-sm text-[#746F68] mt-2 font-mono">
              Last Updated &amp; Effective: November 2026
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-[#37352F] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                1. Independent Non-Affiliation Declaration
              </h2>
              <p>
                <strong>True Exam Preparation Computer Science (TEP)</strong> is an independent, non-commercial open educational resource designed to assist aspirants in mastering computer science concepts.
              </p>
              <div className="p-4 bg-[#FAF8F5] border border-[#E2DCD3] text-xs sm:text-sm font-medium text-[#151515] leading-relaxed">
                TEP is <strong>NOT affiliated with, endorsed by, sponsored by, or connected in any manner</strong> with the <strong>National Testing Agency (NTA)</strong>, the <strong>University Grants Commission (UGC)</strong>, the <strong>Bihar School Examination Board (BSEB)</strong>, the <strong>Ministry of Education (Govt. of India)</strong>, or any government body, state agency, or statutory examination authority.
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                2. Trademark &amp; Nominative Fair Use
              </h2>
              <p>
                The terms &ldquo;UGC NET&rdquo;, &ldquo;NTA UGC-NET/JRF&rdquo;, &ldquo;Bihar STET&rdquo;, &ldquo;BSEB STET Paper II&rdquo;, and related examination acronyms are registered and unregistered trademarks belonging exclusively to their respective statutory governing bodies.
              </p>
              <p>
                Any references to these examinations, examination formats, syllabus unit designations, and previous year examination patterns on this platform are used <strong>strictly for nominative, descriptive, and educational identification purposes</strong> under the Fair Dealing provisions of the <strong>Indian Copyright Act, 1957 (Section 52(1)(a) &amp; Section 52(1)(h))</strong>.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                3. Accuracy of Educational Content &amp; No Guarantee
              </h2>
              <p>
                All 54 syllabus documentation modules, mathematical formula derivations, step-by-step problem explanations, and computer-based mock tests (CBT) are prepared with rigorous academic diligence based on standard university computer science literature.
              </p>
              <p>
                However, TEP makes no express or implied warranty regarding the exact replication of future questions, absolute typographical perfection, or guaranteed qualification scores in official state or national examinations. Aspirants are advised to consult official notifications published on official portals (e.g., <span className="font-mono text-xs">ugcnet.nta.ac.in</span> and <span className="font-mono text-xs">bsebstet2024.com</span>) for official dates, eligibility criteria, and examination guidelines.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                4. Previous Year Questions (PYQs) &amp; Exercise Solutions
              </h2>
              <p>
                Previous year questions (PYQs) included on this portal are publicly released questions discussed under educational review. All detailed mathematical steps, truth tables, algorithmic time complexity derivations, and explanatory rationales represent original educational commentary created to assist learners in self-evaluation.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                5. Contact &amp; Academic Inquiries
              </h2>
              <p>
                If you have questions regarding syllabus mapping, academic corrections, or copyright notices, you may contact the academic maintainers via the open-source repository or official study portal channels.
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
            <Link href="/disclaimer" className="text-[#151515] font-semibold underline">
              Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-[#151515] transition-colors">
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
