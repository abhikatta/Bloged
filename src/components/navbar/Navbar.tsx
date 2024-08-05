import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { auth, signOut } from "../../../auth";
const Navbar = async () => {
  const handleSignout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };
  const session = await auth();
  const user = session?.user;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="https://github.com/abhikatta">
          Contact
        </Link>
        <Link className={styles.link} href="https://github.com/abhikatta">
          About
        </Link>
        <AuthLinks session={session} />
        {user?.image && (
          <Image
            src={user.image}
            alt="google user image"
            width={20}
            height={20}
            className={styles.userImage}
          />
        )}
        <span>{user?.name}</span>
        {user ? (
          <form action={handleSignout}>
            <button type="submit" className={styles.link}>
              Logout
            </button>
          </form>
        ) : (
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
