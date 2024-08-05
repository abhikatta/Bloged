import Menu from "@/components/menu/Menu";
import styles from "./slugPage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { API_BASE_URL } from "@/constants";
import ViewsIcon from "@/components/ViewsIcon/ViewsIcon";
import { PostWithUser } from "@/types";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const resPost = await fetch(`${API_BASE_URL}/posts/${params.slug}`, {
    cache: "no-cache",
  });

  if (!resPost.ok) {
    throw new Error("Error fetching post!");
  }

  const post: PostWithUser = await resPost.json();

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <ViewsIcon views={post.views} />
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              {post.user.image && (
                <Image src={post.user.image} fill className={styles.avatar} alt={post.slug} />
              )}
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}>
                {post.createdAt?.toString().split("T")[0].replaceAll("-", ".")}
              </span>
            </div>
          </div>
        </div>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} fill className={styles.image} alt={post.slug} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: post.desc }} />
          <div className={styles.comments}>
            <Comments postSlug={params.slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
