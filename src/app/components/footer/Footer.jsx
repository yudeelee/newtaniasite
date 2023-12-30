import Link from 'next/link';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className={styles.footerWrapper}>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Меню</div>
              </li>
              <li>
                <Link href='/'>Головна</Link>
              </li>
              <li>
                <Link href='/about'>Про нас</Link>
              </li>
              <li>
                <Link href='/services'>Наші послуги</Link>
              </li>
              <li>
                <Link href='/contact'>Замовити</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Наші послуги</div>
              </li>
              <li>
                <Link href='/services#consaltId'>Консультації</Link>
              </li>
              <li>
                <Link href='/services#fopId'>ФОП</Link>
              </li>
              <li>
                <Link href='/services#tovId'>ТОВ</Link>
              </li>
              <li>
                <Link href='/services#grantId'>Гранти</Link>
              </li>
              <li>
                <Link href='/services#yurId'>Юридичні послуги</Link>
              </li>
              <li>
                <Link href='/services#financeId'>Фінанси</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Долучайтесь</div>
              </li>
              <li>
                <a href='https://www.instagram.com/tanyaselezniova_accountant/'>
                  <img src='/img/insta.png' alt='' />
                </a>
                <a href='https://t.me/tanyaselezniova_accountant'>
                  <img src='/img/teleg.png' alt='' />
                </a>
                <a href='https://www.youtube.com/@consulting-accountant'>
                  <img src='/img/youtu.png' alt='' />
                </a>
              </li>
              <li>+380734187147</li>
              <li>consulting.lviv.ua@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
