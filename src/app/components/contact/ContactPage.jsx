"use client";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/Loading";

const ContactPage = ({ eng = false }) => {
  const TOKEN = "5530765545:AAFy5U47-r8OYc198-5blcgCR-cKB3_jowE";
  const CHAT_ID = "-1001517912943";
  const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [sections, setSections] = useState([]);
  const [sectionsen, setSectionsen] = useState([]);
  const [section, setSection] = useState();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [text, setText] = useState();
  const [texten, setTexten] = useState();
  const [contacts, setContacts] = useState();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState([]);

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-16508963435/BmJ4CPKY98wZEOuUi8A9",
      transaction_id: "",
      event_callback: callback,
    });
    return false;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/servicepage");
        setData(res.data.services);
        setSections(
          res.data.services.map((sec) => {
            return { sec: sec.name, secen: sec.nameen || "" };
          })
        );

        setItems(res.data.services[0].items);
        setSection(res.data.services[0]);
        setItem(res.data.services[0].items[0].name);
        setPrice(res.data.services[0].items[0].price);

        const conts = await axios.get("/api/contactpage");
        setContacts(conts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const current = data?.find((sec) => sec.name === section);
    setItems(current?.items);
    setItem(current?.items[0].name);
    setPrice(current?.items[0].price);
  }, [section]);

  useEffect(() => {
    const cutItem = items?.find((it) => it.name === item);
    setPrice(cutItem?.price);
  }, [item]);

  function validateEmail(email) {
    var re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  const sendMessage = async () => {
    if (name === "") {
      setErrorMsg("Введіть будь-ласка своє Ім'я");
      return;
    }
    if (phone === "") {
      setErrorMsg("Введіть будь-ласка свій номер телефону");
      return;
    }
    if (email === "" || !validateEmail(email)) {
      setErrorMsg("Введіть будь-ласка свій E-mail");
      return;
    }
    if (!section) {
      setErrorMsg("Виберіть категорію");
      return;
    }
    if (item === "...") {
      setErrorMsg("Виберіть розділ");
      return;
    }
    const msg = `${name}\n${phone}\n${email}\n${section}\n${item}\n${price}\n${comment}`;

    const data = {
      name,
      phone,
      mail: email,
      category: section,
      item,
      comment,
      price,
    };

    // try {
    //   const res = await axios.post("/api/orders", data);
    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error);
    // }
    setLoading(true);
    try {
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof url != "undefined") {
            window.location = url;
          }
        };
        gtag("event", "conversion", {
          send_to: "AW-16508963435/BmJ4CPKY98wZEOuUi8A9",
          transaction_id: "",
          event_callback: callback,
        });
        return false;
      }

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-16508963435");
      gtag_report_conversion("/contact");
      axios
        .post(URI, {
          chat_id: CHAT_ID,
          text: msg,
          parse_mode: "html",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("bad");
        });
      try {
        const res = await axios.post("/api/orders", data);
        setLoading(false);
        setErrorMsg("Ваше замовлення прийнято");
        console.log(res.data);
      } catch (error) {
        console.log("RRRRRRRRRRRRRRRRRRR");
        // console.log("RRRRRRRRRRRRRRRRRRR", error);
      }
      setName("");
      setPhone("");
      setEmail("");
      setComment("");
    } catch (error) {
      console.log("QQQQQQQQQQQQQQQ");
      // console.log("QQQQQQQQQQQQQQQ", error);
    }
  };

  return (
    <div className={styles.contact}>
      {errorMsg && (
        <div className={styles.alertWrapper} onClick={() => setErrorMsg("")}>
          <div className={styles.alert}>
            <p>{errorMsg}</p>
            <button onClick={() => setErrorMsg("")}>
              {eng ? "Done" : "Гаразд"}
            </button>
          </div>
        </div>
      )}
      {loading && <Loading />}
      <div className="container">
        <div className={styles.contactHeader}>
          <h1 className="title">
            {eng ? "Order a service" : "Замовити послугу"}
          </h1>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.contacts}>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src="/img/phone.png" alt="" />
              </div>
              <div className={styles.conText}>
                {eng ? "Phone number" : "Телефон"}
              </div>
            </div>
            <div className={styles.conData}>
              <a href="tel:073-418-7147">{contacts?.phone}</a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src="/img/mail.png" alt="" />
              </div>
              <div className={styles.conText}>
                {eng ? "E-mail" : "Електронна пошта"}
              </div>
            </div>
            <div className={styles.conData}>
              <a href={`mailto:${contacts?.mail}`}>{contacts?.mail}</a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src="/img/instagram.png" alt="" />
              </div>
              <div className={styles.conText}>Instagram</div>
            </div>
            <div className={styles.conData}>
              <a href={`https://${contacts?.instagram}`}>
                {contacts?.instagram}
              </a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src="/img/telegram.png" alt="" />
              </div>
              <div className={styles.conText}>Telegram</div>
            </div>
            <div className={styles.conData}>
              <a href={`https://${contacts?.telegram}`}>{contacts?.telegram}</a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src="/img/youtube.png" alt="" />
              </div>
              <div className={styles.conText}>YouTube</div>
            </div>
            <div className={styles.conData}>
              <a href={`https://${contacts?.youtube}`}>{contacts?.youtube}</a>
            </div>
            <div
              className={"text" + " " + "mt100"}
              dangerouslySetInnerHTML={{
                __html: !eng
                  ? contacts?.text
                  : contacts?.texten.replace(/<[^>]*>/g, "") != ""
                  ? contacts?.texten
                  : contacts?.text,
              }}
            />
          </div>
          <div className={styles.conForm}>
            <div className={styles.formControl}>
              <input
                value={name || ""}
                type="text"
                placeholder={eng ? "Name" : "Ім’я"}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formControl}>
              <input
                value={phone || ""}
                type="text"
                placeholder={eng ? "Phone number" : "Телефон"}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.formControl}>
              <input
                value={email || ""}
                type="text"
                placeholder={eng ? "E-mail" : "Електронна адреса"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formControl}>
              <select onChange={(e) => setSection(e.target.value)}>
                <option value="...">...</option>
                {sections?.map((sec, idx) => {
                  return (
                    <option key={idx} value={sec.sec}>
                      {!eng ? sec.sec : sec.secen != "" ? sec.secen : sec.sec}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.formControl}>
              <select value={item} onChange={(e) => setItem(e.target.value)}>
                <option value="...">...</option>
                {items?.map((itm, idx) => {
                  return (
                    <option key={idx} value={itm.name}>
                      {!eng
                        ? itm.name
                        : itm.nameen != ""
                        ? itm.nameen
                        : itm.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.formControl}>
              <textarea
                value={comment || ""}
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder={eng ? "Comment" : "Коментар"}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.price}>
              {eng ? "The cost of the service" : "Вартість послуги"} {price}{" "}
              {eng ? "uah" : "грн"}.
            </div>
            <div className={styles.formControl + " " + styles.payWrapper}>
              <button className="button" onClick={sendMessage}>
                {eng ? "Order a service" : "Замовити послугу"}
              </button>
              <a
                target="blank"
                className={styles.pay}
                href="https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJhbW91bnQiOiIwLjAwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCe0L/Qu9Cw0YLQsCDQt9CwINC60L7QvdGB0LDQu9GC0LjQvdCz0L7QstGWINC/0L7RgdC70YPQs9C4IiwicHVibGljX2tleSI6ImkzMjI4MDc2MDI2MCIsImxhbmd1YWdlIjoidWsifQ==&signature=o21g3qGWxer/DBHiNoHHOptQkiI="
              >
                {eng ? "Pay" : "Оплатити"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
