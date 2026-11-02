import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllSlugs,
  getTopicContent,
  getAdjacentTopics,
} from "@/lib/content";
import type { Priority } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { QuizBlock } from "@/components/QuizBlock";
import { TopicCompletionButton } from "@/components/TopicCompletionButton";
import { TableOfContents, FloatingScrollTop } from "@/components/TableOfContents";
import { TopicNavigation } from "@/components/TopicNavigation";

// ─── Generate static paths for all MDX files ─────────────────────────
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ─── Generate metadata for SEO ───────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicContent(slug);
  if (!topic) return { title: "Not Found" };

  return {
    title: `${topic.title} — True Exam Preparation CS`,
    description: topic.description,
    keywords: topic.tags,
  };
}

// ─── Priority Badge ──────────────────────────────────────────────────
function PriorityBadge({ priority }: { priority: Priority }) {
  const classes: Record<Priority, string> = {
    High: "bg-[#FAECE9] text-[#8F3B2C] border-[#F3CDC6]",
    Med: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
    Low: "bg-[#EBF3ED] text-[#2E5C3B] border-[#D1E5D5]",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wide border ${classes[priority]}`}
    >
      {priority} Priority
    </span>
  );
}

// ─── Custom MDX Components ───────────────────────────────────────────
function extractHeadings(source: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    const cleanText = rawText
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/<[^>]+>/g, "");
    const id = cleanText
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/^-+|-+$/g, "");

    headings.push({ id, text: cleanText, level });
  }

  return headings;
}

const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === "string" ? children : "";
    const id = text
      ? text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/^-+|-+$/g, "")
      : undefined;
    return (
      <h2
        id={id}
        className="scroll-mt-24 text-xl sm:text-2xl font-bold text-[#151515] mt-10 mb-4 border-b border-[#D8D2C7] pb-2.5 tracking-tight"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === "string" ? children : "";
    const id = text
      ? text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/^-+|-+$/g, "")
      : undefined;
    return (
      <h3
        id={id}
        className="scroll-mt-24 text-base sm:text-lg font-bold text-[#151515] mt-6 mb-3 tracking-tight"
        {...props}
      >
        {children}
      </h3>
    );
  },
  // Custom Callout Box
  Callout: ({
    type = "note",
    children,
  }: {
    type?: "note" | "warning" | "tip" | "important";
    children: React.ReactNode;
  }) => {
    const styles: Record<string, string> = {
      note: "border-[#D8D2C7] border-l-[#151515] bg-[#FAF8F5]",
      warning: "border-[#F5C7BC] border-l-[#9A3412] bg-[#FAF0ED]",
      tip: "border-[#C3DCC8] border-l-[#2D6A4F] bg-[#EDF6EE]",
      important: "border-[#E3D8ED] border-l-[#5E3587] bg-[#F7F2FA]",
    };
    const tags: Record<string, string> = {
      note: "[CONCEPT NOTE]",
      warning: "[EXAM WARNING]",
      tip: "[HIGH-YIELD TIP]",
      important: "[CORE FORMULA / THEOREM]",
    };
    return (
      <div className={`border p-4 my-5 border-l-4 shadow-xs ${styles[type]}`}>
        <div className="font-mono text-[10px] font-bold text-[#151515] uppercase mb-1">
          {tags[type]}
        </div>
        <div className="text-xs sm:text-sm leading-relaxed text-[#2F3437]">{children}</div>
      </div>
    );
  },
  // Exam-Specific Focus Note
  ExamNote: ({
    exam,
    children,
  }: {
    exam: "UGC-NET" | "STET" | "Both";
    children: React.ReactNode;
  }) => {
    const label = exam === "Both" ? "NET & STET" : exam;
    return (
      <div className="my-5 p-4 bg-[#FAF8F5] border border-[#DDD7CD] shadow-xs">
        <span className="inline-block px-2 py-0.5 bg-[#151515] text-white font-mono text-[10px] font-bold uppercase mb-2">
          [{label} EXAM FOCUS]
        </span>
        <div className="text-xs sm:text-sm leading-relaxed text-[#2F3437]">{children}</div>
      </div>
    );
  },
  // W3Schools-Style Interactive PYQ Exercise Block
  QuizBlock,
  // Backward compatibility for existing Quiz tags mapped to QuizBlock
  Quiz: QuizBlock,
};

// ─── Study Reading Page ──────────────────────────────────────────────
export default async function DashboardSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicContent(slug);
  if (!topic) notFound();

  // Extract outline headings for Table of Contents
  const headings = extractHeadings(topic.content);

  // Sequential adjacent topics for book-like navigation
  const { prev, next, unitIndex, unitTotal } = getAdjacentTopics(slug);

  return (
    <article className="min-w-0">
      {/* ── Article Header ──────────────────────────────────────── */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 font-mono text-xs text-[#787774]">
          <span className="bg-[#EFECE6] text-[#151515] px-2.5 py-0.5 border border-[#D8D2C7] font-medium">
            Topic {unitIndex} of {unitTotal} in {topic.unit.split(":")[0]}
          </span>
          <TopicCompletionButton slug={slug} />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-4 text-black">
          {topic.title}
        </h1>

        {/* Meta Pills Row */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <PriorityBadge priority={topic.priority} />

          <span className="inline-flex items-center px-2 py-0.5 font-mono text-[11px] font-bold bg-[#F3EFF8] text-[#5E3F78] border border-[#E3D8ED]">
            [EXAM: {topic.examType === "Both" || topic.examType === "Common" ? "COMMON" : topic.examType}]
          </span>

          <span className="font-mono text-[11px] text-[#787774] bg-white px-2 py-0.5 border border-black font-semibold">
            [TIME: {topic.readTime}]
          </span>

          <Link
            href="/formulas"
            className="font-mono text-[11px] text-black font-bold hover:bg-black hover:text-white px-2 py-0.5 border border-black transition-none"
          >
            [VIEW UNIT FORMULAS →]
          </Link>
        </div>

        {/* Tags */}
        {topic.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 font-mono text-[11px]">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-700 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Interactive In-Article Table of Contents */}
        <div className="mt-6">
          <TableOfContents headings={headings} />
        </div>

        <hr className="mt-6 border-b-2 border-black" />
      </header>

      {/* ── MDX Content (Centered Technical Reading Column) ────────── */}
      <section className="prose max-w-none text-[#2F3437] leading-relaxed">
        <MDXRemote
          source={topic.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath, remarkGfm],
              rehypePlugins: [rehypeKatex, rehypeHighlight],
            },
          }}
        />
      </section>

      {/* ── Sequential Topic Navigation ────────────────────────────── */}
      <div className="mt-12 pt-8 border-t-2 border-black">
        <TopicNavigation
          prev={prev}
          next={next}
          unitIndex={unitIndex}
          unitTotal={unitTotal}
          unitName={topic.unit}
        />
      </div>

      {/* ── Floating Scroll to Top Button ─────────────────────────── */}
      <FloatingScrollTop />
    </article>
  );
}
