import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";
import { API_BASE_URL } from "@/constants";
import { PostWithUser } from "@/types";
import { FormatDate } from "@/utils/utils";
import { Category } from "@prisma/client";

const Menu = async () => {
  const popularPostsRes = await fetch(`${API_BASE_URL}/posts/popular`, {
    cache: "no-store",
  });
  const popularPosts: PostWithUser[] = await popularPostsRes.json();

  const categoriesRes = await fetch(`${API_BASE_URL}/categories`);
  const categories: Category[] = await categoriesRes.json();
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>{"What's Hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <div className={styles.items}>
          {popularPosts.map((item, index) => {
            return (
              <Link key={index} href="/" className={styles.item}>
                <div className={styles.textContainer}>
                  <span className={`${styles.popular} ${styles[item.catSlug]}`}>
                    {item.catSlug}
                  </span>
                  <h3 className={styles.postTitle}>{item.title}</h3>
                  <div className={styles.detail}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}> - {FormatDate(item.createdAt)}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categoryList}>
          {categories.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/blog?cat=${item.slug.toLowerCase()}`}
                className={`${styles.category} ${styles[item.slug]}`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* TODO: find a way for editor pick */}
        {/* <h2 className={styles.subtitle}>{"Chosen by the editor"}</h2>
        <h1 className={styles.title}>Editors Pick</h1>
        <div className={styles.items}>
          {popularPosts.map((item, index) => {
            return (
              <Link key={index} href="/" className={styles.item}>
                <div className={styles.imgContainer}>
                  <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                  <span className={`${styles.editorspick} ${item.slug}`}>{item.title}</span>
                  <h3 className={styles.postTitle}>
                    Sint ea eu sunt commodo incididunt adipisicing aliquip incididunt duis.
                  </h3>
                  <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}> - 10.3.2022</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default Menu;
