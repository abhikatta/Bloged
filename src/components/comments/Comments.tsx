import Link from "next/link";
import styles from "./Comments.module.css";
import Image from "next/image";
const Comments = () => {
  const status = true;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.2.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Et exercitation aliqua non ad occaecat laboris enim est amet culpa
            id. Proident ullamco sit pariatur cupidatat mollit eiusmod
            adipisicing cillum eiusmod proident magna amet amet in. Duis qui
            cupidatat dolore et deserunt laboris.
          </p>
        </div>{" "}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.2.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Et exercitation aliqua non ad occaecat laboris enim est amet culpa
            id. Proident ullamco sit pariatur cupidatat mollit eiusmod
            adipisicing cillum eiusmod proident magna amet amet in. Duis qui
            cupidatat dolore et deserunt laboris.
          </p>
        </div>{" "}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.2.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Et exercitation aliqua non ad occaecat laboris enim est amet culpa
            id. Proident ullamco sit pariatur cupidatat mollit eiusmod
            adipisicing cillum eiusmod proident magna amet amet in. Duis qui
            cupidatat dolore et deserunt laboris.
          </p>
        </div>{" "}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.2.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Et exercitation aliqua non ad occaecat laboris enim est amet culpa
            id. Proident ullamco sit pariatur cupidatat mollit eiusmod
            adipisicing cillum eiusmod proident magna amet amet in. Duis qui
            cupidatat dolore et deserunt laboris.
          </p>
        </div>{" "}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.2.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Et exercitation aliqua non ad occaecat laboris enim est amet culpa
            id. Proident ullamco sit pariatur cupidatat mollit eiusmod
            adipisicing cillum eiusmod proident magna amet amet in. Duis qui
            cupidatat dolore et deserunt laboris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
