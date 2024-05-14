'use client';

import styles from './styles.module.scss';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';

const page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/users');
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className={styles.manager}>
        <div className={styles.headLine}>Менеджери</div>
        <div className={styles.allManagers}>
          {users.map((user, idx) => {
            return (
              <Fragment key={idx}>
                <div className={idx % 2 === 0 ? styles.user : styles.userRouge}>
                  <div className={styles.userName}>{user.name}</div>
                  <div className={styles.editWrapper}>
                    <div className={styles.userStatus}>{user.role}</div>
                    <div className={styles.editButton}>
                      <AiOutlineSearch />
                    </div>
                    <div className={styles.editButton}>
                      <CiEdit />
                    </div>
                    <div className={styles.editButton}>
                      <MdDeleteOutline />
                    </div>
                  </div>
                </div>
                <div className={styles.userDetails}></div>
              </Fragment>
            );
          })}
        </div>
        <div className={styles.buttonWrapper}>
          <Link href='/admin/register' className={styles.addButton}>
            Додати менедєера1
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
