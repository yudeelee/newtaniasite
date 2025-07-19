"use client";

import styles from "./styles.module.scss";
import { Fragment, useRef, useState, useEffect } from "react";
import Link from "next/link";

const ServicePage = ({ data, title, eng = false }) => {
  const [kikmore, setKikmore] = useState(false);
  const [diamore, setDiamore] = useState(false);

  const itemsRef = useRef([]);

  const [more, setMore] = useState(new Array(data.services.length).fill(false));

  const services = data.services;
  itemsRef.current = itemsRef.current.slice(0, data.services.length);

  const toEng = (value) => {
    if (value == "грн") return "uah";
    if (value == "грн/рік") return "uah/year";
    if (value == "грн/міс") return "uah/month";
    if (value == "грн/год") return "uah/hour";
    if (value == "$/год") return "$/hour";
    if (value == "$/міс") return "$/month";
    return value;
  };

  return (
    <div className={styles.service}>
      <Link href="/contact" className={styles.litteButton}>
        {eng ? "Order" : "Замовити"}
      </Link>
      <div className="container">
        <div className={styles.header}>
          <div className="title">{title}</div>
        </div>
        {services?.map((ser, idx) => {
          return (
            <Fragment key={idx}>
              <div
                className={styles.section}
                id={ser.slogId}
                ref={(el) => (itemsRef.current[idx] = el)}
              >
                <div className={styles.sectionHeader}>
                  {!eng ? ser.name : ser.nameen != "" ? ser.nameen : ser.name}
                </div>
                <div
                  className={
                    idx % 2 === 0
                      ? styles.sectionBody
                      : styles.sectionBodyReverse
                  }
                >
                  <div className={styles.sectionText}>
                    <div
                      className={"text" + " " + "mt20"}
                      dangerouslySetInnerHTML={{
                        __html: !eng
                          ? ser.text
                          : ser.texten.replace(/<[^>]*>/g, "") != ""
                          ? ser.texten
                          : ser.text,
                      }}
                    />
                    {ser.textMore &&
                      ser.textMore.replace(/(<([^>]+)>)/gi, "") != "" && (
                        <Fragment>
                          {!more[idx] && (
                            <button
                              className={styles.buttonMore}
                              onClick={() =>
                                setKikmore([...more, (more[idx] = !more[idx])])
                              }
                            >
                              {eng ? "Read more" : "Читати більше"}
                            </button>
                          )}
                          {more[idx] && (
                            <Fragment>
                              <div
                                className={"text"}
                                dangerouslySetInnerHTML={{
                                  __html: !eng
                                    ? ser.textMore
                                    : ser.textMoreen.replace(
                                        /(<([^>]+)>)/gi,
                                        ""
                                      ) != ""
                                    ? ser.textMoreen
                                    : ser.textMore,
                                }}
                              />
                            </Fragment>
                          )}
                          {more[idx] && (
                            <button
                              className={styles.buttonMore}
                              onClick={() => {
                                setKikmore([...more, (more[idx] = !more[idx])]);
                                itemsRef.current[idx].scrollIntoView();
                              }}
                            >
                              {eng ? "Collapse" : "Згорнути"}
                            </button>
                          )}
                        </Fragment>
                      )}
                  </div>
                  <div className={styles.sectionList}>
                    <table border="0">
                      <tbody>
                        {ser.items &&
                          ser.items.map((item, idx1) => {
                            return (
                              <Fragment key={idx1}>
                                <tr className={styles.row}>
                                  <td className={styles.text}>
                                    {!eng
                                      ? item.name
                                      : item.nameen != ""
                                      ? item.nameen
                                      : item.name}
                                  </td>
                                  <td className={styles.from}>
                                    {item.from ? (eng ? "from" : "від") : ""}
                                  </td>
                                  <td className={styles.price}>{item.price}</td>
                                  <td className={styles.nom}>
                                    {eng ? toEng(item.nominal) : item.nominal}
                                  </td>
                                </tr>
                                {idx == 0 &&
                                idx1 == 0 &&
                                (title == "Бухгалтерські послуги" ||
                                  title == "Accounting services") ? (
                                  <div
                                    className={styles.payWrapper}
                                    colSpan={4}
                                  >
                                    <a
                                      target="blank"
                                      className={styles.liqpay}
                                      href="https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiIyMDAwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCR0YPRhdCz0LDQu9GC0LXRgNGB0YzQutC40Lkg0YHRg9C/0YDQvtCy0ZbQtCIsInB1YmxpY19rZXkiOiJpMzIyODA3NjAyNjAiLCJsYW5ndWFnZSI6InVrIiwic3Vic2NyaWJlIjoxLCJzdWJzY3JpYmVfZGF0ZV9zdGFydCI6Im5vdyIsInN1YnNjcmliZV9wZXJpb2RpY2l0eSI6Im1vbnRoIn0=&signature=3r9n/w0ubi9rO2qml+Oyjk3Ki7c="
                                    >
                                      {eng ? "Subscribe" : "Оформити підписку"}
                                    </a>
                                  </div>
                                ) : idx == 0 &&
                                  idx1 == 0 &&
                                  (title == "Аудиторські послуги" ||
                                    title == "Аудиторські послуги") ? (
                                  <div
                                    className={styles.payWrapper}
                                    colSpan={4}
                                  >
                                    <a
                                      target="blank"
                                      className={styles.liqpay}
                                      href="https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIxMDkwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiJDaGVjayB1cCDQsdGW0LfQvdC10YHRgyIsInB1YmxpY19rZXkiOiJpMzIyODA3NjAyNjAiLCJsYW5ndWFnZSI6InVrIn0=&signature=iDoihs3SFZvcRD15aZ1U7bAJat8="
                                    >
                                      {eng
                                        ? "Make an order"
                                        : "Оформити замовлення"}
                                    </a>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </Fragment>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.line}></div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;
