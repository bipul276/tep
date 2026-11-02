"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { MockExam } from "@/data/mockExams";
import { FormattedExplanation } from "./FormattedExplanation";

interface MockExamViewerProps {
  exam: MockExam;
  initialMode?: "practice" | "cbt";
}

type AnswerMap = Record<number, string>; // questionId -> selectedOptionId
type ReviewSet = Record<number, boolean>; // questionId -> boolean

export default function MockExamViewer({ exam, initialMode = "practice" }: MockExamViewerProps) {
  const [mode, setMode] = useState<"practice" | "cbt">(initialMode);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerMap>({});
  const [markedForReview, setMarkedForReview] = useState<ReviewSet>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(initialMode === "practice");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "ANSWERED" | "UNANSWERED" | "REVIEW">("ALL");
  const [paletteOpen, setPaletteOpen] = useState<boolean>(false);

  // CBT Timer
  const [secondsRemaining, setSecondsRemaining] = useState<number>(exam.durationMinutes * 60);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("mode") === "cbt") {
        setMode("cbt");
        setIsTimerActive(true);
        setShowExplanation(false);
      }
    }
  }, []);

  useEffect(() => {
    if (mode === "cbt" && !isSubmitted && isTimerActive) {
      const interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mode, isSubmitted, isTimerActive]);

  const formatTimer = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Distinct units / categories for filtering
  const sections = useMemo(() => {
    const set = new Set<string>();
    exam.questions.forEach((q) => {
      if (q.category) set.add(q.category);
      else if (q.unit) set.add(q.unit.split(":")[0]);
    });
    return Array.from(set);
  }, [exam]);

  const currentQuestion = exam.questions[currentIndex] || exam.questions[0];

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted && mode === "cbt") return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
    if (mode === "practice") {
      setShowExplanation(true);
    }
  };

  const handleClearResponse = () => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    if (mode === "practice") {
      setShowExplanation(!!userAnswers[exam.questions[index]?.id]);
    }
    setPaletteOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentIndex < exam.questions.length - 1) {
      goToQuestion(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      goToQuestion(currentIndex - 1);
    }
  };

  // Keyboard navigation shortcuts for CBT exam simulation
  useEffect(() => {
    if (isSubmitted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or select
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

      if (e.key === "ArrowRight" || e.key.toLowerCase() === "n") {
        if (currentIndex < exam.questions.length - 1) {
          goToQuestion(currentIndex + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "p") {
        if (currentIndex > 0) {
          goToQuestion(currentIndex - 1);
        }
      } else if (["1", "2", "3", "4"].includes(e.key)) {
        const optIdx = parseInt(e.key, 10) - 1;
        if (currentQuestion.options[optIdx]) {
          handleSelectOption(currentQuestion.options[optIdx].id);
        }
      } else if (["a", "b", "c", "d"].includes(e.key.toLowerCase())) {
        const char = e.key.toUpperCase();
        const found = currentQuestion.options.find((o) => o.id.toUpperCase() === char);
        if (found) {
          handleSelectOption(found.id);
        }
      } else if (e.key.toLowerCase() === "m" && mode === "cbt") {
        handleToggleReview();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, exam.questions, currentQuestion, mode, isSubmitted]);

  // Stats calculation
  const scoreStats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    exam.questions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (!ans) {
        unattempted++;
      } else if (ans.toUpperCase() === q.correctOption.toUpperCase()) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const marksPerQuestion = exam.totalMarks / exam.totalQuestions;
    const totalScore = Math.round(correct * marksPerQuestion * 100) / 100;
    const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;

    return {
      correct,
      incorrect,
      unattempted,
      totalScore,
      accuracy,
    };
  }, [exam, userAnswers]);

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-[#2F3437] font-sans antialiased flex flex-col">
      {/* ── Top Header Bar ────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-[#F9F9F8]/95 backdrop-blur-md border-b border-[#E6E4DF] px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/mock-exams"
              className="text-xs font-semibold text-[#57564F] hover:text-[#2F3437] flex items-center gap-1 transition-colors"
            >
              <span>←</span>
              <span>All Exams</span>
            </Link>
            <span className="text-[#C8C6BC]">/</span>
            <span className="text-xs font-bold text-[#2F3437] truncate max-w-xs sm:max-w-md">
              {exam.title}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mode Switcher */}
            <div className="flex items-center bg-[#EFEFEA] p-0.5 rounded-lg border border-[#E6E4DF] text-xs font-semibold">
              <button
                onClick={() => {
                  setMode("practice");
                  setShowExplanation(true);
                  setIsTimerActive(false);
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  mode === "practice"
                    ? "bg-white text-[#2F3437] shadow-xs"
                    : "text-[#787774] hover:text-[#2F3437]"
                }`}
              >
                [SEARCH] Practice
              </button>
              <button
                onClick={() => {
                  setMode("cbt");
                  setIsTimerActive(true);
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  mode === "cbt"
                    ? "bg-[#2F3437] text-white shadow-xs"
                    : "text-[#787774] hover:text-[#2F3437]"
                }`}
              >
                [TIME] CBT Timed
              </button>
            </div>

            {/* CBT Countdown Timer */}
            {mode === "cbt" && !isSubmitted && (
              <div
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border flex items-center gap-1.5 ${
                  secondsRemaining < 300
                    ? "bg-[#FAECE9] text-[#8F3B2C] border-[#F3CDC6] animate-pulse"
                    : "bg-white text-[#2F3437] border-[#E6E4DF]"
                }`}
              >
                <span>[TIME]</span>
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            )}

            {/* Question Palette Drawer Button (Mobile/Tablet) */}
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              className="lg:hidden px-2.5 py-1 rounded-lg bg-white border border-[#E6E4DF] text-xs font-bold text-[#2F3437]"
            >
              Palette ({currentIndex + 1}/{exam.totalQuestions})
            </button>

            {/* Submit Button in CBT Mode */}
            {mode === "cbt" && !isSubmitted && (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-3.5 py-1 rounded-lg bg-[#2E5C3B] hover:bg-[#254A2F] text-white text-xs font-bold transition-all shadow-xs"
              >
                Submit Exam
              </button>
            )}

            {/* Re-attempt button when submitted */}
            {isSubmitted && (
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUserAnswers({});
                  setMarkedForReview({});
                  setSecondsRemaining(exam.durationMinutes * 60);
                  setCurrentIndex(0);
                }}
                className="px-3 py-1 rounded-lg bg-[#2F3437] text-white text-xs font-bold hover:bg-[#1E2224] transition-all"
              >
                Re-take Exam
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Main Layout (Content Area + Right Question Palette) ────── */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left Column: Question Area / Submission Score Card */}
        <div className="flex-1 min-w-0">
          {isSubmitted ? (
            <ScoreCard
              exam={exam}
              stats={scoreStats}
              userAnswers={userAnswers}
              onReviewQuestion={(qIndex) => {
                setCurrentIndex(qIndex);
                setIsSubmitted(false);
                setMode("practice");
                setShowExplanation(true);
              }}
            />
          ) : (
            <div className="bg-white border border-[#E6E4DF] rounded-2xl p-5 sm:p-7 shadow-xs">
              {/* Question Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E4DF] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-[#2F3437] text-white">
                    Question {currentIndex + 1}
                  </span>
                  <span className="text-xs text-[#787774]">
                    of {exam.totalQuestions}
                  </span>
                  {currentQuestion.originalNumber && (
                    <span className="text-[11px] text-[#787774] hidden sm:inline">
                      (Paper Q#{currentQuestion.originalNumber})
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {currentQuestion.category && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FAF4E5] text-[#8F6A1E] border border-[#F2DEB5]">
                      {currentQuestion.category}
                    </span>
                  )}
                  {currentQuestion.unit && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EBF3EC] text-[#2D6A4F] border border-[#C3DCC8]">
                      {currentQuestion.unit.split(":")[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Body */}
              <div className="text-sm sm:text-base font-medium text-[#2F3437] leading-relaxed mb-6 whitespace-pre-wrap">
                {currentQuestion.question}
              </div>

              {/* Options List */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option) => {
                  const isSelected = userAnswers[currentQuestion.id] === option.id;
                  const isCorrect = option.id.toUpperCase() === currentQuestion.correctOption.toUpperCase();

                  let optionStyle = "bg-[#FBFBFA] border-[#E6E4DF] hover:border-[#2F3437]";
                  let badgeStyle = "bg-white text-[#57564F] border-[#E6E4DF]";

                  if (mode === "practice" && showExplanation) {
                    if (isCorrect) {
                      optionStyle = "bg-[#EBF3EC] border-[#2D6A4F] text-[#1E4620] font-medium";
                      badgeStyle = "bg-[#2D6A4F] text-white border-[#2D6A4F]";
                    } else if (isSelected && !isCorrect) {
                      optionStyle = "bg-[#FAECE9] border-[#8F3B2C] text-[#692419]";
                      badgeStyle = "bg-[#8F3B2C] text-white border-[#8F3B2C]";
                    }
                  } else if (isSelected) {
                    optionStyle = "bg-[#EEF0F2] border-[#2F3437] text-[#2F3437] font-semibold shadow-xs";
                    badgeStyle = "bg-[#2F3437] text-white border-[#2F3437]";
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 ${optionStyle}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-md border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${badgeStyle}`}
                      >
                        {option.id}
                      </span>
                      <span className="text-xs sm:text-sm leading-relaxed flex-1">
                        {option.text}
                      </span>
                      {mode === "practice" && showExplanation && isCorrect && (
                        <span className="text-xs font-bold text-[#2D6A4F] shrink-0 self-center">
                          [CORRECT] Correct
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Topic Brush-Up Card (Always Visible in Practice or When Answered) */}
              {currentQuestion.topicSlug && (
                <div className="mb-6 p-4 rounded-xl bg-[#FAF4E5]/80 border border-[#F2DEB5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">[MODULE]</span>
                    <div>
                      <div className="text-[11px] font-bold text-[#8F6A1E] uppercase tracking-wider">
                        Syllabus Brush-Up Module
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#2F3437]">
                        {currentQuestion.topicTitle}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/${currentQuestion.topicSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#8F6A1E] text-[#8F6A1E] text-xs font-bold hover:bg-[#8F6A1E] hover:text-white transition-all shrink-0 flex items-center gap-1 shadow-xs"
                  >
                    <span>Read Topic Notes</span>
                    <span>↗</span>
                  </Link>
                </div>
              )}

              {/* Step-by-Step Mathematical & Theoretical Explanation */}
              {(mode === "practice" || isSubmitted) && (
                <div className="mb-6">
                  {showExplanation ? (
                    <div className="p-4 sm:p-5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DF] text-xs sm:text-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E0DED8]">
                        <span className="font-extrabold text-[#2F3437] flex items-center gap-1.5 uppercase tracking-wider text-xs">
                          <span>[CONCEPT]</span>
                          <span>Step-by-Step Solution & Derivation</span>
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#EBF3EC] text-[#2D6A4F] border border-[#C3DCC8]">
                          Official Answer: Option {currentQuestion.correctOption}
                          {currentQuestion.options.find(
                            (o) => o.id.toUpperCase() === currentQuestion.correctOption.toUpperCase()
                          ) &&
                            ` (${
                              currentQuestion.options.find(
                                (o) => o.id.toUpperCase() === currentQuestion.correctOption.toUpperCase()
                              )?.text
                            })`}
                        </span>
                      </div>
                      <div className="mt-2">
                        <FormattedExplanation explanation={currentQuestion.explanation} />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowExplanation(true)}
                      className="text-xs font-semibold text-[#8F3B2C] hover:underline flex items-center gap-1"
                    >
                      <span>Show Detailed Solution & Answer Key →</span>
                    </button>
                  )}
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-4 border-t border-[#E6E4DF]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="px-3.5 py-2 rounded-lg bg-white border border-[#E6E4DF] text-[#2F3437] text-xs font-bold hover:border-[#2F3437] disabled:opacity-40 disabled:hover:border-[#E6E4DF] transition-all"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === exam.questions.length - 1}
                    className="px-4 py-2 rounded-lg bg-[#2F3437] text-white text-xs font-bold hover:bg-[#1E2224] disabled:opacity-40 transition-all shadow-xs"
                  >
                    Next Question →
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {userAnswers[currentQuestion.id] && (
                    <button
                      onClick={handleClearResponse}
                      className="px-3 py-2 rounded-lg bg-white border border-[#E6E4DF] text-[#787774] text-xs font-medium hover:text-[#2F3437] hover:border-[#2F3437] transition-all"
                    >
                      Clear Choice
                    </button>
                  )}

                  {mode === "cbt" && (
                    <button
                      onClick={handleToggleReview}
                      className={`px-3 py-2 rounded-lg border text-xs font-bold transition-all ${
                        markedForReview[currentQuestion.id]
                          ? "bg-[#F4EFFC] text-[#5E3587] border-[#DFD1F7]"
                          : "bg-white text-[#787774] border-[#E6E4DF] hover:border-[#5E3587]"
                      }`}
                    >
                      {markedForReview[currentQuestion.id] ? "[MARKED] Marked for Review" : "[MARK] Mark for Review"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Question Palette & Navigation */}
        <aside
          className={`lg:w-80 shrink-0 ${
            paletteOpen ? "fixed inset-0 z-40 bg-black/40 flex justify-end" : "hidden lg:block"
          }`}
          onClick={() => paletteOpen && setPaletteOpen(false)}
        >
          <div
            className={`w-full max-w-sm lg:max-w-none bg-white border border-[#E6E4DF] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col h-[calc(100vh-6rem)] sticky top-20 overflow-hidden ${
              paletteOpen ? "m-4" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Palette Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E6E4DF]">
              <div className="text-xs font-bold text-[#2F3437] uppercase tracking-wider flex items-center gap-1.5">
                <span>[EXAM]</span>
                <span>Question Palette</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#787774]">
                  {Object.keys(userAnswers).length}/{exam.totalQuestions} Answered
                </span>
                {paletteOpen && (
                  <button
                    onClick={() => setPaletteOpen(false)}
                    className="lg:hidden w-6 h-6 rounded-md hover:bg-[#EFEFEA] text-xs font-bold text-[#787774] hover:text-[#2F3437] flex items-center justify-center border border-[#E6E4DF]"
                    aria-label="Close palette"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Section / Category Dropdown Filter */}
            {sections.length > 1 && (
              <div className="mt-3">
                <label className="text-[11px] font-bold text-[#787774] uppercase tracking-wider block mb-1">
                  Filter by Section:
                </label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full text-xs bg-[#F9F9F8] border border-[#E6E4DF] rounded-lg p-2 text-[#2F3437] focus:outline-none focus:border-[#2F3437]"
                >
                  <option value="ALL">All Sections ({exam.questions.length})</option>
                  {sections.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Status Tabs */}
            <div className="grid grid-cols-4 gap-1 mt-3 p-1 rounded-lg bg-[#F9F9F8] border border-[#E6E4DF] text-[10px] font-semibold text-center">
              <button
                onClick={() => setStatusFilter("ALL")}
                className={`py-1 rounded ${statusFilter === "ALL" ? "bg-white text-[#2F3437] shadow-xs" : "text-[#787774]"}`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter("ANSWERED")}
                className={`py-1 rounded ${statusFilter === "ANSWERED" ? "bg-[#2D6A4F] text-white" : "text-[#787774]"}`}
              >
                Ans
              </button>
              <button
                onClick={() => setStatusFilter("UNANSWERED")}
                className={`py-1 rounded ${statusFilter === "UNANSWERED" ? "bg-white text-[#2F3437] shadow-xs" : "text-[#787774]"}`}
              >
                Left
              </button>
              <button
                onClick={() => setStatusFilter("REVIEW")}
                className={`py-1 rounded ${statusFilter === "REVIEW" ? "bg-[#5E3587] text-white" : "text-[#787774]"}`}
              >
                Marked
              </button>
            </div>

            {/* Question Grid Numbers */}
            <div className="flex-1 overflow-y-auto mt-4 pr-1">
              <div className="grid grid-cols-5 gap-2">
                {exam.questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = !!userAnswers[q.id];
                  const isMarked = !!markedForReview[q.id];

                  // Check if passes filters
                  if (selectedSection !== "ALL") {
                    const matchesCategory = q.category === selectedSection;
                    const matchesUnit = q.unit && q.unit.startsWith(selectedSection);
                    if (!matchesCategory && !matchesUnit) return null;
                  }
                  if (statusFilter === "ANSWERED" && !isAnswered) return null;
                  if (statusFilter === "UNANSWERED" && isAnswered) return null;
                  if (statusFilter === "REVIEW" && !isMarked) return null;

                  let btnStyle = "bg-[#F9F9F8] text-[#57564F] border-[#E6E4DF] hover:border-[#2F3437]";

                  if (isCurrent) {
                    btnStyle = "ring-2 ring-[#2F3437] font-bold";
                  }

                  if (isAnswered && isMarked) {
                    btnStyle += " bg-[#DFD1F7] text-[#5E3587] border-[#BFA7EB] font-bold";
                  } else if (isAnswered) {
                    btnStyle += " bg-[#2D6A4F] text-white border-[#2D6A4F] font-bold";
                  } else if (isMarked) {
                    btnStyle += " bg-[#FAF4E5] text-[#8F6A1E] border-[#F2DEB5] font-bold";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(idx)}
                      className={`h-9 rounded-lg border text-xs flex items-center justify-center transition-all ${btnStyle}`}
                      title={`Question ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-[#E6E4DF] mt-3 space-y-1.5 text-[11px] text-[#787774]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#2D6A4F] inline-block" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#F9F9F8] border border-[#E6E4DF] inline-block" />
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#FAF4E5] border border-[#F2DEB5] inline-block" />
                <span>Marked for Review</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Submit Confirmation Modal ─────────────────────────────── */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-[#E6E4DF]">
            <h3 className="text-xl font-bold text-[#2F3437] mb-2">
              Submit Examination?
            </h3>
            <p className="text-xs sm:text-sm text-[#787774] leading-relaxed mb-4">
              Are you sure you want to finish the exam? You will receive an immediate score breakdown, accuracy metrics, and complete solutions with topic brush-up links.
            </p>

            <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E6E4DF] grid grid-cols-3 gap-2 text-center mb-5">
              <div>
                <div className="text-lg font-bold text-[#2D6A4F]">
                  {Object.keys(userAnswers).length}
                </div>
                <div className="text-[10px] text-[#787774] uppercase">Answered</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#8F3B2C]">
                  {exam.totalQuestions - Object.keys(userAnswers).length}
                </div>
                <div className="text-[10px] text-[#787774] uppercase">Left</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#5E3587]">
                  {Object.keys(markedForReview).filter((k) => markedForReview[Number(k)]).length}
                </div>
                <div className="text-[10px] text-[#787774] uppercase">Marked</div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl bg-white border border-[#E6E4DF] text-xs font-semibold text-[#57564F] hover:border-[#2F3437]"
              >
                Continue Exam
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  setIsSubmitted(true);
                }}
                className="px-4 py-2 rounded-xl bg-[#2D6A4F] text-white text-xs font-bold hover:bg-[#254A2F] shadow-xs"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ScoreCard Component (After Submission) ───────────────────────────
interface ScoreCardProps {
  exam: MockExam;
  stats: {
    correct: number;
    incorrect: number;
    unattempted: number;
    totalScore: number;
    accuracy: number;
  };
  userAnswers: AnswerMap;
  onReviewQuestion: (index: number) => void;
}

function ScoreCard({ exam, stats, userAnswers, onReviewQuestion }: ScoreCardProps) {
  const percentage = Math.round((stats.totalScore / exam.totalMarks) * 100);
  const [reviewFilter, setReviewFilter] = useState<"ALL" | "INCORRECT" | "UNATTEMPTED" | "CORRECT">("ALL");
  const [reviewSearch, setReviewSearch] = useState<string>("");

  const filteredReviewQuestions = useMemo(() => {
    return exam.questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => {
        const userAns = userAnswers[q.id];
        const isCorrect = userAns && userAns.toUpperCase() === q.correctOption.toUpperCase();
        const isSkipped = !userAns;

        if (reviewFilter === "INCORRECT" && (isCorrect || isSkipped)) return false;
        if (reviewFilter === "UNATTEMPTED" && !isSkipped) return false;
        if (reviewFilter === "CORRECT" && !isCorrect) return false;

        if (reviewSearch.trim()) {
          const query = reviewSearch.toLowerCase();
          const str = `${q.question} ${q.topicTitle} ${q.category}`.toLowerCase();
          if (!str.includes(query)) return false;
        }
        return true;
      });
  }, [exam.questions, userAnswers, reviewFilter, reviewSearch]);

  return (
    <div className="bg-white border border-[#E6E4DF] rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#EBF3EC] text-[#2D6A4F] border border-[#C3DCC8] mb-3">
          Exam Completed Successfully
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3437]">
          Performance & Score Summary
        </h2>
        <p className="text-xs sm:text-sm text-[#787774] mt-1">
          {exam.title}
        </p>

        {/* Big Score Display */}
        <div className="my-6 p-6 rounded-2xl bg-[#F9F9F8] border border-[#E6E4DF] inline-block min-w-[240px]">
          <div className="text-4xl sm:text-5xl font-black text-[#2F3437]">
            {stats.totalScore}
            <span className="text-xl font-normal text-[#787774]"> / {exam.totalMarks}</span>
          </div>
          <div className="text-xs font-bold text-[#2D6A4F] mt-1">
            {percentage}% Overall Score • {stats.accuracy}% Accuracy
          </div>
        </div>
      </div>

      {/* 4 Clickable Stat Boxes to Filter Review */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <button
          onClick={() => setReviewFilter(reviewFilter === "CORRECT" ? "ALL" : "CORRECT")}
          className={`p-4 rounded-xl border text-center transition-all ${
            reviewFilter === "CORRECT"
              ? "bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-sm"
              : "bg-[#EBF3EC] border-[#C3DCC8] text-[#2D6A4F] hover:bg-[#DDF0DF]"
          }`}
        >
          <div className="text-2xl font-black">{stats.correct}</div>
          <div className="text-[11px] font-semibold uppercase tracking-wider mt-0.5">
            [CORRECT] Correct
          </div>
        </button>

        <button
          onClick={() => setReviewFilter(reviewFilter === "INCORRECT" ? "ALL" : "INCORRECT")}
          className={`p-4 rounded-xl border text-center transition-all ${
            reviewFilter === "INCORRECT"
              ? "bg-[#8F3B2C] text-white border-[#8F3B2C] shadow-sm"
              : "bg-[#FAECE9] border-[#F3CDC6] text-[#8F3B2C] hover:bg-[#F7DCD7]"
          }`}
        >
          <div className="text-2xl font-black">{stats.incorrect}</div>
          <div className="text-[11px] font-semibold uppercase tracking-wider mt-0.5">
            [INCORRECT] Incorrect
          </div>
        </button>

        <button
          onClick={() => setReviewFilter(reviewFilter === "UNATTEMPTED" ? "ALL" : "UNATTEMPTED")}
          className={`p-4 rounded-xl border text-center transition-all ${
            reviewFilter === "UNATTEMPTED"
              ? "bg-[#57564F] text-white border-[#57564F] shadow-sm"
              : "bg-[#F4F4F2] border-[#E0DED8] text-[#57564F] hover:bg-[#EAEAE5]"
          }`}
        >
          <div className="text-2xl font-black">{stats.unattempted}</div>
          <div className="text-[11px] font-semibold uppercase tracking-wider mt-0.5">
            [UNATTEMPTED] Unattempted
          </div>
        </button>

        <div className="p-4 rounded-xl bg-[#FAF4E5] border border-[#F2DEB5] text-center">
          <div className="text-2xl font-black text-[#8F6A1E]">{stats.accuracy}%</div>
          <div className="text-[11px] font-semibold text-[#8F6A1E] uppercase tracking-wider mt-0.5">
            Accuracy
          </div>
        </div>
      </div>

      {/* Question-by-Question Solutions & Topic Brush-Up Links */}
      <div className="border-t border-[#E6E4DF] pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-[#2F3437]">
              Question Review & Weak Topic Brush-Up ({filteredReviewQuestions.length})
            </h3>
            <span className="text-xs text-[#787774]">
              Click any question to view its step-by-step solution in Practice Mode
            </span>
          </div>

          {/* Search Box in Review */}
          <div className="w-full sm:w-64 relative">
            <input
              type="text"
              placeholder="Search in questions or topics..."
              value={reviewSearch}
              onChange={(e) => setReviewSearch(e.target.value)}
              className="w-full pl-8 pr-7 py-1.5 bg-[#F9F9F8] border border-[#E6E4DF] rounded-lg text-xs text-[#2F3437] focus:outline-none focus:border-[#2F3437]"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[#787774]">[SEARCH]</span>
            {reviewSearch && (
              <button
                onClick={() => setReviewSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#787774] hover:text-[#2F3437]"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setReviewFilter("ALL")}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              reviewFilter === "ALL"
                ? "bg-[#2F3437] text-white"
                : "bg-[#F9F9F8] border border-[#E6E4DF] text-[#57564F] hover:bg-[#EFEFEA]"
            }`}
          >
            All Questions ({exam.questions.length})
          </button>
          <button
            onClick={() => setReviewFilter("INCORRECT")}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              reviewFilter === "INCORRECT"
                ? "bg-[#8F3B2C] text-white"
                : "bg-[#FAECE9] text-[#8F3B2C] border border-[#F3CDC6] hover:bg-[#F5DBD5]"
            }`}
          >
            Mistakes to Revise ({stats.incorrect})
          </button>
          <button
            onClick={() => setReviewFilter("UNATTEMPTED")}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              reviewFilter === "UNATTEMPTED"
                ? "bg-[#57564F] text-white"
                : "bg-[#F4F4F2] text-[#57564F] border border-[#E0DED8] hover:bg-[#EAEAE5]"
            }`}
          >
            Unattempted ({stats.unattempted})
          </button>
          <button
            onClick={() => setReviewFilter("CORRECT")}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              reviewFilter === "CORRECT"
                ? "bg-[#2D6A4F] text-white"
                : "bg-[#EBF3EC] text-[#2D6A4F] border border-[#C3DCC8] hover:bg-[#DDF0DF]"
            }`}
          >
            Mastered ({stats.correct})
          </button>
        </div>

        {/* Filtered Questions List */}
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {filteredReviewQuestions.length > 0 ? (
            filteredReviewQuestions.map(({ q, idx }) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns && userAns.toUpperCase() === q.correctOption.toUpperCase();
              const isSkipped = !userAns;

              return (
                <div
                  key={q.id}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#F9F9F8] border border-[#E6E4DF] hover:border-[#2F3437] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#2F3437]">
                        Q{idx + 1}.
                      </span>
                      {isCorrect ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF3EC] text-[#2D6A4F]">
                          [CORRECT] Correct
                        </span>
                      ) : isSkipped ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4F4F2] text-[#787774]">
                          [UNATTEMPTED] Unattempted
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAECE9] text-[#8F3B2C]">
                          [INCORRECT] Incorrect (Chose {userAns}, Key: {q.correctOption})
                        </span>
                      )}
                      {q.category && (
                        <span className="text-[10px] text-[#787774] hidden sm:inline">
                          • {q.category}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#57564F] line-clamp-1">
                      {q.question}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    {q.topicSlug && (
                      <Link
                        href={`/${q.topicSlug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#E0DED9] text-[#8F6A1E] text-xs font-semibold hover:border-[#8F6A1E] transition-all flex items-center gap-1 shadow-xs"
                      >
                        <span>[MODULE] Brush Up</span>
                        <span>↗</span>
                      </Link>
                    )}
                    <button
                      onClick={() => onReviewQuestion(idx)}
                      className="px-3 py-1 rounded-lg bg-[#2F3437] text-white text-xs font-bold hover:bg-[#1E2224] transition-all shadow-xs"
                    >
                      View Solution
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs text-[#787774] bg-[#F9F9F8] rounded-xl border border-dashed border-[#E6E4DF]">
              No questions found matching your filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
