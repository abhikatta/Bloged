"use client";
import { Theme, ThemeContext } from "@/context/themeContext";
import React, { useContext } from "react";

const ThemeProvider = () => {
  const { theme } = useContext<Theme>(ThemeContext);
  return <div className={theme}>ThemeProvider</div>;
};

export default ThemeProvider;
