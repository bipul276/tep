import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * BrandLogo — Official Neo-Brutalist Header Logo for True Exam Preparation Computer Science
 * Features the square TEP icon with checkmark, the bold "TEP" mark,
 * and "True Exam Preparation for NET & STET" in smaller monospace font directly underneath.
 */
export function BrandLogo({
  href = "/",
  className = "",
  size = "md",
}: BrandLogoProps) {
  const iconSize = size === "sm" ? 30 : size === "lg" ? 44 : 36;
  const mainTextSize =
    size === "sm"
      ? "text-base sm:text-lg"
      : size === "lg"
      ? "text-2xl sm:text-3xl"
      : "text-lg sm:text-xl";
  const subTextSize =
    size === "sm"
      ? "text-[8px] sm:text-[9px]"
      : size === "lg"
      ? "text-[10px] sm:text-[11px]"
      : "text-[9px] sm:text-[10px]";

  const content = (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official TEP Icon Mark */}
      <div className="relative shrink-0 border border-[#D2CCC4] bg-white rounded-none p-0.5 shadow-xs overflow-hidden">
        <Image
          src="/icon.png"
          alt="True Exam Preparation Icon"
          width={iconSize}
          height={iconSize}
          priority
          className="object-contain"
        />
      </div>

      {/* Stacked Editorial Branding Text */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-mono font-black tracking-tight text-[#151515] leading-none ${mainTextSize}`}
          >
            TEP
          </span>
          <span className="font-mono text-[10px] sm:text-xs font-black bg-[#FF6A35] text-white px-1.5 py-0.5 leading-none">
            CS
          </span>
        </div>
        <span
          className={`font-mono font-semibold text-[#6C6760] tracking-tight uppercase leading-tight mt-1 whitespace-nowrap ${subTextSize}`}
        >
          True Exam Preparation for NET &amp; STET
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group inline-flex items-center transition-none hover:opacity-90 active:translate-x-[1px] active:translate-y-[1px]"
      >
        {content}
      </Link>
    );
  }

  return content;
}
