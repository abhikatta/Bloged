import Image from "next/image";
import styles from "./Featured.module.css";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Checkout the featured blog! </b>Discover more blogs below
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="image" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            loremNulla aute reprehenderit ea ad quis anim adipisicing cillum
            duis aliquip.
          </h1>
          <p className={styles.postDesc}>
            loremNulla aute reprehenderit ea ad quis anim adipisicing cillum
            duis aliquip. loremNulla aute reprehenderit ea ad quis anim
            adipisicing cillum duis aliquip. loremNulla aute reprehenderit ea ad
            quis anim adipisicing cillum duis aliquip.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
