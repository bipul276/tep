# scripts/assemble_mock.py
import json
import os
from part1_data import part1_questions
from part2_data import part2_questions
from part3a_data import part3a_questions
from part3b_data import part3b_questions

all_questions = part1_questions + part2_questions + part3a_questions + part3b_questions

print(f"Total questions: {len(all_questions)}")
assert len(all_questions) == 150, f"Expected 150 questions, got {len(all_questions)}"

# Validation
for idx, q in enumerate(all_questions, 1):
    assert q["id"] == idx, f"Mismatch ID at index {idx}: {q['id']}"
    assert q["originalNumber"] == idx, f"Mismatch originalNumber at index {idx}: {q['originalNumber']}"
    assert len(q["options"]) == 5, f"Question {idx} does not have 5 options: {len(q['options'])}"
    assert q["correctOption"] in ["A", "B", "C", "D", "E"], f"Invalid correctOption in Q{idx}: {q['correctOption']}"
    assert len(q["explanation"]) > 10, f"Explanation too short in Q{idx}"
    assert q["examType"] == "BPSC-TRE", f"Invalid examType in Q{idx}"
    
    if idx <= 70:
        assert q.get("isGeneralPaper") is True, f"Q{idx} should have isGeneralPaper: True"
    else:
        assert "topicSlug" in q, f"Q{idx} missing topicSlug"
        assert "topicTitle" in q, f"Q{idx} missing topicTitle"
        # Verify topicSlug file exists
        slug_path = os.path.join("content", f"{q['topicSlug']}.mdx")
        assert os.path.exists(slug_path), f"Topic file does not exist: {slug_path} for Q{idx}"

print("All 150 questions validated successfully!")

# Format TypeScript output
output_path = os.path.join("src", "data", "mockExams", "bpscTreMock.ts")

ts_content = """import { MockExam } from "./types";

/**
 * BPSC TRE 4.0 Computer Science Official Mock Examination
 * Based on Authentic Question Paper from BPSC TRE 3.0 (Class 11-12 Uchcha Madhyamik)
 * Subject Code: 13/HV/M-2024-26/HS-526-E (Computer Science)
 *
 * Full 150 Questions with Signature BPSC 5-Option Format:
 * - Part I: Language Qualifying (Q1 to Q30) — English (Q1–Q8) & Hindi (Q9–Q30)
 * - Part II: General Studies (Q31 to Q70) — Elementary Math, Physics, Bio, INM & Bihar History
 * - Part III: Computer Science (Q71 to Q150) — Full 15 Syllabus Units mapped to authentic CS modules
 */
export const BPSC_TRE_MOCK_EXAM: MockExam = {
  id: "bpsc-tre-4",
  title: "BPSC TRE 4.0 Computer Science Official Mock Examination",
  subtitle: "Official TRE 3.0 Paper (Class 11-12 Higher Secondary) — Full 150 Questions with Solutions",
  examType: "BPSC-TRE",
  date: "Official TRE 3.0 (Series E)",
  totalQuestions: 150,
  durationMinutes: 150,
  totalMarks: 150,
  description: "Authentic Bihar Public Service Commission (BPSC) School Teacher Examination (TRE) Class 11-12 Computer Science paper. Features the signature BPSC 5-option format (A, B, C, D-More than one of the above, E-None of the above) across Language (30 Qs), General Studies (40 Qs), and domain Computer Science (80 Qs) with direct syllabus topic mappings.",
  syllabusCovered: [
    "Part I: Language Qualifying (English & Hindi)",
    "Part II: General Studies (Elementary Math, General Science, INM, Geography, Bihar GK)",
    "Unit 1: Digital Logic & Discrete Structures",
    "Unit 2: Computer Organization & Architecture",
    "Unit 3: Programming & Data Structures (C/C++, Trees, Stacks, Queues)",
    "Unit 4: Algorithms (Searching, Sorting, Big-O, NP-Completeness)",
    "Unit 5: Operating System (Scheduling, Virtual Memory, Paging, Disk FCFS)",
    "Unit 6: Database Management System (SQL, Normalization, Keys, Distributed DBMS)",
    "Unit 7: Computer Networks (OSI, TCP/IP, Subnetting, Routing, Protocols)",
    "Unit 8: Software Engineering (SDLC, Testing, V&V, Prototyping)",
    "Unit 9: Object-Oriented Programming (OOP Pillars, Java Inheritance, Access Modifiers)",
    "Unit 10: Web-Based Application Development (HTML5, Backend Architecture)",
    "Unit 11: Theory of Computation (Turing Machines, Undecidability, Halting Problem)",
    "Unit 12: Internet of Things (IoT Protocols, MQTT, BLE)",
    "Unit 13: Artificial Intelligence (Search, Supervised Learning, Decision Trees)",
    "Unit 14: Fundamentals of E-Commerce (B2C, C2C Models)",
    "Unit 15: Computer Graphics & Multimedia (Authoring Tools, Formats)"
  ],
  questions: """

ts_content += json.dumps(all_questions, indent=2, ensure_ascii=False)
ts_content += "\n};\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Generated {output_path} successfully ({os.path.getsize(output_path)} bytes).")
