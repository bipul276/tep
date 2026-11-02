# True Exam Preparation Computer Science (TEP) — UGC NET & Bihar STET

> A high-performance, Neo-Brutalist technical documentation and CBT mock examination platform for UGC NET and Bihar STET Computer Science aspirants.

---

## Overview

**True Exam Preparation Computer Science (TEP)** is an academic-grade portal designed to provide exhaustive, mathematical, and syllabus-aligned preparation for competitive Computer Science examinations:
- **54 Technical Documentation Modules**: 100% coverage across all 15 official UGC NET syllabus units (Discrete Mathematics, Computer Architecture, Data Structures & Algorithms, Operating Systems, DBMS, Software Engineering, Computer Networks, Theory of Computation, AI, IoT, etc.).
- **Interactive Exercises (`<QuizBlock />`)**: W3Schools-inspired practice blocks featuring immediate grading, tactile feedback, and step-by-step mathematical derivations.
- **Official CBT Mock Examination Simulators**:
  - **UGC NET Paper 2**: Full 100-question timed CBT exam simulation with marking scheme (+2 / 0), question palette, and detailed solutions.
  - **Bihar STET CS**: Full 100-question timed CBT exam simulation (+1 / 0) with topic tagging.
- **Formula & Symbol Engine**: Centralized repository of high-yield formulas, asymptotic bounds, and standard mathematical/computational symbol notations rendered with KaTeX.
- **Zero-Dependency Progress Tracking**: Privacy-first, permanent progress syncing via browser `localStorage` (no account required).

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Partial Prerendering)
- **Styling**: Tailwind CSS v4 (Neo-Brutalist Monochrome Bento Grid)
- **Content Engine**: MDX via `next-mdx-remote`
- **Math Rendering**: KaTeX with `remark-math` and `rehype-katex`
- **Syntax Highlighting**: `rehype-highlight` with `highlight.js`
- **Language**: TypeScript 5 (Strict Mode)

---

## Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/studyprep.git

# Navigate to project directory
cd studyprep

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Compile and prerender static pages
npm run build

# Start production server
npm run start
```

---

## Project Structure

```
studyprep/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Monochrome Bento Grid Landing Page
│   ├── portal/               # Main Syllabus & Module Explorer
│   ├── dashboard/            # 2-Column Technical Documentation Layout
│   │   ├── layout.tsx        # Persistent Left Sidebar (w-72) + Breadcrumbs
│   │   └── [slug]/           # MDX Documentation Reader with QuizBlocks
│   ├── formulas/             # Comprehensive Formula & Symbol Engine
│   ├── cheat-sheet/          # High-Yield Revision Sheet
│   └── mock-exams/           # CBT Mock Examination Simulator
│       └── [examId]/         # Full-Screen Timed CBT Interface
├── content/                  # 54 Exhaustive Syllabus MDX Modules
├── src/
│   ├── components/           # UI Components (QuizBlock, DocSidebar, etc.)
│   ├── data/                 # CBT Question Banks (UGC NET & Bihar STET)
│   └── lib/                  # Content Parsers, Syllabus Trees, & Storage
└── public/                   # Static Assets
```

---

## Deployment

### Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com/new).
3. The framework preset is automatically detected as **Next.js**.
4. Click **Deploy**.

### Self-Hosted (Node / Docker)
```bash
npm run build
npm run start
```
The server will bind to port `3000` (or `PORT` environment variable).

---

## License

MIT License. Designed and developed for academic Computer Science excellence.
