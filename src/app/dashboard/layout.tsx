import React from "react";
import { getSyllabusTree } from "@/lib/content";
import { DocLayoutClient } from "@/components/DocLayoutClient";

export const metadata = {
  title: "Study Documentation — UGC NET & STET CS",
  description:
    "Comprehensive 2-column technical documentation reading interface for 54 computer science syllabus modules.",
};

/**
 * app/dashboard/layout.tsx — Classic 2-column documentation layout
 * Persistent Left Sidebar (w-72) + Centered Reading Column (max-w-4xl) + Breadcrumbs.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const syllabusTree = getSyllabusTree();

  return (
    <DocLayoutClient syllabus={syllabusTree}>
      {children}
    </DocLayoutClient>
  );
}
