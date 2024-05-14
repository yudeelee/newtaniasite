'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { signOut } from 'next-auth/react';

import { RiArrowGoBackFill } from 'react-icons/ri';
import { GoWorkflow } from 'react-icons/go';
import { GrServices } from 'react-icons/gr';
import { GoPeople } from 'react-icons/go';
import { IoDocumentsOutline } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.hMenu}>
          <div className={styles.toSite}>
            <Link href='#'>
              <RiArrowGoBackFill />
              На сайт
            </Link>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <Link href='/admin/orders'>
                  <GoWorkflow />
                  Заявки
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <GoPeople />
                  Клієнти
                </Link>
              </li>
              <li>
                <Link href='/admin/manager'>
                  <GrServices />
                  Менеджери
                </Link>
              </li>
              <li>
                <Link href='/admin/pages'>
                  <IoDocumentsOutline />
                  Сторінки
                </Link>
              </li>
              <li>
                <button onClick={() => signOut()}>
                  Вихід
                  <IoMdExit />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
