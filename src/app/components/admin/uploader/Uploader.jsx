'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { LuArrowDownRightFromCircle } from 'react-icons/lu';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Uploader = ({ close, select }) => {
  const cloudName = 'dnsm5nwmg';
  const uploadPreset = 'tanias_preset';

  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get('/api/image');
      setImages(res.data.reverse());
    };
    fetchImages();
  }, []);

  const uploadFile = async (e) => {
    console.log('step1');
    const file = e.target.files?.[0];
    if (!file) return;
    console.log('dhsjhfjs');
    try {
      const data = new FormData();
      data.set('file', file);
      const res = await axios.post('/api/image', data);
      // const res = await axios.post(
      //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      //   data
      // );
      console.log(res);
      const newImgs = [...images];
      newImgs.unshift(res.data);
      setImages(newImgs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.uploadWrapper}>
      <div className={styles.uploader}>
        <div className={styles.header}>
          <div className={styles.choos}>
            <label>
              <IoCloudUploadOutline />
              Завантажити
              <input type='file' onChange={(e) => uploadFile(e)} />
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
