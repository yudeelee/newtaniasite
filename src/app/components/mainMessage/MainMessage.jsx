'use client';

import { useState } from "react";
import axios from "axios";
import styles from './styles.module.scss';

const MainMessage = ({data}) => {

    const TOKEN = "5530765545:AAFy5U47-r8OYc198-5blcgCR-cKB3_jowE";
  const CHAT_ID = "-1001517912943";
  const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [errorMsg, setErrorMsg] = useState("");
      const [success, setSuccess] = useState("");

      const sendMsg1 = async () => {
        if (name === "") {
          setErrorMsg("Введіть будь-ласка своє Ім'я");
          return;
        }
        if (phone === "") {
          setErrorMsg("Введіть будь-ласка свій номер телефону");
          return;
        }
        const msg1 = `Запит на консультацію\n${name}\n${phone}`;
    
        axios
          .post(URI, {
            chat_id: CHAT_ID,
            text: msg1,
            parse_mode: "html",
            name,
            phone,
          })
          .then((res) => {
            setSuccess("Вашу заявку прийнято");
            setName("");
            setPhone("");
            console.log('Result',res)
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
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
      }

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
    <div className={styles.message}>
        <div className="container">
          <div className={styles.mesText}>
            <div className="redText">швидка дія</div>
            <div className="title">Замовити консультацію</div>
            <div className={styles.messegeWrapper}>
              <div className={styles.mesLeft}>
                <div className="text mt20">
                  Тут Ви можете залишити запит на консультацію. Ми зателефонуємо
                  Вам та проінформуємо про вартість і час проведення зустрічі. У
                  разі, якщо Ваше запитання можна вирішити в режимі переписки,
                  ми надамо Вам зворотній зв'язок найближчим часом .
                </div>
              </div>
              <div className={styles.sendMessage + " mt20"}>
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder="І'мя"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder="Телефон"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="formGroup">
                  <button className={styles.button} onClick={sendMsg1}>
                    Замовити послугу
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainMessage