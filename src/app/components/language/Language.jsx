import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Language = () => {
  const [url, setUrl] = useState("");
  const [img, setImg] = useState("");
  const [lang, setLang] = useState("");
  useEffect(() => {
    const currentUrl = window.location.href;
    let newUrl;

    if (currentUrl.indexOf("/en") != -1) {
      newUrl =
        currentUrl.substring(0, currentUrl.indexOf("/en") + 1) +
        currentUrl.substring(currentUrl.indexOf("/en") + 4);
      setImg("/img/ukr1.jpg");
      setLang("Українська");
    } else {
      const dom = window.location.origin.length;
      newUrl =
        currentUrl.substring(0, dom) + "/en/" + currentUrl.substring(dom + 1);
      setImg("/img/bri1.jpg");
      setLang("English");
    }
    setUrl(newUrl);
  }, []);
  return (
    <div className={styles.flag}>
      <Link href={url}>
        <img src={img} alt={lang} />
      </Link>
    </div>
  );
};

export default Language;
