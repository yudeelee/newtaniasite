import Link from "next/link";
import styles from "./styles.module.scss";

const MainServices = ({ buh, yur, block, fin, finblock, eng = false }) => {
  return (
    <>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center" id="buhService">
            {eng ? "Accounting services" : "Бухгалтерські послуги"}
          </div>
          <div className={styles.serviceWrapper}>
            {buh?.map((item, idx) => (
              <Link key={idx} href={`/services#${item.slogId}`}>
                <div
                  className={`${styles.service} ${
                    idx == 0 ? styles.audit : ""
                  }`}
                >
                  {idx == 0 && (
                    <div className={styles.bestStamp}>Best seller</div>
                  )}
                  <div className={styles.serHeader}>
                    {!eng
                      ? item.name
                      : item.nameen != ""
                      ? item.nameen
                      : item.name}
                  </div>
                  <div className={styles.serBody}>
                    {!eng
                      ? item.description
                      : item.descriptionen != ""
                      ? item.descriptionen
                      : item.description}
                  </div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">
            {eng ? "Legal services" : "Юридичні послуги"}
          </div>
          <div className={styles.serviceWrapper}>
            {yur?.map((item, idx) => (
              <Link key={idx} href={`/services#${item.slogId}`}>
                <div className={`${styles.service}`}>
                  <div className={styles.serHeader}>
                    {!eng
                      ? item.name
                      : item.nameen != ""
                      ? item.nameen
                      : item.name}
                  </div>
                  <div className={styles.serBody}>
                    {!eng
                      ? item.description
                      : item.descriptionen != ""
                      ? item.descriptionen
                      : item.description}
                  </div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">
            {eng ? "Legal Services Packages" : "Пакети Юридичних послуг"}
          </div>
          <div className={styles.serviceWrapper}>
            {block?.map((item, idx) => (
              <Link key={idx} href={`/services#${item.slogId}`}>
                <div className={`${styles.service}`}>
                  <div className={styles.serHeader}>
                    {!eng
                      ? item.name
                      : item.nameen != ""
                      ? item.nameen
                      : item.name}
                  </div>
                  <div className={styles.serBody}>
                    {!eng
                      ? item.description
                      : item.descriptionen != ""
                      ? item.descriptionen
                      : item.description}
                  </div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center" id="auditService">
            {eng ? "Audit services" : "Аудиторські послуги"}
          </div>
          <div className={styles.serviceWrapper}>
            {fin?.map((item, idx) => (
              <Link key={idx} href={`/services#${item.slogId}`}>
                <div
                  className={`${styles.service} ${
                    idx == 0 ? styles.audit : ""
                  }`}
                >
                  {idx == 0 && (
                    <div className={styles.bestStamp}>Best seller</div>
                  )}
                  <div className={styles.serHeader}>
                    {!eng
                      ? item.name
                      : item.nameen != ""
                      ? item.nameen
                      : item.name}
                  </div>
                  <div className={styles.serBody}>
                    {!eng
                      ? item.description
                      : item.descriptionen != ""
                      ? item.descriptionen
                      : item.description}
                  </div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">
            {eng ? "Financial Services Packages" : "Пакети Фінансових послуг"}
          </div>
          <div className={styles.serviceWrapper}>
            {finblock?.map((item, idx) => (
              <Link key={idx} href={`/services#${item.slogId}`}>
                <div className={`${styles.service}`}>
                  <div className={styles.serHeader}>
                    {!eng
                      ? item.name
                      : item.nameen != ""
                      ? item.nameen
                      : item.name}
                  </div>
                  <div className={styles.serBody}>
                    {!eng
                      ? item.description
                      : item.descriptionen != ""
                      ? item.descriptionen
                      : item.description}
                  </div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
