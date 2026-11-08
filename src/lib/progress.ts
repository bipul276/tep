"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "studyprep_completed_slugs";
const LAST_VISITED_KEY = "studyprep_last_visited_slug";
const EVENT_NAME = "studyprep_progress_changed";

/**
 * Reads completed topic slugs from permanent browser storage (localStorage).
 * Includes auto-repair for malformed or corrupted values.
 */
export function getStoredCompletedSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((s) => typeof s === "string");
    }
    // Auto-repair non-array corrupted entry
    localStorage.removeItem(STORAGE_KEY);
    return [];
  } catch (err) {
    console.warn("Corrupted progress key detected, resetting to safe empty state:", err);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    return [];
  }
}

/**
 * Saves completed topic slugs to permanent browser storage and dispatches an update event.
 */
function saveCompletedSlugs(slugs: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: slugs }));
  } catch (err) {
    console.error("Failed to save study progress to localStorage", err);
  }
}

/**
 * Toggles a topic's completed state in browser storage.
 * Returns true if now completed, false if uncompleted.
 */
export function toggleTopicCompleted(slug: string): boolean {
  const current = getStoredCompletedSlugs();
  const exists = current.includes(slug);
  const updated = exists
    ? current.filter((s) => s !== slug)
    : [...current, slug];
  saveCompletedSlugs(updated);
  return !exists;
}

/**
 * Checks if a specific slug is completed.
 */
export function isTopicCompleted(slug: string): boolean {
  return getStoredCompletedSlugs().includes(slug);
}

/**
 * Clears all stored progress from browser storage.
 */
export function clearAllProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LAST_VISITED_KEY);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: [] }));
  } catch (err) {
    console.error("Failed to clear progress", err);
  }
}

/**
 * Gets last visited topic slug from browser storage.
 */
export function getLastVisitedTopic(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(LAST_VISITED_KEY);
  } catch {
    return null;
  }
}

/**
 * Saves last visited topic slug into browser storage.
 */
export function setLastVisitedTopic(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LAST_VISITED_KEY, slug);
  } catch {}
}

/**
 * React hook to observe and manipulate completion progress across the app.
 */
export function useStudyProgress(totalTopics: number = 56) {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initial read from permanent browser storage
    setCompletedSlugs(getStoredCompletedSlugs());
    setIsLoaded(true);

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string[]>;
      if (customEvent.detail && Array.isArray(customEvent.detail)) {
        setCompletedSlugs(customEvent.detail);
      } else {
        setCompletedSlugs(getStoredCompletedSlugs());
      }
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const toggle = useCallback((slug: string) => {
    return toggleTopicCompleted(slug);
  }, []);

  const isCompleted = useCallback(
    (slug: string) => completedSlugs.includes(slug),
    [completedSlugs]
  );

  const resetAll = useCallback(() => {
    clearAllProgress();
  }, []);

  const completedCount = completedSlugs.length;
  const progressPercent =
    totalTopics > 0
      ? Math.min(100, Math.round((completedCount / totalTopics) * 100))
      : 0;

  return {
    completedSlugs,
    isCompleted,
    toggleCompleted: toggle,
    resetAll,
    completedCount,
    progressPercent,
    isLoaded,
  };
}
