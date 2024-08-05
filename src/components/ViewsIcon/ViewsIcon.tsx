"use client";
import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";
import { useContext } from "react";
import styles from "./ViewsIcon.module.css";

const ViewsIcon = ({ views }: { views: number }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Image
        src="/views.png"
        style={{ filter: theme === "dark" ? "invert(1)" : "" }}
        width={20}
        height={20}
        alt="views"
      />
      <p className={styles.views}>{views}</p>
    </div>
  );
};

export default ViewsIcon;
