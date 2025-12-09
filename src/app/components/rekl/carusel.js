"use client";

import "./carusel.css";
import React, { useLayoutEffect, useState, useEffect } from "react";

import caruselImg1 from "../../../../public/img/1uahmatters.charity_logo_1.webp";
import caruselImg2 from "../../../../public/img/black.webp";
import caruselImg3 from "../../../../public/img/crystall.webp";
import caruselImg4 from "../../../../public/img/Asnandent_logo.webp";
import caruselImg5 from "../../../../public/img/Aurastomatologiia_logo_1.webp";
import caruselImg6 from "../../../../public/img/b.by.julia_logo.webp";
import caruselImg7 from "../../../../public/img/Bazar.club_logo_1.webp";
import caruselImg8 from "../../../../public/img/Brainspot_logo.webp";
import caruselImg9 from "../../../../public/img/Cooksy_logo_1.webp";
import caruselImg10 from "../../../../public/img/DeckoPlast_logo.webp";
import caruselImg11 from "../../../../public/img/Mocko.store_logo.webp";
import caruselImg12 from "../../../../public/img/Service pobut_logo_1.webp";
import caruselImg13 from "../../../../public/img/Tvoya_polygraphy.webp";
import caruselImg14 from "../../../../public/img/bytech.webp";
import caruselImg15 from "../../../../public/img/diamy.webp";
import caruselImg16 from "../../../../public/img/beegu.webp";
import caruselImg17 from "../../../../public/img/tomik.webp";
import Image from "next/image";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 1200) {
        setSize([
          window.innerWidth / 2.2,
          window.innerWidth / 5.5,
          window.innerWidth / 8.5,
        ]);
      } else {
        setSize([600, 250, 150]);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Carusel = ({ eng = false }) => {
  let radius = 700;
  let autoRotate = true;
  let rotateSpeed = -60;
  let imgWidth = 200;
  let imgHeight = 100;

  const [r, w, h] = useWindowSize();
  radius = r;
  imgWidth = w - 30;
  imgHeight = h - 15;

  useEffect(() => {
    setTimeout(init, 1000);

    const ospin = document.getElementById("spin-container");
    const aImg = ospin.getElementsByTagName("img");
    const aVid = document.getElementsByTagName("video");
    const aEle = [...aImg, ...aVid];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    const ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 8 + "s";
      }
    }

    if (autoRotate) {
      let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].addEventListener("mouseenter", () => {
          ospin.style.animationPlayState = "paused";
        });
        aEle[i].addEventListener("mouseleave", () => {
          ospin.style.animationPlayState = "running";
        });
      }
    }
  });

  function clickImg(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <div className="carusel-wrapper">
        <h2 className="titleCar center">
          {eng ? "Our clients" : "Наші клієнти"}
        </h2>
        <div id="drag-container">
          <div id="spin-container">
            <Image
              src={caruselImg1}
              alt="reklama1"
              width={250}
              height={150}
              onClick={() => clickImg("https://1uahmatters.charity/")}
            />
            <Image
              src={caruselImg2}
              alt="reklama2"
              width={250}
              height={150}
              onClick={() => clickImg("https://blackthorn-vision.com/")}
            />
            <Image
              src={caruselImg3}
              alt="reklama3"
              width={250}
              height={150}
              onClick={() => clickImg("https://crystall.shop/")}
            />
            <Image
              src={caruselImg4}
              alt="reklama4"
              width={250}
              height={150}
              onClick={() => clickImg("https://asnandent.com.ua/")}
            />
            <Image
              src={caruselImg5}
              alt="reklama5"
              width={250}
              height={150}
              onClick={() =>
                clickImg("https://www.instagram.com/aurastomatologiia/")
              }
            />
            <Image
              src={caruselImg6}
              alt="reklama6"
              width={250}
              height={150}
              onClick={() => clickImg("https://bbyjulia-cs3438032.prom.ua/ua/")}
            />
            <Image
              src={caruselImg7}
              alt="reklama7"
              width={250}
              height={150}
              onClick={() => clickImg("https://www.bazar.club/en")}
            />
            <Image
              src={caruselImg8}
              alt="reklama8"
              width={250}
              height={150}
              onClick={() => clickImg("https://brain-spot.com/")}
            />
            <Image
              src={caruselImg9}
              alt="reklama9"
              width={250}
              height={150}
              onClick={() => clickImg("https://cooksy.com.ua/")}
            />
            <Image
              src={caruselImg10}
              alt="reklama10"
              width={250}
              height={150}
              onClick={() =>
                clickImg("https://www.instagram.com/deckoplast/?hl=uk")
              }
            />
            <Image
              src={caruselImg11}
              alt="reklama11"
              width={250}
              height={150}
              onClick={() => clickImg("https://www.instagram.com/mocko.store/")}
            />
            <Image
              src={caruselImg12}
              alt="reklama12"
              width={250}
              height={150}
              onClick={() => clickImg("https://service-pobut.com.ua/")}
            />
            <Image
              src={caruselImg13}
              alt="reklama13"
              width={250}
              height={150}
              onClick={() =>
                clickImg("https://www.instagram.com/tvoya_polygraphy/?hl=uk")
              }
            />
            <Image
              src={caruselImg14}
              alt="reklama14"
              width={250}
              height={150}
              onClick={() => clickImg("https://bftech.pro/")}
            />
            <Image
              src={caruselImg15}
              alt="reklama15"
              width={250}
              height={150}
              onClick={() => clickImg("https://www.instagram.com/bo.diia.my/")}
            />
            <Image
              src={caruselImg16}
              alt="reklama16"
              width={250}
              height={150}
              onClick={() => clickImg("https://www.beezhu.com/")}
            />
            <Image
              src={caruselImg17}
              alt="reklama17"
              width={250}
              height={150}
              onClick={() =>
                clickImg(
                  "https://tomik.org.ua/?gad_source=1&gclid=Cj0KCQiA_qG5BhDTARIsAA0UHSLUQaER8bglscnVTPKOH06DPuEKnQBHNF5IxFxW3Ae64fVbKMUK_4YaAtpnEALw_wcB"
                )
              }
            />
            <p></p>
          </div>
          <div id="ground"></div>
        </div>
      </div>
    </>
  );
};

export default Carusel;
