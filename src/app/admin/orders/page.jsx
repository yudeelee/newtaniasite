'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import Link from 'next/link';

const page = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/orders');
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.orders}>
      <div className='container'>
        <div className={styles.orderHeader}>Нові заявки</div>
        {orders?.map((or, idx) => (
          <div key={idx} className={styles.order}>
            <div className={styles.orderLink}>
              <Link href={`/admin/orders/${or._id}`}>{or.item}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
