import Pagination from "../pagination/Pagination";
import styles from "./CardList.module.css";
import Card from "../card/Card";
import { Category, Post } from "@prisma/client";
import { POSTS_PER_PAGE } from "@/constants";
const CardList = async ({
  page,
  cat,
}: {
  page: number;
  cat: Category["slug"];
}) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}${
      cat ? `cat=${cat}` : ""
    }`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Error getting posts!");
  }
  const { posts, count }: { posts: Post[]; count: number } = await res.json();
  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNext = POSTS_PER_PAGE * page < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {count > 0 && posts.map((data) => <Card key={data.id} data={data} />)}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
