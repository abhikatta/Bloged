"use client";
import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useState } from "react";
import { Session } from "next-auth";
const AuthLinks = ({ session }: { session: Session }) => {
  const status = session?.user?.id;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {status && (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
        </>
      )}
      <div className={styles.burger} onClick={() => setIsOpen((prev) => !prev)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isOpen && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status && (
            <>
              <Link href="/write">Write</Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
