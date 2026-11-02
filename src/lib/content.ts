/**
 * content.ts — Core utility for reading MDX frontmatter and metadata.
 *
 * Scans the /content directory for .mdx files, parses YAML frontmatter
 * via gray-matter, and returns typed metadata objects for the dashboard.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ─── Content Directory ───────────────────────────────────────────────
const CONTENT_DIR = path.join(process.cwd(), "content");

// ─── Type Definitions ────────────────────────────────────────────────
export type ExamType = "Common" | "UGC-NET" | "STET" | "Both";
export type Priority = "High" | "Med" | "Low";

export interface TopicMeta {
  slug: string;
  title: string;
  unit: string;
  examType: ExamType;
  priority: Priority;
  readTime: string;
  description: string;
  tags: string[];
}

export interface TopicContent extends TopicMeta {
  content: string; // raw MDX string (without frontmatter)
}

// ─── Syllabus Units ──────────────────────────────────────────────────
import { SYLLABUS_UNITS, isSameUnit, getUnitNumber, getUnitCode } from "./units";
export { SYLLABUS_UNITS, isSameUnit, getUnitNumber, getUnitCode };
export type { SyllabusUnit } from "./units";

export interface SyllabusUnitGroup {
  unitTitle: string;
  unitCode: string;
  topics: TopicMeta[];
}

// ─── Core Functions ──────────────────────────────────────────────────

/**
 * Returns all .mdx filenames (without extension) from /content.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Reads a single MDX file's frontmatter and returns typed metadata.
 * Returns null if the file doesn't exist.
 */
export function getTopicMeta(slug: string): TopicMeta | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  // Normalize "Both" to "Common"
  let examType: ExamType = "Common";
  if (data.examType === "UGC-NET") examType = "UGC-NET";
  else if (data.examType === "STET") examType = "STET";
  else if (data.examType === "Both" || data.examType === "Common") examType = "Common";

  return {
    slug,
    title: data.title ?? "Untitled",
    unit: data.unit ?? "Uncategorized",
    examType,
    priority: (data.priority as Priority) ?? "Med",
    readTime: data.readTime ?? "15 min",
    description: data.description ?? "",
    tags: (data.tags as string[]) ?? [],
  };
}

/**
 * Reads a single MDX file and returns metadata + raw MDX content.
 */
export function getTopicContent(slug: string): TopicContent | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  let examType: ExamType = "Common";
  if (data.examType === "UGC-NET") examType = "UGC-NET";
  else if (data.examType === "STET") examType = "STET";
  else if (data.examType === "Both" || data.examType === "Common") examType = "Common";

  return {
    slug,
    title: data.title ?? "Untitled",
    unit: data.unit ?? "Uncategorized",
    examType,
    priority: (data.priority as Priority) ?? "Med",
    readTime: data.readTime ?? "15 min",
    description: data.description ?? "",
    tags: (data.tags as string[]) ?? [],
    content,
  };
}

/**
 * Returns metadata for ALL topics, sorted by unit number then priority.
 */
export function getAllTopicsMeta(): TopicMeta[] {
  const slugs = getAllSlugs();
  const priorityOrder: Record<Priority, number> = {
    High: 0,
    Med: 1,
    Low: 2,
  };

  return slugs
    .map((slug) => getTopicMeta(slug))
    .filter((meta): meta is TopicMeta => meta !== null)
    .sort((a, b) => {
      const uDiff = getUnitNumber(a.unit) - getUnitNumber(b.unit);
      if (uDiff !== 0) return uDiff;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
}

/**
 * Returns topics filtered by exam type.
 * "Common" → topics with examType "Common" or "Both"
 * "UGC NET Only" → topics with examType "UGC-NET"
 * "STET Only" → topics with examType "STET"
 */
export function getTopicsByExamType(
  filter: "Common" | "UGC NET Only" | "STET Only"
): TopicMeta[] {
  const all = getAllTopicsMeta();
  if (filter === "Common") {
    return all.filter((t) => t.examType === "Common" || t.examType === "Both");
  }
  if (filter === "UGC NET Only") {
    return all.filter((t) => t.examType === "UGC-NET");
  }
  if (filter === "STET Only") {
    return all.filter((t) => t.examType === "STET");
  }
  return all;
}

/**
 * Returns topics filtered by unit name.
 */
export function getTopicsByUnit(unit: string): TopicMeta[] {
  return getAllTopicsMeta().filter((t) => isSameUnit(t.unit, unit));
}

/**
 * Searches topics by query string (matches title, description, tags, unit).
 */
export function searchTopics(query: string): TopicMeta[] {
  const q = query.toLowerCase().trim();
  if (!q) return getAllTopicsMeta();

  return getAllTopicsMeta().filter((t) => {
    const searchable = [
      t.title,
      t.description,
      t.unit,
      ...t.tags,
    ]
      .join(" ")
      .toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Returns a map of unit → topic count for sidebar stats.
 */
export function getUnitTopicCounts(): Record<string, number> {
  const all = getAllTopicsMeta();
  const counts: Record<string, number> = {};
  for (const unit of SYLLABUS_UNITS) {
    counts[unit] = all.filter((t) => isSameUnit(t.unit, unit)).length;
  }
  return counts;
}

/**
 * Returns aggregate stats for the dashboard.
 */
export function getDashboardStats() {
  const all = getAllTopicsMeta();
  return {
    totalTopics: all.length,
    highPriority: all.filter((t) => t.priority === "High").length,
    medPriority: all.filter((t) => t.priority === "Med").length,
    lowPriority: all.filter((t) => t.priority === "Low").length,
    commonTopics: all.filter((t) => t.examType === "Common" || t.examType === "Both").length,
    ugcNetOnly: all.filter((t) => t.examType === "UGC-NET").length,
    stetOnly: all.filter((t) => t.examType === "STET").length,
  };
}

/**
 * Returns sequential previous & next topics in syllabus order and unit progress index.
 */
export function getAdjacentTopics(slug: string): {
  prev: TopicMeta | null;
  next: TopicMeta | null;
  unitIndex: number;
  unitTotal: number;
} {
  const all = getAllTopicsMeta();
  const currentIndex = all.findIndex((t) => t.slug === slug);
  if (currentIndex === -1) {
    return { prev: null, next: null, unitIndex: 1, unitTotal: 1 };
  }

  const prev = currentIndex > 0 ? all[currentIndex - 1] : null;
  const next = currentIndex < all.length - 1 ? all[currentIndex + 1] : null;

  const currentTopic = all[currentIndex];
  const sameUnitTopics = all.filter((t) => isSameUnit(t.unit, currentTopic.unit));
  const unitIndex = sameUnitTopics.findIndex((t) => t.slug === slug) + 1;

  return {
    prev,
    next,
    unitIndex: unitIndex > 0 ? unitIndex : 1,
    unitTotal: sameUnitTopics.length,
  };
}

/**
 * Returns complete 15-unit syllabus tree with grouped topics for technical documentation sidebars.
 */
export function getSyllabusTree(): SyllabusUnitGroup[] {
  const all = getAllTopicsMeta();
  return SYLLABUS_UNITS.map((unit) => ({
    unitTitle: unit,
    unitCode: getUnitCode(unit),
    topics: all.filter((t) => isSameUnit(t.unit, unit)),
  }));
}


