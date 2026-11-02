"use client";

import { useStudyProgress } from "@/lib/progress";

export function TopicCompletionButton({ slug }: { slug: string }) {
  const { isCompleted, toggleCompleted, isLoaded } = useStudyProgress();
  const completed = isLoaded && isCompleted(slug);

  return (
    <button
      onClick={() => toggleCompleted(slug)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 border ${
        completed
          ? "bg-[#EBF3ED] text-[#2E5C3B] border-[#D1E5D5] hover:bg-[#E1EDE4]"
          : "bg-white text-[#57564F] border-[#E0DED9] hover:border-[#2F3437] hover:text-[#2F3437]"
      }`}
      title={completed ? "Mark as unread" : "Mark as completed"}
    >
      <span className="text-sm">{completed ? "[CORRECT]" : "◯"}</span>
      <span>{completed ? "Completed" : "Mark as Read"}</span>
    </button>
  );
}
