import {
  getAllTopicsMeta,
  SYLLABUS_UNITS,
  getUnitTopicCounts,
  getDashboardStats,
} from "@/lib/content";
import Dashboard from "@/components/Dashboard";

export const metadata = {
  title: "Study Portal — UGC NET & STET Computer Science",
  description:
    "Interactive syllabus dashboard with 54 comprehensive study modules, formula sheets, and official PYQ mock examinations.",
};

/**
 * Main Study Portal Page (accessed via Landing Page CTA)
 */
export default function PortalPage() {
  const topics = getAllTopicsMeta();
  const unitCounts = getUnitTopicCounts();
  const stats = getDashboardStats();

  return (
    <Dashboard
      topics={topics}
      units={SYLLABUS_UNITS}
      unitCounts={unitCounts}
      stats={stats}
    />
  );
}
