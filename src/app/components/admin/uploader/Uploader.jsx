"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { LuArrowDownRightFromCircle } from "react-icons/lu";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Loading from "../../loading/Loading";

const Uploader = ({ close, select }) => {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState();

  const [loading, setLoading] = useState(false);

  const [fileL, setFileL] = useState();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (fileL) {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", fileL);
      fetch(
        "https://api.imgbb.com/1/upload?key=8f32c219c26c11d448d0e509dc8aa69c",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then(async (data) => {
          const result = await axios.put("/api/image", {
            src: data?.data?.display_url,
          });
          const newImgs = [...images];
          newImgs.unshift({ src: result.data.src });
          setImages(newImgs);
          setLoading(false);
        })
        .catch((error) => console.error("Upload error:", error));
    }
  }, [fileL]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get("/api/image");
      setImages(res.data.reverse());
    };
    fetchImages();
  }, []);

  return (
    <div className={styles.uploadWrapper}>
      {loading && <Loading />}
      <div className={styles.uploader}>
        <div className={styles.header}>
          <div className={styles.choos}>
            <label htmlFor="sender">
              Завантажити
              <input id="sender" type="file" onChange={handleFileChange} />
            </label>
          </div>
          <div className={styles.topButtons}>
            <button
              onClick={() => {
                select(images[selected].src);
                close();
              }}
            >
              <LuArrowDownRightFromCircle />
              Вибрати
            </button>
            <button onClick={close}>
              <AiOutlineCloseCircle />
              Закрити
            </button>
          </div>
        </div>
        <div className={styles.fileList}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              data-id={idx}
              onClick={() => setSelected(idx)}
              className={selected === idx ? styles.selected : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uploader;
