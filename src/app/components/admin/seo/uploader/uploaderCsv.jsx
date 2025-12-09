"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function UploadCsv() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      setData(json.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.uploader}>
      <label htmlFor="uploadcsv">
        Завантажити CSV
        <input
          id="uploadcsv"
          type="file"
          accept=".csv"
          onChange={handleUpload}
        />
      </label>
    </div>
  );
}
