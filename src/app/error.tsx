"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { clearAllProgress } from "@/lib/progress";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    // Log unexpected runtime error safely
    console.error("Application Error Boundary caught exception:", error);
  }, [error]);

  const handleSafeReset = () => {
    try {
      clearAllProgress();
      setCleared(true);
      setTimeout(() => {
        router.push("/portal");
      }, 800);
    } catch {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#EFECE6] flex flex-col items-center justify-center p-4 sm:p-6 text-[#151515]">
      <div className="mb-6">
        <BrandLogo href="/" size="md" />
      </div>

      <div className="max-w-lg w-full bg-white border border-[#D8D2C7] p-6 sm:p-8 shadow-xs">
        {/* Status Header */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs">
          <span className="bg-[#FF6A35] text-white px-2 py-0.5 font-bold uppercase text-[11px]">
            [SYSTEM SAFEGUARD]
          </span>
          <span className="text-[#746F68] font-bold">{"// RECOVERY MODE"}</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-[#151515] tracking-tight mb-3">
          Rendering Exception Intercepted
        </h1>

        <p className="text-xs sm:text-sm text-[#524E48] leading-relaxed mb-6">
          The application safely caught an unexpected runtime error and prevented a complete crash. Your notes and exam progress in your browser are protected.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 font-sans text-xs font-semibold">
            <button
              onClick={() => reset()}
              className="flex-1 py-3 px-4 bg-[#151515] text-white hover:bg-black transition-colors text-center cursor-pointer"
            >
              Try Again ↻
            </button>
            <Link
              href="/portal"
              className="flex-1 py-3 px-4 bg-white text-[#151515] border border-[#D8D2C7] hover:border-[#151515] transition-colors text-center"
            >
              Go to Study Portal →
            </Link>
          </div>

          <button
            onClick={handleSafeReset}
            className="w-full py-2.5 px-4 bg-[#FAF8F5] text-[#9A3412] border border-[#F5C7BC] hover:bg-[#FDF3F0] transition-colors text-xs font-mono font-medium text-center cursor-pointer"
          >
            {cleared
              ? "✓ Browser Storage Reset. Redirecting to Portal..."
              : "Clear Corrupted Cache & Reset Safe Mode"}
          </button>
        </div>

        {/* Expandable Technical Details */}
        <div className="border-t border-[#EAE5DF] pt-4 font-mono text-xs">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-[#746F68] hover:text-[#151515] underline cursor-pointer"
          >
            {showDetails ? "Hide Technical Details ▲" : "View Technical Diagnostics ▼"}
          </button>

          {showDetails && (
            <div className="mt-3 p-3 bg-[#FAF8F5] border border-[#EAE5DF] text-[#524E48] text-[11px] overflow-x-auto leading-relaxed">
              <p className="font-bold text-[#151515] mb-1">
                Error: {error.message || "Unknown client runtime error"}
              </p>
              {error.digest && (
                <p className="text-[#888278]">Digest ID: {error.digest}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
