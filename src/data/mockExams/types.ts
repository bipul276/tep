export interface MockOption {
  id: string; // e.g. "A", "B", "C", "D" or "1", "2", "3", "4"
  text: string;
}

export interface MockQuestion {
  id: number;
  originalNumber: number;
  question: string;
  options: MockOption[];
  correctOption: string; // "A" | "B" | "C" | "D" or "1" | "2" | "3" | "4"
  explanation: string;
  unit: string;
  topicTitle?: string;
  topicSlug?: string; // Slug linking to our CS MDX modules (optional for General Paper)
  examType: "UGC-NET" | "STET" | "BPSC-TRE";
  category?: string; // e.g. "Computer Science & Applications", "Art of Teaching", "General Skills"
  isGeneralPaper?: boolean; // True for Paper 1 / General Pedagogy & Aptitude
}

export interface MockExam {
  id: string; // "ugc-net" | "bihar-stet"
  title: string;
  subtitle: string;
  examType: "UGC-NET" | "STET" | "BPSC-TRE";
  date: string;
  totalQuestions: number;
  durationMinutes: number;
  totalMarks: number;
  description: string;
  syllabusCovered: string[];
  questions: MockQuestion[];
}
