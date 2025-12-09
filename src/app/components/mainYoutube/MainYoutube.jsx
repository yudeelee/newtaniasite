"use client";

import YouTube from "react-youtube";
import styles from "./styles.module.scss";

const MainYoutube = ({ data, eng = false }) => {
  const onReady = (event) => {
    const player = event.target;
    player.stopVideo();
  };
  const onError = (error) => {
    console.error("YouTube Player Error:", error);
  };
  return (
    <>
      <div className={styles.youtube}>
        <div className={styles.rolik}>
          <YouTube
            videoId={data.youtubeId}
            onReady={onReady}
            onError={onError}
          />
        </div>
        <div className={styles.yuText}>
          <div className="redText">
            {eng ? "About The Company" : "Про Компанію"}
          </div>
          <h2 className="title">
            {!eng
              ? data.aboutTitle
              : data.aboutTitleen != ""
              ? data.aboutTitleen
              : data.aboutTitle}
          </h2>
          <div
            className={"text" + " " + "mt20"}
            dangerouslySetInnerHTML={{
              __html: !eng
                ? data.aboutText
                : data.aboutTexten.replace(/<[^>]*>/g, "") != ""
                ? data.aboutTexten
                : data.aboutText,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MainYoutube;
