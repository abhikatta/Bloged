import Menu from "@/components/menu/Menu";
import styles from "./slugPage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            consectetur minim dolore voluptate cupidatat.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image
                src="/p1.jpeg"
                fill
                className={styles.avatar}
                alt="infoimage"
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.1.2020</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill className={styles.image} alt="infoimage" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Ad in nisi amet nisi laborum laborum pariatur esse dolore veniam.
              Sint cupidatat nisi quis elit exercitation excepteur exercitation.
              Sint ullamco consequat sint excepteur. Reprehenderit labore irure
              occaecat quis consectetur. Aliqua reprehenderit mollit velit ipsum
              laborum sunt reprehenderit dolore eu enim qui deserunt non.
            </p>
            <h2>
              Fugiat Lorem ex Lorem dolore dolor deserunt commodo duis voluptate
              ut.
            </h2>
            <p>
              Ad in nisi amet nisi laborum laborum pariatur esse dolore veniam.
              Sint cupidatat nisi quis elit exercitation excepteur exercitation.
              Sint ullamco consequat sint excepteur. Reprehenderit labore irure
              occaecat quis consectetur. Aliqua reprehenderit mollit velit ipsum
              laborum sunt reprehenderit dolore eu enim qui deserunt non.
            </p>
            <p>
              Ad in nisi amet nisi laborum laborum pariatur esse dolore veniam.
              Sint cupidatat nisi quis elit exercitation excepteur exercitation.
              Sint ullamco consequat sint excepteur. Reprehenderit labore irure
              occaecat quis consectetur. Aliqua reprehenderit mollit velit ipsum
              laborum sunt reprehenderit dolore eu enim qui deserunt non.
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
