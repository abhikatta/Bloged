"use client";
import Image from "next/image";
import styles from "./ThemeToggle.module.css";
import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      style={{ backgroundColor: theme === "dark" ? "white" : "#0f172a" }}
      className={styles.container}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "light"
            ? { right: 1, backgroundColor: "white" }
            : { left: 1, backgroundColor: "#0f172a" }
        }></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
