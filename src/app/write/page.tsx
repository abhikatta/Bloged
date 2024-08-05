"use client";
import Image from "next/image";
import styles from "./Write.module.css";
import { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { Category } from "@prisma/client";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Write = () => {
  const [isEditOptions, setIsEditOptions] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [value, setValue] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/categories`, {
          cache: "no-store",
        });

        const categories: Category[] = await res.json();
        setCategories(categories);
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong fetching post categories!");
      }
    };
    const upload = () => {
      if (!image) return;

      const name = new Date().getTime() + image.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.log("Firebase Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              console.log("File available at", url);
              setDownloadUrl(url);
            })
            .catch((error) => {
              console.log("Error getting download URL:", error);
            });
        }
      );
    };

    image && upload();
    fetchCategories();
  }, [image]);

  const handleSubmit = async () => {
    try {
      const slug = nanoid(10);
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: downloadUrl,
          slug,
          catSlug: selectedCategory || "style",
        }),
      });
      router.push(`/posts/${slug}`);
    } catch (error) {
      console.log("Error while publishing post: ", error);
    }
  };

  const isPublishEnabled = useMemo(() => {
    return title.trim() !== "" && value.trim() !== "<p><br></p>";
  }, [title, value]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="*Title"
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
      *
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={styles.select}
      >
        <option value="" disabled hidden>
          Select a Category
        </option>
        {categories.map((category) => (
          <option key={category.slug} className={styles.option} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>
      <div className={styles.editor}>
        <button
          onClick={async () => {
            setIsEditOptions((prev) => !prev);
          }}
          className={styles.button}
        >
          <Image
            src="/plus.png"
            alt="add files"
            style={{
              transform: `rotate(${isEditOptions ? 45 : 0}deg)`,
              transition: "transform 300ms ease-in-out",
            }}
            width={16}
            height={16}
          />
        </button>

        <div
          className={styles.add}
          style={{
            visibility: isEditOptions ? "visible" : "hidden",
            transform: `translateX(${isEditOptions ? "0%" : "-20px"})`,
            opacity: isEditOptions ? 1 : 0,
            transition: `transform 300ms ease-in-out, opacity 300ms ease-in-out, visibility 0s linear ${
              isEditOptions ? "0s" : "300ms"
            }`,
          }}
        >
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

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="*Write something..."
        />
      </div>
      <button onClick={handleSubmit} disabled={!isPublishEnabled} className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default Write;
