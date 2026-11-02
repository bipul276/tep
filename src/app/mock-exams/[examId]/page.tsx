import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import { ALL_MOCK_EXAMS, getMockExamById } from "@/data/mockExams";
import MockExamViewer from "@/components/MockExamViewer";

export function generateStaticParams() {
  return ALL_MOCK_EXAMS.map((exam) => ({ examId: exam.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ examId: string }>;
}): Promise<Metadata> {
  const { examId } = await params;
  const exam = getMockExamById(examId);
  if (!exam) return { title: "Exam Not Found" };

  return {
    title: `${exam.title} — Official Mock Examination`,
    description: exam.description,
  };
}

export default async function MockExamPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  const exam = getMockExamById(examId);

  if (!exam) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F9F9F8] flex items-center justify-center p-8 text-sm text-[#787774]">
          Loading Examination Paper...
        </div>
      }
    >
      <MockExamViewer exam={exam} />
    </Suspense>
  );
}
