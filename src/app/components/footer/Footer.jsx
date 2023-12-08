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
                <Link href='#'>Головна</Link>
              </li>
              <li>
                <Link href='#'>Про нас</Link>
              </li>
              <li>
                <Link href='#'>Наші послуги</Link>
              </li>
              <li>
                <Link href='#'>Контакти</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Наші послуги</div>
              </li>
              <li>
                <Link href='#'>Консультації</Link>
              </li>
              <li>
                <Link href='#'>ФОП</Link>
              </li>
              <li>
                <Link href='#'>ТОВ</Link>
              </li>
              <li>
                <Link href='#'>Гранти</Link>
              </li>
              <li>
                <Link href='#'>Юридичні послуги</Link>
              </li>
              <li>
                <Link href='#'>Фінанси</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Долучайтесь</div>
              </li>
              <li>
                <Link href='#'>
                  <img src='/img/insta.png' alt='' />
                </Link>
                <Link href='#'>
                  <img src='/img/teleg.png' alt='' />
                </Link>
                <Link href='#'>
                  <img src='/img/youtu.png' alt='' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
