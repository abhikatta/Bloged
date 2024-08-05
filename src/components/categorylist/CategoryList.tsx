import Link from "next/link";
import styles from "./CategoryList.module.css";
import Image from "next/image";
import { Category } from "@prisma/client";
import { API_BASE_URL } from "@/constants";
const CategoryList = async () => {
  const res = await fetch(`${API_BASE_URL}/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch Data!");
  }
  const categories: Category[] = await res.json();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.length > 0 &&
          categories.map((item) => (
            <Link
              key={item.id}
              href={`/blog?cat=${item.slug}`}
              className={`${styles.category} ${styles[item.slug]}`}>
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.slug}
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
