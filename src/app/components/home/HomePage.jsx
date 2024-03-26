'use client';

// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import styles from './styles.module.scss';
import YouTube from 'react-youtube';
import Link from 'next/link';
import Carusel from '../rekl/carusel';
import Footer from '../footer/Footer';
import { redirect } from 'next/navigation';
import axios from 'axios';

const HomePage = () => {
  SwiperCore.use([Autoplay]);

  const TOKEN = '5530765545:AAFy5U47-r8OYc198-5blcgCR-cKB3_jowE';
  const CHAT_ID = '-1001517912943';
  const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [actual, setActual] = useState(0);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState('');
  const [data, setData] = useState({});

  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/mainpage');
        setData(res.data);
        // console.log(res.data.propositionItems);
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
  //       console.log(res.data.workers);
  //       // console.log(res.data.propositionItems);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const sendMsg = () => {
    if (name === '') {
      setErrorMsg("Введіть будь-ласка своє Ім'я");
      return;
    }
    if (phone === '') {
      setErrorMsg('Введіть будь-ласка свій номер телефону');
      return;
    }
    const msg = `Запит на консультацію\n${name}\n${phone}`;

    axios
      .post(URI, {
        chat_id: CHAT_ID,
        text: msg,
        parse_mode: 'html',
      })
      .then((res) => {
        setSuccess('Вашу заявку прийнято');
        setName('');
        setPhone('');
        console.log('good');
      })
      .catch((err) => {
        console.log('bad');
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActual((actual) => actual + 1);
      console.log(actual);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const onReady = (event) => {
    const player = event.target;
    player.stopVideo();
  };
  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };
  return (
    <div className={styles.home}>
      {errorMsg && (
        <div className={styles.alertWrapper} onClick={() => setErrorMsg('')}>
          <div className={styles.alert}>
            <p>{errorMsg}</p>
            <button onClick={() => setErrorMsg('')}>Гаразд</button>
          </div>
        </div>
      )}
      {success && (
        <div className={styles.alertWrapper} onClick={() => setSuccess('')}>
          <div className={styles.success}>
            <p>{success}</p>
            <button onClick={() => setSuccess('')}>Гаразд</button>
          </div>
        </div>
      )}
      <div className='container'>
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
            <p className='text'>{data.slog}</p>
            <Link href='/services' className={styles.button}>
              Замовити послугу
            </Link>
          </div>
          <div className={styles.heroImg}>
            <img src='/img/headerPhoto.webp' alt='' />
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
            <div className='redText'>про компанію</div>
            <div className='title'>Наші сильні сторони</div>
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
              className={'text' + ' ' + 'mt20'}
              dangerouslySetInnerHTML={{ __html: data.aboutText }}
            />
          </div>
        </div>
        <div className={styles.poroposition + ' ' + 'mt100'}>
          <div className={styles.propText}>
            <div className='redText'>що ми пропонуємо</div>
            <div className='title mb20'>Переваги співпраці з нами</div>
            <ul>
              {data.propositionItems &&
                data.propositionItems.map((prop, idx) => {
                  return (
                    <li key={idx}>
                      <img src='/img/galochka.svg' alt='' />
                      <span className='text'>{prop}</span>
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
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay]}
            >
              {/* {about.map((ab, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <img src={ab.photo} alt='' />
                  </SwiperSlide>
                );
              })} */}
              <SwiperSlide>
                <img src='/img/photo8.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo9.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo10.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo11.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo12.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo13.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/img/photo14.png' alt='' />
              </SwiperSlide>
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
      <div className={styles.fishki + ' ' + 'mt100'}>
        <div className={'container' + ' ' + styles.fishWrapper}>
          <div className={styles.fishka}>
            <div className={styles.fishHeader}>3+</div>
            <div className={styles.fishBody}>років на ринку</div>
          </div>
          <div className={styles.fishka}>
            <div className={styles.fishHeader}>100+</div>
            <div className={styles.fishBody}>клієнтів на супроводі</div>
          </div>
          <div className={styles.fishka}>
            <div className={styles.fishHeader}>25 000 000+ грн</div>
            <div className={styles.fishBody}>залученого фінансування</div>
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className='container'>
          <div className='title mt100 center'>Наші послуги</div>
          <div className={styles.serviceWrapper}>
            <Link href='/services#consaltId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>Консультації</div>
                <div className={styles.serBody}>
                  Бухгалтерський облік ФОП, ТОВ, фінанси бізнесу, гранти,
                  інвестиції...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            <Link href='/services#fopId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>ФОП</div>
                <div className={styles.serBody}>
                  Реєстрація, супровід ФОП, наймані працівники, закриття ФОП...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            <Link href='/services#tovId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>ТОВ</div>
                <div className={styles.serBody}>
                  Бухгалтерський супровід бізнесу в облікових програмах...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            <Link href='/services#financeId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>Фінанси</div>
                <div className={styles.serBody}>
                  Побудова фінансової системи, облік фінансів, звіти P&L, Cash
                  Flow, Balance...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            <Link href='/services#grantId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>Гранти</div>
                <div className={styles.serBody}>
                  Формування бізнес-плану для подання на грант, грантовий
                  супровід...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            <Link href='/services#kikId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>КІК</div>
                <div className={styles.serBody}>
                  Що таке КІК? <br />
                  КІК – Контрольована Іноземна Компанія...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            {/* <Link href='/services#yurId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>Курси</div>
                <div className={styles.serBody}>
                  Юридичний супровід бізнесу, формування договорів...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link> */}
            <Link href='/services#progId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>Програмування BAS</div>
                <div className={styles.serBody}>
                  Програмування BAS Бухгалтерії на хмарному сервері...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            <Link href='/services#diaId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>Дія.City</div>
                <div className={styles.serBody}>
                  Резиденти Дія.City що потрібно знати
                  <br /> для початку роботи...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
            <Link href='/services#yurId'>
              <div className={styles.service}>
                <div className={styles.serHeader}>Юридичні послуги</div>
                <div className={styles.serBody}>
                  Юридичний супровід бізнесу, формування договорів...
                </div>
                <div className={styles.serLink}>Читати більше &#8594;</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.carusel + ' ' + 'mt100'}>
        <div className='container'>
          <Carusel />
        </div>
      </div>
      <div className={styles.message}>
        <div className='container'>
          <div className={styles.mesText}>
            <div className='redText'>швидка дія</div>
            <div className='title'>Замовити консультацію</div>
            <div className={styles.messegeWrapper}>
              <div className={styles.mesLeft}>
                <div className='text mt20'>
                  Тут Ви можете залишити запит на консультацію. Ми зателефонуємо
                  Вам та проінформуємо про вартість і час проведення зустрічі. У
                  разі, якщо Ваше запитання можна вирішити в режимі переписки,
                  ми надамо Вам зворотній зв'язок найближчим часом .
                </div>
              </div>
              <div className={styles.sendMessage + ' mt20'}>
                <div className='formGroup'>
                  <input
                    type='text'
                    placeholder="І'мя"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className='formGroup'>
                  <input
                    type='text'
                    placeholder='Телефон'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className='formGroup'>
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

export default HomePage;
