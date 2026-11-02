/**
 * units.ts — Shared syllabus unit definitions and matching utilities.
 * Client-safe (no Node.js fs/path dependencies).
 *
 * Mapped to the official Bihar STET 2026 Paper II syllabus (15 Units)
 * and UGC-NET Computer Science syllabus.
 */

export const SYLLABUS_UNITS = [
  "Unit 1: Digital Logic & Discrete Structures",
  "Unit 2: Computer Organization & Architecture",
  "Unit 3: Programming & Data Structures",
  "Unit 4: Algorithms",
  "Unit 5: Operating System",
  "Unit 6: Database Management System",
  "Unit 7: Computer Networks",
  "Unit 8: Software Engineering",
  "Unit 9: Object-Oriented Programming",
  "Unit 10: Web-Based Application Development",
  "Unit 11: Theory of Computation & Compilers",
  "Unit 12: Internet of Things (IoT)",
  "Unit 13: Artificial Intelligence",
  "Unit 14: Fundamentals of E-Commerce",
  "Unit 15: Computer Graphics & Multimedia",
] as const;

export type SyllabusUnit = (typeof SYLLABUS_UNITS)[number];

/**
 * Normalizes and matches units, allowing exact matches or "Unit X" prefix matches.
 * E.g. "Unit 5: Operating Systems" matches "Unit 5: Operating System".
 */
export function isSameUnit(unitA?: string | null, unitB?: string | null): boolean {
  if (!unitA || !unitB) return false;
  if (unitA.trim().toLowerCase() === unitB.trim().toLowerCase()) return true;
  const prefixA = unitA.match(/^Unit\s+(\d+)/i);
  const prefixB = unitB.match(/^Unit\s+(\d+)/i);
  if (prefixA && prefixB && prefixA[1] === prefixB[1]) return true;
  return false;
}

/**
 * Helper to extract unit number (1 through 15) for numerical ordering.
 */
export function getUnitNumber(unit?: string | null): number {
  if (!unit) return 99;
  const match = unit.match(/^Unit\s+(\d+)/i);
  return match ? parseInt(match[1], 10) : 99;
}

/**
 * Returns formatted 3-character unit code: e.g. "U01" through "U15".
 */
export function getUnitCode(unit?: string | null): string {
  if (!unit) return "MOD";
  const num = getUnitNumber(unit);
  if (num >= 1 && num <= 99) {
    return `U${num.toString().padStart(2, "0")}`;
  }
  return "MOD";
}
