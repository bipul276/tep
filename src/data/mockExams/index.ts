import { MockExam } from "./types";
import { UGC_NET_MOCK_EXAM } from "./ugcNetMock";
import { BIHAR_STET_MOCK_EXAM } from "./stetMock";

export * from "./types";
export { UGC_NET_MOCK_EXAM } from "./ugcNetMock";
export { BIHAR_STET_MOCK_EXAM } from "./stetMock";

export const ALL_MOCK_EXAMS: MockExam[] = [
  UGC_NET_MOCK_EXAM,
  BIHAR_STET_MOCK_EXAM,
];

export function getMockExamById(id: string): MockExam | undefined {
  return ALL_MOCK_EXAMS.find((exam) => exam.id === id);
}
