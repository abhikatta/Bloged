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
          <Image
            src={user.image}
            style={{ borderRadius: "50%" }}
            alt="logo"
            width={50}
            height={50}
          />

          <h1 className={styles.logoText}>
            <span>
              {user.name}
              {"'"}s{" "}
            </span>
            Blog
          </h1>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">HomePage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blogs?cat=style">Style</Link>
          <Link href="/blogs?cat=fashion">Fashion</Link>
          <Link href="/blogs?cat=coding">Coding</Link>
          <Link href="/blogs?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>

          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
          <Link href="https://github.com/abhikatta">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
