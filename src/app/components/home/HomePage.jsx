"use client";

// import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import styles from "./styles.module.scss";
import YouTube from "react-youtube";
import Link from "next/link";
import Carusel from "../rekl/carusel";
import Footer from "../footer/Footer";
import { redirect } from "next/navigation";
import axios from "axios";

const HomePage = ({ photos }) => {
  SwiperCore.use([Autoplay]);

  const TOKEN = "5530765545:AAFy5U47-r8OYc198-5blcgCR-cKB3_jowE";
  const CHAT_ID = "-1001517912943";
  const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [actual, setActual] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState({});

  const [about, setAbout] = useState([]);
  const [serv, setServ] = useState([]);
  const [buhserv, setBuhserv] = useState([]);
  const [yurserv, setYurserv] = useState([]);
  const [blockserv, setBlockserv] = useState([]);
  const [finserv, setFinserv] = useState([]);
  const [finservBlock, setFinservBlock] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(gtag);
        const res = await axios.get("/api/mainpage");
        const res1 = await axios.get("/api/servicepage");
        setData(res.data);
        setServ(res1.data);
        const newBuh = res1.data.services.filter((s) => s.category == "buh");
        setBuhserv(newBuh);
        const newYur = res1.data.services.filter((s) => s.category == "yur");
        setYurserv(newYur);
        const newBlock = res1.data.services.filter(
          (s) => s.category == "block"
        );
        setBlockserv(newBlock);
        const newFin = res1.data.services.filter((s) => s.category == "fin");
        setFinserv(newFin);
        const newFinBlock = res1.data.services.filter(
          (s) => s.category == "finblock"
        );
        setFinservBlock(newFinBlock);
        // console.log(newFin);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('/api/aboutpage');
  //       setAbout(res.data.workers);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const sendMsg = async () => {
    if (name === "") {
      setErrorMsg("Введіть будь-ласка своє Ім'я");
      return;
    }
    if (phone === "") {
      setErrorMsg("Введіть будь-ласка свій номер телефону");
      return;
    }
    const msg1 = `Запит на консультацію\n${name}\n${phone}`;

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

    if (name === "") {
      setErrorMsg("Введіть будь-ласка своє Ім'я");
      return;
    }
    if (phone === "") {
      setErrorMsg("Введіть будь-ласка свій номер телефону");
      return;
    }
    const msg = `Запит на консультацію\n${name}\n${phone}`;

    const data = {
      name,
      phone,
      mail: "korotka@zsaytu.com",
      category: "Коротка",
      item: "Коротка",
      comment: "0",
      price: 0,
    };

    const sadsasd = gtag_report_conversion("/");
    console.log(sadsasd);
    axios
      .post(URI, {
        chat_id: CHAT_ID,
        text: msg,
        parse_mode: "html",
        name,
        phone,
      })
      .then((res) => {
        setSuccess("Вашу заявку прийнято");
        setName("");
        setPhone("");
      })
      .catch((err) => {
        console.log("bad");
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActual((actual) => actual + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const onReady = (event) => {
    const player = event.target;
    player.stopVideo();
  };
  const onError = (error) => {
    console.error("YouTube Player Error:", error);
  };
  return (
    <div className={styles.home}>
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
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>{data.title}</h1>
            <h3 className={styles.heroSubTitle}>
              {data.subTitle}
              <span> {data.subTitle2} </span>
              {data.subTitle3}
            </h3>
            {/* <p className={styles.heroText}>
              широкий спектр фінансових та бухгалтерських послуг для бізнесу
            </p> */}
            <p className="text">{data.slog}!</p>
            <Link href="/services" className={styles.button}>
              Замовити послугу
            </Link>
          </div>
          <div className={styles.heroImg}>
            <img src="/img/headerPhoto.webp" alt="" />
          </div>
        </div>
        <div className={styles.youtube}>
          <div className={styles.rolik}>
            <YouTube
              videoId={data.youtubeId}
              onReady={onReady}
              onError={onError}
            />
          </div>
          <div className={styles.yuText}>
            <div className="redText">про компанію</div>
            <div className="title">Наші сильні сторони</div>
            {/* <div className={'text' + ' ' + 'mt20'}>
              Компанія “Бухгалтер-консультант” працює в сферах фінансових та
              бухгалтерських послуг з 2020 року та надає повний спектр послуг
              супроводу бізнесу більше 100 підприємцям і підприємствам по всій
              території України. Працюємо з найкращими та ведемо облік згідно
              положень та стандартів бухгалтерського обліку України на найвищому
              рівні. Бухгалтерський супровід бізнесу включає різні форми та
              системи оподаткування. А також навчаємо мистецтву управління
              фінансами, інвестуванню на фондовому ринку та допомагаємо отримати
              гранти від держави для бізнесу. Працюємо у команді професіоналів
              на основі стандартів для швидкого та ідеального вирішення
              будь-якої проблеми.
            </div> */}
            <div
              className={"text" + " " + "mt20"}
              dangerouslySetInnerHTML={{ __html: data.aboutText }}
            />
          </div>
        </div>
        <div className={styles.poroposition + " " + "mt100"}>
          <div className={styles.propText}>
            <div className="redText">що ми пропонуємо</div>
            <div className="title mb20">Переваги співпраці з нами</div>
            <ul>
              {data.propositionItems &&
                data.propositionItems.map((prop, idx) => {
                  return (
                    <li key={idx}>
                      <img src="/img/galochka.svg" alt="" />
                      <span className="text">{prop}</span>
                    </li>
                  );
                })}
              {/* <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Вам не потрібно витрачати гроші на офіс та засоби праці.
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Приїжджаємо, за необхідності, та впорядковуємо документи на
                  місці.
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Користуємось своїм програмним забезпеченням.
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Підкажемо як оптимізувати облік та зменшити податки.
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Сформуємо договір чи міжнародний контракт.
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Ми - команда експертів і нас цікавить позитивний результат!
                </span>
              </li> */}
            </ul>
          </div>
          <div className={styles.slider}>
            <Swiper
              speed={1500}
              loop={true}
              autoplay
              spaceBetween={20}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay]}
            >
              {photos.workers.map((ab, idx) => {
                // console.log("qqq");
                if (!ab.unvisible) {
                  return (
                    <SwiperSlide key={idx}>
                      <img src={ab.photo} alt="" />
                    </SwiperSlide>
                  );
                }
              })}
              {/* <SwiperSlide>
                <img src='/img/photo8.png' alt='' />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <img src='/img/photo9.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo10.png' alt='' />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <img src='/img/photo11.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo12.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo13.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo15.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo14.png' alt='' />
              </SwiperSlide> */}
            </Swiper>
          </div>
          {/* <div className={styles.slider}>
            <div
              className={`${styles.slide} ${
                actual % 7 == 0 ? styles.actual : ''
              }`}
            >
              <div className={styles.back}></div>
              <img src='/img/photo1.png' alt='' />
            </div>
            <div
              className={`${styles.slide} ${
                actual % 7 == 1 ? styles.actual : ''
              }`}
            >
              <div className={styles.backBlack}></div>
              <img src='/img/photo2.png' alt='' />
            </div>
            <div
              className={`${styles.slide} ${
                actual % 7 == 2 ? styles.actual : ''
              }`}
            >
              <div className={styles.back}></div>
              <img src='/img/photo3.png' alt='' />
            </div>
            <div
              className={`${styles.slide} ${
                actual % 7 == 3 ? styles.actual : ''
              }`}
            >
              <div className={styles.backBlack}></div>
              <img src='/img/photo4.png' alt='' />
            </div>
            <div
              className={`${styles.slide} ${
                actual % 7 == 4 ? styles.actual : ''
              }`}
            >
              <div className={styles.back}></div>
              <img src='/img/photo5.png' alt='' />
            </div>
            <div
              className={`${styles.slide} ${
                actual % 7 == 5 ? styles.actual : ''
              }`}
            >
              <div className={styles.backBlack}></div>
              <img src='/img/photo6.png' alt='' />
            </div>
            <div
              className={`${styles.slide} ${
                actual % 7 == 6 ? styles.actual : ''
              }`}
            >
              <div className={styles.back}></div>
              <img src='/img/photo7.jpg' alt='' />
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.fishki + " " + "mt100"}>
        <div className={"container" + " " + styles.fishWrapper}>
          <div className={styles.fishka}>
            <div className={styles.fishHeader}>4+</div>
            <div className={styles.fishBody}>років на ринку</div>
          </div>
          <div className={styles.fishka}>
            <div className={styles.fishHeader}>300+</div>
            <div className={styles.fishBody}>клієнтів на супроводі</div>
          </div>
          <div className={styles.fishka}>
            <div className={styles.fishHeader}>50 000 000+ грн</div>
            <div className={styles.fishBody}>залученого фінансування</div>
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Бухгалтерські послуги</div>
          <div className={styles.serviceWrapper}>
            {buhserv?.map((buh, idx) => (
              <Link key={idx} href={`/services#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Юридичні послуги</div>
          <div className={styles.serviceWrapper}>
            {yurserv?.map((buh, idx) => (
              <Link key={idx} href={`/legalservices#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Пакети Юридичних послуг</div>
          <div className={styles.serviceWrapper}>
            {blockserv?.map((buh, idx) => (
              <Link key={idx} href={`/servicepackeges#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Фінансові послуги</div>
          <div className={styles.serviceWrapper}>
            {finserv?.map((buh, idx) => (
              <Link key={idx} href={`/financeservices#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Пакети Фінансових послуг</div>
          <div className={styles.serviceWrapper}>
            {finservBlock?.map((buh, idx) => (
              <Link key={idx} href={`/financepackeges#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.carusel + " " + "mt100"}>
        <div className="container">
          <Carusel />
        </div>
      </div>
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
                  <button className={styles.button} onClick={sendMsg}>
                    Замовити послугу
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {}

export default HomePage;
