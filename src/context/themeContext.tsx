"use client";
import { createContext, useState } from "react";

export type themeType = "light" | "dark";
export interface Theme {
  theme: themeType;
}

const getFromLocalStorage = (): themeType => {
  // coz its SSR by default, but here we are using browser stuff which is not present in the server
  // so during the transition its gonna have some trouble, so to prevent any errors, we do this check
  // to kinda wait until the transition is completed
  if (typeof window !== undefined) {
    return (localStorage.getItem("theme") as themeType) || "light";
  }
};

export const ThemeContext = createContext<Theme>({ theme: "light" });

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [theme, setTheme] = useState<Theme>({
    theme: getFromLocalStorage(),
  });
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
