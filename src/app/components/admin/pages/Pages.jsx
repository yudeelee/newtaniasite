'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { LiaHomeSolid } from 'react-icons/lia';
import { LuContact2 } from 'react-icons/lu';
import { IoBookOutline } from 'react-icons/io5';
import { GrServices } from 'react-icons/gr';
import Uploader from '../uploader/Uploader';
import { useState } from 'react';
import Home from './home/Home';
import About from './about/About';
import Service from './service/Service';
import Contact from './contact/Contact';

const Pages = () => {
  const [page, setPage] = useState('home');
  return (
    <div className={styles.pages}>
      <div className='container'>
        <div className={styles.conPages}>
          <div className={styles.header}>
            <ul>
              <li
                className={page === 'home' ? styles.selected : ''}
                onClick={() => setPage('home')}
              >
                <div>
                  <LiaHomeSolid />
                  Головна
                </div>
              </li>
              <li
                className={page === 'about' ? styles.selected : ''}
                onClick={() => setPage('about')}
              >
                <div>
                  <IoBookOutline />
                  Про нас
                </div>
              </li>
              <li
                className={page === 'service' ? styles.selected : ''}
                onClick={() => setPage('service')}
              >
                <div>
                  <GrServices />
                  Наші послуги
                </div>
              </li>
              <li
                className={page === 'contact' ? styles.selected : ''}
                onClick={() => setPage('contact')}
              >
                <div>
                  <LuContact2 />
                  Контакти
                </div>
              </li>
            </ul>
          </div>
          {page === 'home' && <Home />}
          {page === 'about' && <About />}
          {page === 'service' && <Service />}
          {page === 'contact' && <Contact />}
        </div>
      </div>
    </div>
  );
};

export default Pages;
