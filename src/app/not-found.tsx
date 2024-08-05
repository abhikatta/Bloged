"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div
      style={{
        height: "48vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <p>Page Not Found!</p>

      <button
        className="goHomeButton"
        onClick={() => {
          router.push("/");
        }}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
