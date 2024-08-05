import Image from "next/image";
import styles from "./Featured.module.css";
import { auth } from "../../../auth";
import { API_BASE_URL } from "@/constants";
import { Post } from "@prisma/client";
import Link from "next/link";
const Featured = async () => {
  const user = (await auth())?.user;
  const featuredPostRes = await fetch(`${API_BASE_URL}/posts/featured`);
  const featuredPost: Post = await featuredPostRes.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          Hey {user?.name.split(" ")[0] || "random person"},{" "}
          {featuredPost?.id ? "Checkout the featured blog! Or" : ""}
        </b>
        discover more blogs below!
      </h1>
      {featuredPost?.id && (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src={featuredPost?.img} alt="image" fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{featuredPost?.title}</h1>
            <p
              className={styles.postDesc}
              dangerouslySetInnerHTML={{ __html: featuredPost.desc }}
            ></p>
            <Link href={`/posts/${featuredPost?.slug}`}>
              <button className={styles.button}>Read More</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
