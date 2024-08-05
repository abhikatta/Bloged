"use client";
import { useRouter } from "next/navigation";
import styles from "./Pagination.module.css";
const Pagination = ({
  page,
  catSlug,
  hasNext,
  hasPrev,
}: {
  page: number;
  catSlug?: string;
  hasNext: boolean;
  hasPrev: boolean;
}) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}${catSlug ? `?cat=${catSlug}` : ""}`)}
        className={styles.button}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}${catSlug ? `?cat=${catSlug}` : ""}`)}
        className={styles.button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
