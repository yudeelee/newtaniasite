'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { LuArrowDownRightFromCircle } from 'react-icons/lu';
import { AiOutlineCloseCircle } from 'react-icons/ai';
// import Image from '../../../../../models/Image';

import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const authenticator = async () => {
  try {
    const response = await fetch("/api/authimage");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const onError = (err) => {
  console.log("Error", err);
};



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

  const onSuccess = async (res) => {
    console.log("Success", res);  
    try {
      const result = await axios.put('/api/image', {src: res.url});
      const newImgs = [...images];
        newImgs.unshift({ src: result.data.src });
        setImages(newImgs);
      console.log(result.data.src)
    } catch (error) {
      console.log(error)
    }
  };

  const uploadFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    try {
      const data = new FormData();
      // data.append('file', file);
      // data.append('upload_preset', uploadPreset);
      data.set('file', file);
      const res = await axios.post('/api/image', data);
      // const res = await axios.post(
      //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      //   data
      // );
      // const newImg = new Image({ src: res.data.url });
      // const imgres = await newImg.save();

      const newImgs = [...images];
      newImgs.unshift({ src: res.data.src });
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
              <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
        <div>
          <h2>File upload</h2>
          <IKUpload fileName="test-upload.png" onError={onError} onSuccess={onSuccess} />
        </div>
      </ImageKitProvider>
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
