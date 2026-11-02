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
  topicTitle: string;
  topicSlug: string; // Slug linking to our MDX modules, e.g. "tcp-ip-subnetting-cn"
  examType: "UGC-NET" | "STET";
  category?: string; // e.g. "Computer Science & Applications", "Art of Teaching", "General Skills"
}

export interface MockExam {
  id: string; // "ugc-net" | "bihar-stet"
  title: string;
  subtitle: string;
  examType: "UGC-NET" | "STET";
  date: string;
  totalQuestions: number;
  durationMinutes: number;
  totalMarks: number;
  description: string;
  syllabusCovered: string[];
  questions: MockQuestion[];
}
