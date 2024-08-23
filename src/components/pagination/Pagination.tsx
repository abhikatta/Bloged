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
  const searchParams = new URLSearchParams();

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        onClick={() => {
          searchParams.set("page", String(page - 1));
          if (catSlug) {
            searchParams.set("cat", catSlug);
          }
          router.push(`/blog?${searchParams.toString()}`);
        }}
        className={styles.button}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => {
          searchParams.set("page", String(page + 1));
          if (catSlug) {
            searchParams.set("cat", catSlug);
          }
          router.push(`/blog?${searchParams.toString()}`);
        }}
        className={styles.button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
