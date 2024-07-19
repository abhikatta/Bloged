import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";
const Menu = () => {
  const menuItems: { name: string; style: string }[] = [
    {
      name: "Travel",
      style: styles.travel,
    },
    { name: "Culture", style: styles.culture },
    {
      name: "Food",
      style: styles.food,
    },
    { name: "Fashion", style: styles.fashion },
  ];

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
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>{"What's Hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <div className={styles.items}>
          {menuItems.map((item, index) => {
            return (
              <Link key={index} href="/" className={styles.item}>
                <div className={styles.textContainer}>
                  <span className={`${styles.popular} ${item.style}`}>
                    {item.name}
                  </span>
                  <h3 className={styles.postTitle}>
                    Sint ea eu sunt commodo incididunt adipisicing aliquip
                    incididunt duis.
                  </h3>
                  <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}> - 10.3.2022</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categoryList}>
          {categoryELements.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/blog?cat=style${item.name}`}
                className={`${styles.category} ${item.style}`}>
                {item.name}
              </Link>
            );
          })}
        </div>
        <h2 className={styles.subtitle}>{"Chosen by the editor"}</h2>
        <h1 className={styles.title}>Editors Pick</h1>
        <div className={styles.items}>
          {menuItems.map((item, index) => {
            return (
              <Link key={index} href="/" className={styles.item}>
                <div className={styles.imgContainer}>
                  <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                  <span className={`${styles.editorspick} ${item.style}`}>
                    {item.name}
                  </span>
                  <h3 className={styles.postTitle}>
                    Sint ea eu sunt commodo incididunt adipisicing aliquip
                    incididunt duis.
                  </h3>
                  <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}> - 10.3.2022</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
