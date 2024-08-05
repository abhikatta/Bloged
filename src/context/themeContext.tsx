"use client";
import { createContext, useEffect, useState } from "react";

export type themeType = "light" | "dark";
export type Children = React.ReactElement;
export interface Theme {
  theme: themeType;
  toggleTheme: () => void;
}

const getFromLocalStorage = (): themeType => {
  // coz its SSR by default, but here we are using browser stuff which is not present in the server
  // so during the transition its gonna have some trouble, so to prevent any errors, we do this check
  // to kinda wait until the transition is completed
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as themeType) || "light";
  }
};
export const ThemeContext = createContext<Theme>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [theme, setTheme] = useState<themeType>(() => getFromLocalStorage());

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
