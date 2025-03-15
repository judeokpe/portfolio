'use client';

import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/app/context/theme-context/theme-provider"; 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-transparent dark:bg-transparent border border-gray-500 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <BsSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <BsMoon className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}
