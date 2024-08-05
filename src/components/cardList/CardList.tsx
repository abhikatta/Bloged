import Pagination from "../pagination/Pagination";
import styles from "./CardList.module.css";
import featuredStyles from "../featured/Featured.module.css";
import Card from "../card/Card";
import { Category, Post } from "@prisma/client";
import { API_BASE_URL, POSTS_PER_PAGE } from "@/constants";
import Link from "next/link";
const CardList = async ({ page, cat }: { page: number; cat: Category["slug"] }) => {
  const searchParams = new URLSearchParams();
  searchParams.append("page", String(page));
  cat && searchParams.append("cat", cat);

  const url = new URL(`${API_BASE_URL}/posts`);
  url.search = searchParams.toString();

  const res = await fetch(url.toString(), {
    cache: "no-cache",
  });
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
        {count > 0 ? (
          posts.map((data, index) => <Card key={index} data={data} />)
        ) : (
          <div className={styles.noPosts}>
            <p>No posts found!</p>
            <Link href="/write">
              <button style={{ marginTop: "1rem" }} className={featuredStyles.button}>
                Be our first writer!!
              </button>
            </Link>
          </div>
        )}
      </div>
      {count > POSTS_PER_PAGE && (
        <Pagination page={page} catSlug={cat} hasNext={hasNext} hasPrev={hasPrev} />
      )}
    </div>
  );
};

export default CardList;
