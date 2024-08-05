import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";
const Page = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const urlSearchParams = new URLSearchParams(searchParams);

  const page = parseInt(urlSearchParams.get("page")) || 1;
  const cat = urlSearchParams.get("cat");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat.slice(0, 1).toUpperCase() + cat.slice(1)} Blogs</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default Page;
