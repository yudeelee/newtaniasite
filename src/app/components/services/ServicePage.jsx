import styles from './styles.module.scss';
import { data } from '../../../../data/data';
import { Fragment } from 'react';

const ServicePage = () => {
  return (
    <div className={styles.service}>
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
                віддаленому - хмарному сервері; <br />- Ваші дані зберігаються в
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
                бізнес. Ми працюємо згідно наступних умов: вартість формування
                та подання заявки на отримання гранту 2500 грн плюс 2% від
                отриманих коштів. Оплата 2500 грн відбувається на початку
                формування та подання заявки, а оплата 2 % від отриманих коштів
                відбувається в момент отримання підтвердження, що Ваш бізнес
                отримає фінансування.
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
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
