import "./carusel.css";
import React, { useLayoutEffect, useState, useEffect } from "react";

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

const Carusel = (props) => {
  let radius = 600;
  let autoRotate = true;
  let rotateSpeed = -60;
  let imgWidth = 250;
  let imgHeight = 150;

  const [r, w, h] = useWindowSize();
  radius = r;
  imgWidth = w - 10;
  imgHeight = h - 5;

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
        <div className="titleCar center">Наші клієнти</div>
        <div id="drag-container">
          <div id="spin-container">
            {/* <img
              src='/img/Dukachi_logo.png'
              alt=''
              onClick={() => clickImg('https://dukachi.com/uk-ua/')}
            /> */}
            <img
              src="/img/1uahmatters.charity_logo_1.png"
              alt=""
              onClick={() => clickImg("https://1uahmatters.charity/")}
            />
            <img
              src="/img/Adeo_dental_logo.png"
              alt=""
              onClick={() =>
                clickImg("https://www.instagram.com/adeo_dental/?hl=uk")
              }
            />
            <img
              src="/img/Asnandent_logo.png"
              alt=""
              onClick={() => clickImg("https://asnandent.com.ua/")}
            />
            <img
              src="/img/Aurastomatologiia_logo_1.png"
              alt=""
              onClick={() =>
                clickImg("https://www.instagram.com/aurastomatologiia/")
              }
            />
            <img
              src="/img/b.by.julia_logo.png"
              alt=""
              onClick={() => clickImg("https://bbyjulia-cs3438032.prom.ua/ua/")}
            />
            <img
              src="/img/Bazar.club_logo_1.png"
              alt=""
              onClick={() => clickImg("https://www.bazar.club/en")}
            />
            <img
              src="/img/Brainspot_logo.png"
              alt=""
              onClick={() => clickImg("https://brain-spot.com/")}
            />
            <img
              src="/img/Cooksy_logo_1.png"
              alt=""
              onClick={() => clickImg("https://cooksy.com.ua/")}
            />
            <img
              src="/img/DeckoPlast_logo.png"
              alt=""
              onClick={() =>
                clickImg("https://www.instagram.com/deckoplast/?hl=uk")
              }
            />
            <img
              src="/img/Mocko.store_logo.png"
              alt=""
              onClick={() => clickImg("https://www.instagram.com/mocko.store/")}
            />
            <img
              src="/img/Service pobut_logo_1.png"
              alt=""
              onClick={() => clickImg("https://service-pobut.com.ua/")}
            />
            <img
              src="/img/Tvoya_polygraphy.png"
              alt=""
              onClick={() =>
                clickImg("https://www.instagram.com/tvoya_polygraphy/?hl=uk")
              }
            />
            <img
              src="/img/bytech.png"
              alt=""
              onClick={() => clickImg("https://bftech.pro/")}
            />
            <img
              src="/img/diamy.png"
              alt=""
              onClick={() => clickImg("https://www.instagram.com/bo.diia.my/")}
            />
            <img
              src="/img/beegu.png"
              alt=""
              onClick={() => clickImg("https://www.beezhu.com/")}
            />
            <img
              src="/img/tomik.png"
              alt=""
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
