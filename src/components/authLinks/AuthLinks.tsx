"use client";
import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useState } from "react";
import { Session } from "next-auth";
import Image from "next/image";
const AuthLinks = ({ session, logout }: { session: Session; logout: () => void }) => {
  const status = session?.user?.id;
  const user = session?.user;
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
          {user?.image && (
            <div className={styles.user}>
              <Image
                src={user?.image}
                alt="google user image"
                width={20}
                height={20}
                className={styles.userImage}
              />
              <span>{user?.name}</span>
            </div>
          )}
          {user ? (
            <button className={`${styles.link} ${styles.logoutButton}`} onClick={() => logout()}>
              Logout
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
