import Link from "next/link";
import styles from "./styles.module.scss";

import heroImg from "../../../../public/img/backkk5-min.jpg";
import Image from "next/image";

const MainHero = ({ data, eng = false }) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            {!eng ? data.title : data.titleen != "" ? data.titleen : data.title}
          </h1>
          <h2 className={styles.heroSubTitle}>
            {!eng
              ? data.subTitle
              : data.subTitleen != ""
              ? data.subTitleen
              : data.subTitle}
            <span className={styles.oneSub}>
              {" "}
              {!eng
                ? data.subTitle2
                : data.subTitle2en != ""
                ? data.subTitle2en
                : data.subTitle2}{" "}
            </span>
            <span className={styles.twoSub}>
              {!eng
                ? data.subTitle3
                : data.subTitle3en != ""
                ? data.subTitle3en
                : data.subTitle3}
            </span>
          </h2>
          <a href="#buhService">
            <p className={`text ${styles.headerSlog}`}>
              {!eng
                ? data.button1
                : data.button1en != ""
                ? data.button1en
                : data.button1}
            </p>
          </a>
          <br />
          <a href="#auditService">
            <p className={`text ${styles.headerSlog}`}>
              {!eng
                ? data.button2
                : data.button2en != ""
                ? data.button2en
                : data.button2}
            </p>
          </a>
          <br />
          <Link
            href={eng ? "/en/contact" : "/contact"}
            className={styles.button}
          >
            {eng ? "Order a service" : "Замовити послугу"}
          </Link>
        </div>
        <div className={styles.heroImg}>
          <Image src={heroImg} alt="Hero" width={1200} height={600} priority />

          {/* <img
            src="/img/backkk5-min.jpg"
            alt="Main Image"
            fetchpriority="high"
          /> */}
        </div>
      </div>
    </>
  );
};

export default MainHero;
