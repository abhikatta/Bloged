"use client";
import { Children, Theme, ThemeContext } from "@/context/themeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: Children }) => {
  const { theme } = useContext<Theme>(ThemeContext);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  return isMounted && <div className={theme}>{children}</div>;
};

export default ThemeProvider;
