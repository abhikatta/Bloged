import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { auth } from "../../../auth";
const Footer = async () => {
  const user = (await auth())?.user;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          {user?.image && (
            <Image
              src={user?.image}
              style={{ borderRadius: "50%" }}
              alt="logo"
              width={50}
              height={50}
            />
          )}

          <h1 className={styles.logoText}>
            <span>{user?.name ? `${user.name}'s Blog` : ""}</span>
            {user?.name ? `` : "Bloged"}
          </h1>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link className={styles.link} href="/">
            HomePage
          </Link>
          <Link className={styles.link} href="/">
            Blog
          </Link>
          <Link className={styles.link} href="/">
            About
          </Link>
          <Link className={styles.link} href="/">
            Contact
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link className={styles.link} href="/blog?cat=style">
            Style
          </Link>
          <Link className={styles.link} href="/blog?cat=fashion">
            Fashion
          </Link>
          <Link className={styles.link} href="/blog?cat=coding">
            Coding
          </Link>
          <Link className={styles.link} href="/blog?cat=travel">
            Travel
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>

          <Link className={styles.link} href="/">
            Instagram
          </Link>
          <Link className={styles.link} href="/">
            Youtube
          </Link>
          <Link className={styles.link} href="https://github.com/abhikatta">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
