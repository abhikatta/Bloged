import Link from "next/link";
import styles from "./AuthLinks.module.css";
const AuthLinks = () => {
  const status = false;

  return (
    <>
      {status ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
