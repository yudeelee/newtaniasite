'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { LuArrowDownRightFromCircle } from 'react-icons/lu';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// import {
//   ImageKitAbortError,
//   ImageKitInvalidRequestError,
//   ImageKitServerError,
//   ImageKitUploadNetworkError,
//   upload,
// } from "@imagekit/next";
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

  const [progress, setProgress] = useState(0);

  // Create a ref for the file input element to access its files easily
  const fileInputRef = useRef(null);

  // Create an AbortController instance to provide an option to cancel the upload if needed.
  const abortController = new AbortController();





  // Extract the first file from the file input
  // const file = fileInput.files[0];

  // Retrieve authentication parameters for the upload.
  // let authParams;
  // try {
  //     authParams = await authenticator();
  // } catch (authError) {
  //     console.error("Failed to authenticate for upload:", authError);
  //     return;
  // }
  // const { signature, expire, publicKey } = authParams;
  
  // Call the ImageKit SDK upload function with the required parameters and callbacks.
  // try {
  //     const uploadResponse = await upload({
  //         // Authentication parameters
  //         expire,
  //         token: authParams.token,
  //         signature,
  //         publicKey,
  //         file,
  //         fileName: file.name, // Optionally set a custom file name
  //         // Progress callback to update upload progress state
  //         onProgress: (event) => {
  //             setProgress((event.loaded / event.total) * 100);
  //         },
  //         // Abort signal to allow cancellation of the upload if needed.
  //         abortSignal: abortController.signal,
  //     });
  //     console.log("Upload response:", uploadResponse, expire,
  //       token,
  //       signature,
  //       publicKey,);
  //       console.log(Date.now());
  //     try {
  //       const result = await axios.put('/api/image', {src: uploadResponse.url});
  //       const newImgs = [...images];
  //         newImgs.unshift({ src: result.data.src });
  //         setImages(newImgs);
  //       console.log(result.data.src);        
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     try {
  //       authParams = await authenticator();
  //   } catch (authError) {
  //       console.error("Failed to authenticate for upload:", authError);
  //       return;
  //   }
    
  //   console.log(authParams.signature, authParams.expire, authParams.token)
  // } catch (error) {
  //     // Handle specific error types provided by the ImageKit SDK.
  //     if (error instanceof ImageKitAbortError) {
  //         console.error("Upload aborted:", error.reason);
  //     } else if (error instanceof ImageKitInvalidRequestError) {
  //         console.error("Invalid request:", error.message);
  //     } else if (error instanceof ImageKitUploadNetworkError) {
  //         console.error("Network error:", error.message);
  //     } else if (error instanceof ImageKitServerError) {
  //         console.error("Server error:", error.message);
  //     } else {
  //         // Handle any other errors that may occur.
  //         console.error("Upload error:", error);
  //     }
  // }
// };

  const cloudName = 'dnsm5nwmg';
  const uploadPreset = 'tanias_preset';

  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState();

  

  // const onSuccess = async (res) => {
  //   console.log("Success", res);  
  //   try {
  //     const result = await axios.put('/api/image', {src: res.url});
  //     const newImgs = [...images];
  //       newImgs.unshift({ src: result.data.src });
  //       setImages(newImgs);
  //     console.log(result.data.src)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // const uploadFile = async (e) => {
  //   const file = e.target.files?.[0];
  //   if (!file) {
  //     return;
  //   }
  //   try {
  //     const data = new FormData();
  //     // data.append('file', file);
  //     // data.append('upload_preset', uploadPreset);
  //     data.set('file', file);
  //     const res = await axios.post('/api/image', data);
  //     // const res = await axios.post(
  //     //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //     //   data
  //     // );
  //     // const newImg = new Image({ src: res.data.url });
  //     // const imgres = await newImg.save();

  //     const newImgs = [...images];
  //     newImgs.unshift({ src: res.data.src });
  //     setImages(newImgs);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [fileL, setFileL] = useState();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileL(e.target.files[0]); // Using React state hook
    }
  };

  useEffect(() => {
    if(fileL) {
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
      .then( async (data) => { 
        const result = await axios.put('/api/image', {src: data?.data?.display_url});
        const newImgs = [...images];
        newImgs.unshift({ src: result.data.src });
        console.log(newImgs);
        setImages(newImgs);
        // console.log("Upload successful:", data)
        })
      .catch((error) => console.error("Upload error:", error));}
  }, [fileL]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get('/api/image');      
      console.log(res.data)
      setImages(res.data.reverse());
    };
    fetchImages();
  }, []);

  return (
    <div className={styles.uploadWrapper}>
      <div className={styles.uploader}>
        <div className={styles.header}>
          <div className={styles.choos}>
            <label htmlFor="sender">
               {/* <IoCloudUploadOutline />*/}
              Завантажити
              {/* <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
                <div>
                  <h2>File upload</h2>
                  <IKUpload fileName="test-upload.png" onError={onError} onSuccess={onSuccess} />
                </div>
              </ImageKitProvider>  */} 
              <input id="sender" type="file" onChange={handleFileChange}/>

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
