'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { useState } from 'react';

const HeaderMenu = ({ active }) => {
  const [burger, setBurger] = useState(false);
  return (
    <div className={styles.HeaderMenu}>
      <div className={`container ${styles.menuWrapper}`}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.menu}>
          <ul className={styles.topMenu}>
            <li className={active === 'home' ? styles.active : ''}>
              <Link href='/'>Головна</Link>
            </li>
            <li className={active === 'about' ? styles.active : ''}>
              <Link href='/about'>Про нас</Link>
            </li>
            <li className={active === 'services' ? styles.active : ''}>
              <Link href='/services'>Наші послуги</Link>
            </li>
            <li className={active === 'contact' ? styles.active : ''}>
              <Link href='/contact'>Контакти</Link>
            </li>
          </ul>
          <div
            className={`${styles.burger}`}
            onClick={() => setBurger(!burger)}
          >
            <div
              className={`${styles.line1} ${burger ? styles.open : ''}`}
            ></div>
            <div
              className={`${styles.line2} ${burger ? styles.open : ''}`}
            ></div>
            <div
              className={`${styles.line3} ${burger ? styles.open : ''}`}
            ></div>
          </div>
          <ul className={`${styles.burgerMenu} ${!burger ? styles.open : ''}`}>
            <li className={active === 'home' ? styles.active : ''}>
              <Link href='/'>Головна</Link>
            </li>
            <li className={active === 'about' ? styles.active : ''}>
              <Link href='/about'>Про нас</Link>
            </li>
            <li className={active === 'services' ? styles.active : ''}>
              <Link href='/services'>Наші послуги</Link>
            </li>
            <li className={active === 'contact' ? styles.active : ''}>
              <Link href='/contact'>Контакти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
