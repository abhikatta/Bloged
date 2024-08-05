import Link from "next/link";
import styles from "./Comments.module.css";
import Image from "next/image";
import { auth } from "../../../auth";
import { API_BASE_URL } from "@/constants";
import { Comment, User } from "@prisma/client";
import WriteComment from "./writeComment";
import { formatTime } from "./CommentsUtils";

interface CommentsWithUser extends Comment {
  user: User;
}

const Comments = async ({ postSlug }: { postSlug: string }) => {
  const status = Boolean((await auth())?.user?.id);
  const res = await fetch(`${API_BASE_URL}/comments?postSlug=${postSlug}`, {
    cache: "no-store",
  });
  const comments: CommentsWithUser[] = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
        <WriteComment postSlug={postSlug} />
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {comments.map((comment, index) => (
          <div className={styles.comment} key={index}>
            <div className={styles.user}>
              {comment.user.image && (
                <Image
                  src={comment.user.image}
                  alt={comment.user.name}
                  width={50}
                  height={50}
                  className={styles.image}
                />
              )}
              <div className={styles.userInfo}>
                <span className={styles.username}>{comment.user.name}</span>
                <span className={styles.date}>
                  {formatTime(comment.createdAt.toString())}
                </span>
              </div>
            </div>
            <p
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: comment.desc }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
