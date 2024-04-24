import { useTheme } from "next-themes";
import React from "react";

export function useThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return { theme, setTheme };
}
