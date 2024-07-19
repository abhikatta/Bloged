import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src={"/coding.png"}
            style={{ borderRadius: "50%" }}
            alt="logo"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Bloged</h1>
        </div>
        <p className={styles.desc}>
          Ullamco cupidatat est sunt excepteur velit minim. Laborum ad
          incididunt velit aliquip ad velit. Est dolore et velit ad qui laboris
          consequat deserunt ipsum nisi. Proident voluptate tempor non culpa
          cupidatat aute occaecat velit sunt cupidatat. Fugiat reprehenderit
          incididunt est pariatur.
        </p>
        <div className={styles.icons}>
          <Image width={18} height={18} src="/facebook.png" alt="" />
          <Image width={18} height={18} src="/instagram.png" alt="" />
          <Image width={18} height={18} src="/youtube.png" alt="" />
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
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
