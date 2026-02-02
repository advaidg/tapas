"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial =
      stored ?? (root.dataset.theme as Theme | undefined) ?? getPreferredTheme();

    root.dataset.theme = initial;
    setTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next = event.matches ? "dark" : "light";
      root.dataset.theme = next;
      setTheme(next);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative h-7 w-12 rounded-full border transition-all ${
        theme === "dark"
          ? "border-[#3a3f52] bg-[#3a3f52]"
          : "border-[var(--border)] bg-[var(--bg-surface)]"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      <span className="pointer-events-none absolute inset-0">
        <span
          className={`absolute left-1.5 top-1.5 h-4 w-4 transition-opacity duration-200 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-white/90"
            fill="currentColor"
          >
            <path d="M21.64 13.65a1 1 0 0 0-1.05-.24 8.15 8.15 0 0 1-10.99-9.01 1 1 0 0 0-1.26-1.18A10 10 0 1 0 21.88 14.9a1 1 0 0 0-.24-1.25ZM12 20a8 8 0 0 1-6.84-12.14A10.15 10.15 0 0 0 16.14 18.8 7.96 7.96 0 0 1 12 20Z" />
          </svg>
        </span>
        <span
          className={`absolute right-1.5 top-1.5 h-4 w-4 transition-opacity duration-200 ${
            theme === "dark" ? "opacity-0" : "opacity-70"
          }`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[var(--text-dim)]"
            fill="currentColor"
          >
            <path d="M12 2a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1ZM4.22 4.22a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.42 1.41L4.22 5.63a1 1 0 0 1 0-1.41Zm12.49 12.49a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41ZM2 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm16.5 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1ZM4.22 19.78a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0Zm12.49-12.49a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 0 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0ZM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
          </svg>
        </span>
      </span>
      <span
        className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-all duration-200 ${
          theme === "dark" ? "left-5.5" : "left-0.5"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}
