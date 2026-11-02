import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://trueexamprep.com"
  ),
  title: {
    default: "True Exam Preparation Computer Science — UGC NET & STET",
    template: "%s | True Exam Preparation CS",
  },
  description:
    "True Exam Preparation Computer Science (TEP) — Comprehensive technical documentation, 15-unit formula engine, and authentic CBT mock exams for UGC NET and Bihar STET Computer Science.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "True Exam Preparation",
    "TEP Computer Science",
    "TEP CS",
    "UGC NET Computer Science",
    "Bihar STET Paper 2",
    "Computer Science Notes",
    "DBMS",
    "Operating Systems",
    "Data Structures",
    "Algorithms",
    "Discrete Mathematics",
    "Computer Networks",
    "Software Engineering",
  ],
  authors: [{ name: "True Exam Preparation Academic Team" }],
  creator: "True Exam Preparation CS",
  publisher: "True Exam Preparation CS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "True Exam Preparation Computer Science",
    title: "True Exam Preparation Computer Science — UGC NET & STET",
    description:
      "Comprehensive technical documentation, 15-unit formula engine, and authentic CBT mock exams for UGC NET and Bihar STET Computer Science.",
    images: [
      {
        url: "/images/ai-hero-student-v2.jpg",
        width: 1200,
        height: 630,
        alt: "True Exam Preparation Computer Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "True Exam Preparation Computer Science — UGC NET & STET",
    description:
      "Comprehensive technical documentation, 15-unit formula engine, and authentic CBT mock exams for UGC NET and Bihar STET.",
    images: ["/images/ai-hero-student-v2.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* KaTeX CSS for math rendering */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
