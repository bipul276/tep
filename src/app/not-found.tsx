import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFECE6] p-6 text-[#151515]">
      <div className="mb-6">
        <BrandLogo href="/" size="md" />
      </div>
      <div className="max-w-md w-full border border-[#D8D2C7] bg-white p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-4 font-mono text-xs">
          <span className="bg-[#151515] text-white px-2 py-0.5 font-bold uppercase">
            [404: NOT FOUND]
          </span>
          <span className="text-[#746F68] font-bold">{"// ROUTE ERROR"}</span>
        </div>

        <h1 className="text-2xl font-bold text-[#151515] tracking-tight mb-3">
          Topic or Page Not Found
        </h1>

        <p className="text-sm text-[#524E48] mb-6 leading-relaxed">
          The requested study module, mock test, or documentation page could not be located in the current syllabus database.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 font-sans text-xs font-semibold">
          <Link
            href="/portal"
            className="flex-1 text-center py-2.5 px-4 bg-[#151515] text-white hover:bg-black transition-colors"
          >
            Go to Study Portal →
          </Link>
          <Link
            href="/"
            className="flex-1 text-center py-2.5 px-4 bg-white text-[#151515] border border-[#D8D2C7] hover:border-[#151515] transition-colors"
          >
            Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}
