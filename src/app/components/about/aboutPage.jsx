'use client';

import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AboutPage = () => {
  const [workers, setWorkers] = useState([]);
  let par = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/aboutpage');
        setWorkers(res.data.workers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.about}>
      <div className='container'>
        <div className={styles.header}>
          <div className='title'>Про нас</div>
        </div>
        {workers.map((wor, idx) => {
          const cls = par % 2 == 0 ? styles.person : styles.personReverse;
          console.log(wor.unvisible);
          if (!wor.unvisible) {
            par = par + 1;
            return (
              <div className={cls} key={idx}>
                <div className={styles.personText}>
                  <div className='redText'>{wor.position}</div>
                  <div className='title'>{wor.name}</div>
                  <div
                    className={'text' + ' ' + 'mt20'}
                    dangerouslySetInnerHTML={{ __html: wor.text }}
                  />
                </div>
                <div className={styles.photo}>
                  <img src={wor.photo} alt='' />
                </div>
              </div>
            );
          }
        })}
        {/* <div className={styles.person}>
          <div className={styles.personText}>
            <div className='redText'>експерт</div>
            <div className='title'>Селезньова Тетяна Олексіївна</div>
            <div className='text mt20'>
              Засновниця бренду та торгівельної марки консалтингових послуг
              "БУХГАЛТЕР-КОНСУЛЬТАНТ".
              <br /> 8+ років у сфері бухгалтерського обліку, фінансів та
              інвестицій. <br />
              Освіта: закінчила Технологічний коледж НУ "Львівська політехніка"
              за СПЕЦІАЛЬНІСТЮ "ЕКОНОМІКА ПІДПРИЄМСТВА" та ЗДОБУЛА ДИПЛОМ
              МОЛОДШОГО СПЕЦІАЛІСТА З ВІДЗНАКОЮ. <br />
              Закінчила НУ «Львівська Політехніка» за СПЕЦІАЛЬНІСТЮ "ЕКОНОМІКА
              ПІДПРИЄМСТВА". <br />
              Веду YouTube канал: “БУХГАЛТЕР-КОНСУЛЬТАНТ”.
              <br /> Інвестую на фондовому ринку.
              <br />
              Спікер власного курсу по інвестуванню на фондовому ринку: “PROOF
              INVESTOR” та курсу по веденню обліку ФОП з нуля
              “ФОП-ОБЛІК-ПОДАТКИ”. <br />
              Пройшла навчання від “Superludi: PRODIGY FINANCE” та навчання по
              технічному та фундаментальному аналізу від “Freedom Finance”.
              <br /> Наступним кроком планую сертифікуватись на аудитора і
              надавати якісні аудиторські послуги українському бізнесу.
            </div>
          </div>
          <div className={styles.photo}>
            <img src='/img/photo8.png' alt='' />
          </div>
        </div>
        <div className={styles.personReverse}>
          <div className={styles.personText}>
            <div className='redText'>Бухгалтер</div>
            <div className='title'>Анастасія</div>
            <div className='text mt20'>
              10+ років у сфері бухгалтерського обліку, фінансів. <br />
              Освіта: закінчила НУ «Львівська політехніка» за спеціальністю
              "Комп'ютерні та інформаційні технології". <br />
              Відповідально та наполегливо створить лад у Вашій бухгалтерії.{' '}
              <br />
              Обов’язки: бухгалтерський облік юридичних осіб на загальній
              системі оподаткування та ФОП на спрощеній система оподаткування +
              наймані працівники, облік доходів, облік ТМЦ, облік податкових
              зобов'язань і податкового кредиту.
            </div>
          </div>
          <div className={styles.photo}>
            <img src='/img/photo9.png' alt='' />
          </div>
        </div>
        <div className={styles.person}>
          <div className={styles.personText}>
            <div className='redText'>Бухгалтер</div>
            <div className='title'>Тетяна</div>
            <div className='text mt20'>
              5+ років у сфері бухгалтерського обліку.
              <br /> Освіта: закінчила НУ «Львівська політехніка» за
              спеціальністю «Облік і оподаткування» та здобула диплом магістра.{' '}
              <br />
              Швидко реагує та приймає правильні рішення, які допоможуть щоб
              облік був на найвищому рівні.
              <br />
              Обов’язки: Ведення ФОП 1-3 груп з ПРРО + наймані працівники.
            </div>
          </div>
          <div className={styles.photo}>
            <img src='/img/photo10.png' alt='' />
          </div>
        </div>
        <div className={styles.personReverse}>
          <div className={styles.personText}>
            <div className='redText'>Бухгалтер</div>
            <div className='title'>Андріана</div>
            <div className='text mt20'>
              2+ роки у сфері бухгалтерського обліку. <br />
              Освіта: пройшла навчання від “Superludi: PRODIGY FINANCE” та курс
              по веденню обліку ФОП з нуля “ФОП-ОБЛІК-ПОДАТКИ”. <br />
              Зробить аналіз фінансів і налаштує фінансову звітність. <br />
              Обов’язки: грантовий менеджмент, фінансовий супровід бізнесу,
              побудова звітності P&L / Cash Flow / Balance, ведення обліку ФОП
              на спрощеній системі оподаткування + наймані працівники.
            </div>
          </div>
          <div className={styles.photo}>
            <img src='/img/photo11.png' alt='' />
          </div>
        </div>
        <div className={styles.person}>
          <div className={styles.personText}>
            <div className='redText'>Бухгалтер</div>
            <div className='title'>Любов</div>
            <div className='text mt20'>
              12+ років у сфері бухгалтерського обліку. <br />
              Освіта: закінчила ЛДІНТУ ім. В. Чорновола за спеціальністю
              "Менеджмент організацій" та здобула диплом спеціаліста. <br />
              Досвідчений користувач бухгалтерськими програмами та обліковими
              регістрами. <br />
              Обов’язки: бухгалтерський облік юридичних осіб, імпорт, експорт,
              ПДВ, облік ТМЦ, кадри, зарплата.
            </div>
          </div>
          <div className={styles.photo}>
            <img src='/img/photo12.png' alt='' />
          </div>
        </div>
        <div className={styles.personReverse}>
          <div className={styles.personText}>
            <div className='redText'>Бухгалтер</div>
            <div className='title'>Юля</div>
            <div className='text mt20'>
              6+ років в сфері бухгалтерського обліку.
              <br /> Освіта: закінчила ПДАУ за спеціальністю “Управління та
              адміністрування”.
              <br /> Народилася в день бухгалтера). <br />
              Обов’язки: бухгалтерський облік юридичних осіб, неприбуткових
              організацій, ведення ФОП 1-3 груп з ПРРО.
            </div>
          </div>
          <div className={styles.photo}>
            <img src='/img/photo13.png' alt='' />
          </div>
        </div>
        <div className={styles.person}>
          <div className={styles.personText}>
            <div className='redText'>приватний юрист</div>
            <div className='title'>Ігор</div>
            <div className='text mt20'>
              5+ років досвіду. <br />
              Освіта: закінчив Національний юридичний університет імені Ярослава
              Мудрого та здобув диплом магістра.
              <br />
              Партнер компанії “БУХГАЛТЕР-КОНСУЛЬТАНТ”. <br />
              Допомагає підприємцям юридично правильно будувати бізнес та має
              позитивний досвід в розблокуванні податкових накладних та в
              прийнятті таблиць даних платників податків. <br />
              Супроводжує бізнес з усіх куточків України.
            </div>
          </div>
          <div className={styles.photo}>
            <img src='/img/photo14.png' alt='' />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
