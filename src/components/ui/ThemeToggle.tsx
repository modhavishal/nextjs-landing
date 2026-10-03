"use client";

import { useEffect } from "react";

const THEME_STORAGE_KEY = "forma-theme";

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const useDarkTheme =
      savedTheme === "dark" ||
      (savedTheme !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", useDarkTheme);
  }, []);

  function toggleTheme() {
    const useDarkTheme = !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", useDarkTheme);
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      useDarkTheme ? "dark" : "light",
    );
  }

  return (
    <button
      aria-label="Toggle color theme"
      className="grid size-[38px] shrink-0 cursor-pointer place-items-center rounded-full border border-[#e7e7e1] bg-white/80 text-[#56574f] transition hover:-translate-y-px hover:border-[#cfd4c1] hover:bg-white hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#93b84b] dark:border-[#3b3c35] dark:bg-[#22231e] dark:text-[#e8e9df] dark:hover:border-[#5b614d] dark:hover:bg-[#2b2d26] max-[480px]:size-8"
      onClick={toggleTheme}
      title="Toggle light or dark theme"
      type="button"
    >
      <svg
        aria-hidden="true"
        className="block size-[18px] dark:hidden max-[480px]:size-4"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          d="M16.4 12.2A6.8 6.8 0 0 1 7.8 3.6a6.8 6.8 0 1 0 8.6 8.6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="hidden size-[18px] dark:block max-[480px]:size-4"
        fill="none"
        viewBox="0 0 20 20"
      >
        <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2v1.5m0 13V18m8-8h-1.5m-13 0H2m13.66-5.66-1.06 1.06M5.4 14.6l-1.06 1.06m11.32 0-1.06-1.06M5.4 5.4 4.34 4.34"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}
