"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import styles from "./styles.module.scss";
import Image from "next/image";

const MainProposition = ({ photos, data, eng = false }) => {
  return (
    <>
      <div className={styles.poroposition + " " + "mt100"}>
        <div className={styles.propText}>
          <div className="redText">
            {eng ? "what we offer!" : "що ми пропонуємо!"}{" "}
          </div>
          <div className="title mb20">
            {!eng
              ? data.propositionTitle
              : data.propositionTitleen != ""
              ? data.propositionTitleen
              : data.propositionTitle}
          </div>
          <ul>
            {!eng || data.propositionItemsen.length == 0
              ? data.propositionItems &&
                data.propositionItems.map((prop, idx) => {
                  return (
                    <li key={idx}>
                      <img src="/img/galochka.svg" alt="" />
                      <span className="text">{prop}</span>
                    </li>
                  );
                })
              : eng && data.propositionItemsen.length != 0
              ? data.propositionItemsen.map((prop, idx) => {
                  return (
                    <li key={idx}>
                      <img src="/img/galochka.svg" alt="" />
                      <span className="text">{prop}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        <div className={styles.slider}>
          <Swiper
            speed={1500}
            loop={true}
            autoplay
            spaceBetween={20}
            slidesPerView={2}
            modules={[Autoplay]}
          >
            {photos.workers.map((ab, idx) => {
              if (!ab.unvisible) {
                return (
                  <SwiperSlide key={idx}>
                    <Image
                      src={ab.photo}
                      alt="photo"
                      width={100}
                      height={400}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainProposition;
