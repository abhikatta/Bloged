import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categorylist/CategoryList";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";
import { URLSearchParams } from "url";

export default function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const page = parseInt(urlSearchParams.get("page")) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
