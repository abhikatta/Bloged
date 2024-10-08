import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import { Post } from "@prisma/client";
import { FormatDate } from "@/utils/utils";

const Card = ({ key, data }: { key: string | number; data: Post }) => {
  return (
    <div className={styles.container} key={key}>
      {data.img && (
        <div className={styles.imgContainer}>
          <Image src={data.img} alt="post" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{FormatDate(data.createdAt)}</span>
          <span className={styles.category}> - {data.catSlug.toUpperCase()}</span>
        </div>
        <Link href={`/posts/${data.slug}`}>
          <h1>{data.title}</h1>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: `${data.desc.slice(0, 200)}...` }}
        ></p>
        <Link href={`/posts/${data.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
