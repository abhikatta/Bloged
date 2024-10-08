import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import { URLSearchParams } from "url";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home({ searchParams }: { searchParams: URLSearchParams }) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const page = parseInt(urlSearchParams.get("page")) || 1;
  const cat = urlSearchParams.get("cat");
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Suspense fallback={<Loading />}>
          <CardList page={page} cat={cat} />
        </Suspense>
        <Menu />
      </div>
    </div>
  );
}
