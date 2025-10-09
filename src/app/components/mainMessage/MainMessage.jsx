"use client";

import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import Loading from "../loading/Loading";

const MainMessage = ({ data, eng = false }) => {
  const TOKEN = "5530765545:AAFy5U47-r8OYc198-5blcgCR-cKB3_jowE";
  const CHAT_ID = "-1001517912943";
  const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);

  const sendMsg1 = async () => {
    if (name === "") {
      setErrorMsg(
        eng ? "Please enter your Name" : "Введіть будь-ласка своє Ім'я"
      );
      return;
    }
    if (phone === "") {
      setErrorMsg(
        eng
          ? "Please enter your phone number"
          : "Введіть будь-ласка свій номер телефону"
      );
      return;
    }
    const msg1 = `${
      eng ? "Request for consultation" : "Запит на консультацію"
    }\n${name}\n${phone}`;

    setLoading(true);

    axios
      .post(URI, {
        chat_id: CHAT_ID,
        text: msg1,
        parse_mode: "html",
        name,
        phone,
      })
      .then((res) => {
        setName("");
        setPhone("");
      })
      .catch((err) => {
        console.log(err);
      });

    const data1 = {
      name,
      phone,
      mail: "korotka@zsaytu.com",
      category: "Коротка",
      item: "Коротка",
      comment: "0",
      price: 0,
    };
    try {
      const res = await axios.post("/api/orders", data1);
      setLoading(false);
      setSuccess(
        eng ? "Your request has been accepted" : "Вашу заявку прийнято"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {errorMsg && (
        <div className={styles.alertWrapper} onClick={() => setErrorMsg("")}>
          <div className={styles.alert}>
            <p>{errorMsg}</p>
            <button onClick={() => setErrorMsg("")}>Гаразд</button>
          </div>
        </div>
      )}
      {success && (
        <div className={styles.alertWrapper} onClick={() => setSuccess("")}>
          <div className={styles.success}>
            <p>{success}</p>
            <button onClick={() => setSuccess("")}>Гаразд</button>
          </div>
        </div>
      )}
      {loading && <Loading />}
      <div className={styles.message}>
        <div className="container">
          <div className={styles.mesText}>
            <div className="redText">{eng ? "quick action" : "швидка дія"}</div>
            <div className="title">
              {!eng
                ? data.quiqTitle
                : data.quiqTitleen != ""
                ? data.quiqTitleen
                : data.quiqTitle}
            </div>
            <div className={styles.messegeWrapper}>
              <div className={styles.mesLeft}>
                <div className="text mt20">
                  {!eng
                    ? data.quiqText
                    : data.quiqTexten != ""
                    ? data.quiqTexten
                    : data.quiqText}
                </div>
              </div>
              <div className={styles.sendMessage + " mt20"}>
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder={eng ? "Name" : "І'мя"}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder={eng ? "Phone number" : "Телефон"}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="formGroup">
                  <button className={styles.button} onClick={sendMsg1}>
                    {eng ? "Order a service" : "Замовити послугу"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMessage;
