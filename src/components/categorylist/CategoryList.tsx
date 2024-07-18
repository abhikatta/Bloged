import Link from "next/link";
import styles from "./CategoryList.module.css";
import Image from "next/image";
const CategoryList = () => {
  const categoryELements: {
    name: string;
    style: string;
  }[] = [
    { name: "Style", style: styles.style },
    { name: "Fashion", style: styles.fashion },
    { name: "Food", style: styles.food },
    { name: "Travel", style: styles.travel },
    { name: "Culture", style: styles.culture },
    { name: "Coding", style: styles.coding },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categoryELements.map((item, index) => (
          <Link
            key={index}
            href={`/blog?cat=${item.name}`}
            className={`${styles.category} ${item.style}`}>
            <Image
              src={`/${item.name.toLowerCase()}.png`}
              alt={item.name}
              width={32}
              height={32}
              className={styles.image}
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
