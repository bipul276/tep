"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#EFECE6",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          color: "#151515",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "480px",
            width: "90%",
            backgroundColor: "#FFFFFF",
            border: "1px solid #D8D2C7",
            padding: "32px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "#FF6A35",
            }}
          >
            [ROOT SAFEGUARD TRIGGERED]
          </div>

          <h1
            style={{
              fontSize: "20px",
              fontWeight: 800,
              margin: "0 0 12px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Critical Application Exception
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "#524E48",
              lineHeight: 1.6,
              margin: "0 0 24px 0",
            }}
          >
            A root-level initialization error occurred. The application state has been isolated to protect your data.
          </p>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => reset()}
              style={{
                flex: 1,
                padding: "12px 16px",
                backgroundColor: "#151515",
                color: "#FFFFFF",
                border: "none",
                fontWeight: 600,
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Restart Application ↻
            </button>
            <button
              onClick={() => {
                try {
                  localStorage.clear();
                } catch {}
                window.location.reload();
              }}
              style={{
                flex: 1,
                padding: "12px 16px",
                backgroundColor: "#FFFFFF",
                color: "#151515",
                border: "1px solid #D8D2C7",
                fontWeight: 600,
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Reset & Reload ↻
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
