import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/p1.jpeg"} alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2020 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Laborum ad eu cillum irure.</h1>
        </Link>
        <p className={styles.desc}>
          Qui proident culpa commodo cupidatat aliquip consectetur fugiat
          exercitation eu exercitation. Ex aliquip cupidatat sunt do eu aliqua
          qui. Culpa voluptate voluptate sint nostrud laborum commodo nulla
          aliquip nostrud labore Lorem adipisicing. Ut ex ea culpa consequat
          occaecat reprehenderit ullamco adipisicing non veniam eiusmod nulla
          enim Lorem. Magna sit nulla eiusmod non incididunt.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
