import styles from './styles.module.scss';
import { data } from '../../../../data/data';
import { Fragment } from 'react';
import Link from 'next/link';

const ServicePage = () => {
  return (
    <div className={styles.service}>
      <Link href='/contact' className={styles.litteButton}>
        Замовити
      </Link>
      <div className='container'>
        <div className={styles.header}>
          <div className='title'>Наші послуги</div>
        </div>
        <div className={styles.section} id='consaltId'>
          <div className={styles.sectionHeader}>Консультації</div>
          <div className={styles.sectionBody}>
            <div className={styles.sectionText}>
              <div className='text'>
                Консультація - це онлайн роз'яснення певних моментів і
                відбувається, як правило, у форматі питання - відповідь.
                Консультації проводить експерт у сфері бухгалтерських послуг,
                фінансуванню та інвестуванню Селезньова Тетяна.
              </div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[0] &&
                    data[0].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.section} id='fopId'>
          <div className={styles.sectionHeader}>ФОП</div>
          <div className={styles.sectionBodyReverse}>
            <div className={styles.sectionText}>
              <div className='text'>
                Бухгалтерські послуги ФОП включають в себе:
                <br /> - сплату податків та платежів по рахунку ФОП;
                <br />- подання звітності у контролюючі органи;
                <br />- формування первинних документів та договорів; <br />-
                консультування з питань бухгалтерського обліку та оподаткування;
                <br />- гарантію захисту від штрафів.
              </div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[1] &&
                    data[1].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.section} id='tovId'>
          <div className={styles.sectionHeader}>ТОВ</div>
          <div className={styles.sectionBody}>
            <div className={styles.sectionText}>
              <div className='text'>
                Бухгалтерські послуги ТОВ включають:
                <br /> - віддалений доступ до облікових програм на нашому
                віддаленому - хмарному сервері; <br />- ваші дані зберігаються в
                надійності із бекапом раз на 24 години;
                <br />- формування облікової політики підприємства, формування
                наказу;
                <br />- ведення обліку у програмі замовника;
                <br />- введення первинних документів, формування реалізацій,
                податкових - накладних та ін.;
                <br />- подання звітності у контролюючі органи;
                <br />- проведення оплат в банкінгу;
                <br />- ведення кадрового обліку працівників;
                <br />- надаємо гарантію захисту від штрафів.
              </div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[2] &&
                    data[2].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from && 'від'}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.section} id='financeId'>
          <div className={styles.sectionHeader}>Фінанси</div>
          <div className={styles.sectionBodyReverse}>
            <div className={styles.sectionText}>
              <div className='text'>
                Фінансовий облік показує реальну прибутковість бізнесу і
                допомагає приймати управлінські рішення:
                <br /> - куди можна додатково вкласти гроші;
                <br /> - чи варто відкривати новий напрямок;
                <br /> - чи варто займатись цим бізнесом;
                <br /> - рентабельність бізнесу. Компанія
                “БУХГАЛТЕР-КОНСУЛЬТАНТ” має досвід налаштування обліку у великих
                компаніях з оборотом від 100 000 $/міс, а також можемо допомогти
                підприємцям початківцям у досягнені своїх мрій.
              </div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[3] &&
                    data[3].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from && 'від'}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.section} id='grantId'>
          <div className={styles.sectionHeader}>Отримання грантів</div>
          <div className={styles.sectionBody}>
            <div className={styles.sectionText}>
              <div className='text'>
                Отримання гранту - це найкращий спосіб залучення коштів у
                бізнес. <br />
                Послуги грантового супроводу включають:
                <br />- перевірку брифу, який ми надсилаємо на початку співпраці
                <br />- проробку розрахункової частини “Бізнес-Плану”
                <br />- перевірку та коректування описової частини
                <br />- допомогу з обранням та правильним визначенням, що саме
                можна купити на кошти гранту та правильне оформлення таблиці
                <br />- доопрацювання “Бізнес-Плану” у разі зауважень від фонду
                зайнятості
                <br />- повторне подання в разі відмови.
                <br />
              </div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[4] &&
                    data[4].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from && 'від'}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.section} id='yurId'>
          <div className={styles.sectionHeader}>Юридичні послуги</div>
          <div className={styles.sectionBodyReverse}>
            <div className={styles.sectionText}>
              <div className='text'>
                Юридичні послуги вкрай важливі для зменшення ризиків Вашого
                бізнесу та проопрацювання всіх можливих сценаріїв розвитку подій
                з партнерами, клієнтами та працівниками. Юридичний супровід для
                ТОВ та ФОП включає:
                <br /> - розробка/аналіз договорів, в тому числі міжнародних
                контрактів;
                <br /> - реєстрація ФОП/ТОВ;
                <br />- необмежені юридичні консультації;
                <br />- податкові питання (оскарження ППР, заяви);
                <br />- претензійна діяльність (стягнення боргів, зобов’язання
                виконати обов’язки за договорами);
                <br />- судові спори (додатково оплачується час адвоката в
                судовому засіданні);
                <br />- інші послуги за погодженням, які потрібні саме Вашому
                підприємству.
              </div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[5] &&
                    data[5].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from && 'від'}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.section} id='kikId'>
          <div className={styles.sectionHeader}>КІК</div>
          <div className={styles.sectionBody}>
            <div className={styles.sectionText}>
              <div className='text'>
                Що таке КІК? КІК – Контрольована Іноземна Компанія.
                <br /> Вперше в Україні у 2024 році ВСІ власники іноземних
                компаній мають відзвітуватись і подати в податкову України звіт
                про КІК за 2022 та 2023 роки!
                <br /> Що потрібно для подання звіту про КІК?
                <br /> 1. фінансова звітність вашої іноземної компанії на
                англійській мові (в такому випадку перекладати її на українську
                не потрібно) або перекладену на українську мову звітність
                іноземної компанії; <br />
                2. розмір частки у вашій КІК. Приклад: якщо Ви єдиний власник то
                у вас 100% у статутному капіталі такої КІК; <br />
                3. кількість найманих працівників. Чи потрібно платити податок
                після подання цього звіту в Україну?
                <br /> Якщо сукупний дохід по всіх Ваших КІК до 2 млн. євро, то
                ми лише інформуємо українську податкову про те що у Вас є КІК та
                додаємо звітність Вашої КІК, але жодні податки в Україні не
                сплачуємо.
                <br /> Яка вартість подання звіту?
                <br /> Вартість розраховуємо індивідуально в залежності від
                того:
                <br /> - скільки у вас КІК;
                <br /> - за скільки періодів (років) потрібно подати звітність;
                <br /> - чи у Вас КІК до 2 млн євро чи більше (чи потрібно буде
                рахувати скоригований прибуток Вашої КІК та платити податки в
                Україні). <br />
                Що входить в пакет подання звітності по КІК?
                <br /> - консультування щодо документів, які потрібні для
                подання;
                <br /> - подання звіту про КІК для фізичних осіб;
                <br /> - подання декларації про майновий стан та доходи (якщо
                декларація з нульовими показниками то подання входить у
                вартість, якщо декларація про майновий стан та доходи з
                показниками то декларування оплачується додатково).
                <br /> Чи передбачені штрафи за неподання звітності про КІК?
                <br /> ТАК. І ВОНИ СУТТЄВІ!
                <br /> - Штраф за неподання звітності про КІК: 268 4000 грн;
                <br /> - Штраф за несвоєчасне подання звіту про КІК: 134 200
                грн;
                <br /> - Штраф за несвоєчасне подання повідомлення про набуття
                частки КІК: 805 200 грн;
                <br /> - Штраф за невідображення у звіті про КІК відомостей щодо
                наявних КІК: 2 684 000 грн;
              </div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[6] &&
                    data[6].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from && 'від'}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.section} id='progId'>
          <div className={styles.sectionHeader}>
            Програмування BAS / хмарний сервер
          </div>
          <div className={styles.sectionBodyReverse}>
            <div className={styles.sectionText}>
              <div className='text'>Програмування BAS / хмарний сервер</div>
            </div>
            <div className={styles.sectionList}>
              <table border='0'>
                <tbody>
                  {data[7] &&
                    data[7].items.map((item, idx) => (
                      <tr key={idx} className={styles.row}>
                        <td className={styles.text}>{item.name}</td>
                        <td className={styles.from}>{item.from && 'від'}</td>
                        <td className={styles.price}>{item.price}</td>
                        <td className={styles.nom}>{item.nom}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
