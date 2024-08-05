"use client";
import { useState } from "react";
import styles from "../comments/Comments.module.css";
import { revalidateData } from "./CommentsUtils";

export const addComment = async (desc: string, postSlug: string) => {
  try {
    await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    revalidateData(`/posts/${postSlug}`);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong!");
  }
};

const WriteComment = ({ postSlug }: { postSlug: string }) => {
  const [comment, setComment] = useState("");
  return (
    <div className={styles.write}>
      <textarea
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className={styles.input}
        maxLength={150}
        value={comment}
      />
      <button
        type="submit"
        onClick={() => addComment(comment, postSlug)}
        className={styles.button}>
        Send
      </button>
    </div>
  );
};

export default WriteComment;
