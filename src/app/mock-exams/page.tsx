import { Metadata } from "next";
import MockExamHub from "@/components/MockExamHub";

export const metadata: Metadata = {
  title: "Official Mock Examination Papers | UGC NET & Bihar STET Computer Science",
  description:
    "Practice official past examination papers for UGC NET Computer Science (Questions 31–130) and Bihar STET Paper 2 (150 Questions) with instant solutions and topic brush-up links.",
};

export default function MockExamsPage() {
  return <MockExamHub />;
}
