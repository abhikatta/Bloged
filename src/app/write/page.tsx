"use client";
import Image from "next/image";
import styles from "./Write.module.css";
import { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { Category } from "@prisma/client";
import { nanoid } from "nanoid";

const Write = () => {
  const [isEditOptions, setIsEditOptions] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [value, setValue] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/categories`, {
          cache: "no-store",
        });

        const categories: Category[] = await res.json();
        console.log(categories);

        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    const upload = () => {
      const name = new Date().getTime() + image.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",

        (error) => {
          console.log("Firebase error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setDownloadUrl(downloadURL);
          });
        }
      );
    };

    image && upload();
    fetchCategories();
  }, [image]);

  const handleSubmit = async () => {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: downloadUrl,
        slug: nanoid(10),
        catSlug: selectedCategory || "style",
      }),
    });
  };

  const isPublishEnabled = useMemo(() => {
    return title.trim() !== "" && (value.trim() !== "<p><br></p>" || !value);
  }, [title, value]);
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <input
        type="file"
        accept="image/jpeg"
        id="image"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ display: "none" }}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={styles.select}
      >
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>

      <div className={styles.editor}>
        <button onClick={() => setIsEditOptions((prev) => !prev)} className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>

        {isEditOptions && (
          <div className={styles.add}>
            <button className={styles.button}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
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
          placeholder="Write something..."
        />
      </div>
      <button onClick={handleSubmit} disabled={!isPublishEnabled} className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default Write;
