import Pagination from "../pagination/Pagination";
import styles from "./CardList.module.css";
import Card from "../card/Card";
import { Post } from "@prisma/client";
const CardList = async ({ page }: { page: number }) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Error getting posts!");
  }
  const posts: Post[] = await res.json();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.length > 0 &&
          posts.map((data) => <Card key={data.id} data={data} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
