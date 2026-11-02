"use client";

import React from "react";

interface FormattedExplanationProps {
  explanation: string;
}

interface Segment {
  type: "step" | "formula" | "calculation" | "conclusion" | "note" | "general";
  header?: string;
  body: string;
}

/**
 * Parses inline formatting like **bold**, `code`, and clean arrows
 */
function renderInlineFormatting(text: string): React.ReactNode[] {
  // Regex to match **bold** or `code`
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      return (
        <strong key={idx} className="font-bold text-[#2F3437]">
          {inner}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      const inner = part.slice(1, -1);
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded bg-[#F4F3EF] border border-[#E0DED9] font-mono text-[11px] sm:text-xs text-[#8F3B2C] font-semibold"
        >
          {inner}
        </code>
      );
    }
    // Clean up arrows in plain text
    const cleaned = part
      .replace(/<->/g, "⟷")
      .replace(/<=>/g, "⟺")
      .replace(/->/g, "→")
      .replace(/=>/g, "⇒");

    return <React.Fragment key={idx}>{cleaned}</React.Fragment>;
  });
}

export function FormattedExplanation({ explanation }: FormattedExplanationProps) {
  if (!explanation) return null;

  // 1. Normalize line breaks
  let normalized = explanation.replace(/\\n/g, "\n").trim();

  // 2. Intelligent splitting:
  // If no newlines exist but text has "Step 1 ... Step 2 ...", split on step boundaries
  if (!normalized.includes("\n")) {
    normalized = normalized.replace(
      /([.!?])\s+(?=(?:Step\s*\d+|Formula|Calculation|Recall|Note|Conclusion|Hence,?\s*Option):?)/gi,
      "$1\n\n"
    );
  }

  // Split on double newlines or single newline before standard headers
  const rawSegments = normalized
    .split(/\n\n+|\n(?=(?:Step\s*\d+|[0-9]+\.|\bFormula\b|\bCalculation\b|\bKey Takeaway\b|\bConclusion\b|\bRecall\b|\bNote\b|\bOfficial Key\b|\bHence\b):?)/i)
    .map((s) => s.trim())
    .filter(Boolean);

  const parsedSegments: Segment[] = rawSegments.map((seg) => {
    // Check for Step header: e.g. "Step 1 (TLB Hit):", "Step 2:", "1. On TLB Hit:"
    const stepMatch = seg.match(/^(Step\s+\d+(?:\s*\([^)]+\))?|[0-9]+\.)\s*:\s*([\s\S]*)/i);
    if (stepMatch) {
      return {
        type: "step",
        header: stepMatch[1].trim(),
        body: stepMatch[2].trim(),
      };
    }

    // Check for Formula header
    const formulaMatch = seg.match(/^(Formula|EMAT Formula|Key Formula|Mathematical Rule)\s*:\s*([\s\S]*)/i);
    if (formulaMatch) {
      return {
        type: "formula",
        header: formulaMatch[1].trim(),
        body: formulaMatch[2].trim(),
      };
    }

    // Check for Calculation / Derivation
    const calcMatch = seg.match(/^(Calculation|Derivation|Analysis|Working)\s*:\s*([\s\S]*)/i);
    if (calcMatch) {
      return {
        type: "calculation",
        header: calcMatch[1].trim(),
        body: calcMatch[2].trim(),
      };
    }

    // Check for Conclusion / Answer
    const conclMatch = seg.match(/^(Conclusion|Official Key|Final Answer|Hence(?:,\s*Option\s+[A-D0-9])?)\s*:\s*([\s\S]*)/i);
    if (conclMatch) {
      return {
        type: "conclusion",
        header: conclMatch[1].trim(),
        body: conclMatch[2].trim(),
      };
    }

    // Check for Note / Recall
    const noteMatch = seg.match(/^(Note|Recall|Important Note|Key Concept|Tip)\s*:\s*([\s\S]*)/i);
    if (noteMatch) {
      return {
        type: "note",
        header: noteMatch[1].trim(),
        body: noteMatch[2].trim(),
      };
    }

    return {
      type: "general",
      body: seg,
    };
  });

  return (
    <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#3D4852]">
      {parsedSegments.map((segment, idx) => {
        if (segment.type === "step") {
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-[#E6E4DF] shadow-2xs hover:border-[#D5D3CE] transition-all"
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EBF3EC] text-[#2D6A4F] border border-[#C3DCC8] shrink-0 mt-0.5">
                  {segment.header}
                </span>
                <div className="flex-1 text-[#2F3437] font-medium leading-relaxed">
                  {renderInlineFormatting(segment.body)}
                </div>
              </div>
            </div>
          );
        }

        if (segment.type === "formula") {
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E0DED9] shadow-2xs"
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FAECE9] text-[#8F3B2C] border border-[#F3CDC6] shrink-0 mt-0.5">
                  [FORMULA] {segment.header || "Formula"}
                </span>
                <div className="flex-1 font-mono text-[12px] sm:text-xs text-[#2F3437] leading-relaxed">
                  {renderInlineFormatting(segment.body)}
                </div>
              </div>
            </div>
          );
        }

        if (segment.type === "calculation") {
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-[#E6E4DF] shadow-2xs"
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EEF0F2] text-[#2F3437] border border-[#D5D3CE] shrink-0 mt-0.5">
                  [DERIVATION] {segment.header || "Calculation"}
                </span>
                <div className="flex-1 text-[#2F3437] leading-relaxed">
                  {renderInlineFormatting(segment.body)}
                </div>
              </div>
            </div>
          );
        }

        if (segment.type === "conclusion") {
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#EBF3EC] border border-[#C3DCC8] shadow-2xs"
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#2D6A4F] text-white shrink-0 mt-0.5">
                  [KEY] {segment.header || "Conclusion"}
                </span>
                <div className="flex-1 text-[#1E4620] font-semibold leading-relaxed">
                  {renderInlineFormatting(segment.body)}
                </div>
              </div>
            </div>
          );
        }

        if (segment.type === "note") {
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#FAF4E5] border border-[#F2DEB5] shadow-2xs"
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#8F6A1E] text-white shrink-0 mt-0.5">
                  [CONCEPT] {segment.header || "Note"}
                </span>
                <div className="flex-1 text-[#5C4512] font-medium leading-relaxed">
                  {renderInlineFormatting(segment.body)}
                </div>
              </div>
            </div>
          );
        }

        return (
          <p key={idx} className="whitespace-pre-line leading-relaxed text-[#3D4852]">
            {renderInlineFormatting(segment.body)}
          </p>
        );
      })}
    </div>
  );
}
