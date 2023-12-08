'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import YouTube from 'react-youtube';
import Link from 'next/link';
import Carusel from '../rekl/carusel';
import Footer from '../footer/Footer';

const HomePage = () => {
  const [actual, setActual] = useState(0);
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
      <div className='container'>
        {/* <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>БУХГАЛТЕР-КОНСУЛЬТАНТ</h1>
            <h3 className={styles.heroSubTitle}>
              З нами<span> працюють </span>найкращі
            </h3>
            <p className={styles.heroText}>
              широкий спектр фінансових та бухгалтерських послуг для бізнесу
            </p>
            <button className={styles.button}>Замовити послугу</button>
          </div>
          <div className={styles.heroImg}>
            <img src='/img/headerPhoto.png' alt='' />
          </div>
        </div> */}
        <div className={styles.youtube}>
          <div className={styles.rolik}>
            <YouTube
              videoId={'SPqIBw0I_iM'}
              onReady={onReady}
              onError={onError}
            />
          </div>
          <div className={styles.yuText}>
            <div className='redText'>про компанію</div>
            <div className='title'>Наші сильні сторони</div>
            <div className={'text' + ' ' + 'mt20'}>
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
            </div>
          </div>
        </div>
        <div className={styles.poroposition + ' ' + 'mt100'}>
          <div className={styles.propText}>
            <div className='redText'>що ми пропонуємо</div>
            <div className='title mb20'>Переваги співпраці з нами</div>
            <ul>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Вам не потрібно витрачати гроші на офіс та засоби праці
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Приїжджаємо, за необхідності, та впорядковуємо документи на
                  місці
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Користуємось своїм програмним забезпеченням
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Підкажемо як оптимізувати облік та зменшити податки
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Сформуємо договір чи міжнародний контракт
                </span>
              </li>
              <li>
                <img src='/img/galochka.svg' alt='' />
                <span className='text'>
                  Ми - команда експертів і нас цікавить позитивний результат!
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.slider}>
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
              <img src='/img/photo7.png' alt='' />
            </div>
          </div>
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
            <div className={styles.fishHeader}>10 000 000+ грн</div>
            <div className={styles.fishBody}>залученого фінансування</div>
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className='container'>
          <div className='title mt100 center'>Наші послуги</div>
          <div className={styles.serviceWrapper}>
            <div className={styles.service}>
              <div className={styles.serHeader}>Консультації</div>
              <div className={styles.serBody}>
                Бухгалтерський облік ФОП, ТОВ, фінанси бізнесу, гранти,
                інвестиції...
              </div>
              <div className={styles.serLink}>
                <Link href='#'>Читати більше &#8594;</Link>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.serHeader}>ФОП</div>
              <div className={styles.serBody}>
                Реєстрація, супровід ФОП, наймані працівники, закриття ФОП...
              </div>
              <div className={styles.serLink}>
                <Link href='#'>Читати більше &#8594;</Link>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.serHeader}>Гранти</div>
              <div className={styles.serBody}>
                Формування бізнес-плану для подання на грант, грантовий
                супровід...
              </div>
              <div className={styles.serLink}>
                <Link href='#'>Читати більше &#8594;</Link>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.serHeader}>Юридичні послуги</div>
              <div className={styles.serBody}>
                Юридичний супровід бізнесу, формування договорів...
              </div>
              <div className={styles.serLink}>
                <Link href='#'>Читати більше &#8594;</Link>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.serHeader}>ТОВ</div>
              <div className={styles.serBody}>
                Бухгалтерський супровід бізнесу в облікових програмах...
              </div>
              <div className={styles.serLink}>
                <Link href='#'>Читати більше &#8594;</Link>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.serHeader}>Фінанси</div>
              <div className={styles.serBody}>
                Побудова фінансової системи, облік фінансів, звіти P&L, Cash
                Flow, Balance...
              </div>
              <div className={styles.serLink}>
                <Link href='#'>Читати більше &#8594;</Link>
              </div>
            </div>
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
            <div className='title'>замовити консультацію</div>
            <div className={styles.messegeWrapper}>
              <div className={styles.mesLeft}>
                <div className='text mt20'>
                  Тут Ви можете залишити запит на консультацію. Ми зателефонуємо
                  Вам та проінформуємо про вартість і час проведення зустрічі. У
                  разі, якщо Ваше запитання можна вирішити в режимі переписки,
                  ми надамо Вам зворотній зв'язок найближчим часом.
                </div>
              </div>
              <div className={styles.sendMessage}>
                <div className='formGroup'>
                  <input type='text' placeholder="І'мя" />
                </div>
                <div className='formGroup'>
                  <input type='text' placeholder='Телефон' />
                </div>
                <div className='formGroup'>
                  <button className={styles.button}>Замовити послугу</button>
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
