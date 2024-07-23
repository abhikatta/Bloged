"use client";
import Image from "next/image";
import styles from "./Write.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Write = () => {
  const [isEditOptions, setIsEditOptions] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}></input>
      <div className={styles.editor}>
        <button
          onClick={() => setIsEditOptions((prev) => !prev)}
          className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {isEditOptions && (
          <div className={styles.add}>
            <button className={styles.button}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write something"
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Write;
