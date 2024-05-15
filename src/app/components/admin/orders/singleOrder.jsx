'use client';

import { Fragment, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import Link from 'next/link';

const SingleOrder = ({ orderId, user }) => {
  const [order, setOrder] = useState({});
  const [client, setClient] = useState({});
  const [comment, setComment] = useState('');
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/orders');
        const newOrder = res.data.find((or) => or._id == orderId);
        setOrder(newOrder);
        const clt = await axios.get('/api/clients');
        const newClient = clt.data.find((cl) => cl._id == newOrder.userId);
        setClient(newClient);
        const his = await axios.put('/api/events', { orderId });
        const newHistory = his.data;
        setHistory(newHistory);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const setManager = async () => {
    try {
      const res = await axios.put('/api/orders', { userId: user.id, orderId });
      setOrder(res.data);
      const men = await axios.post('/api/events', {
        userId: user.id,
        orderId,
        type: 'menedger',
        description: `Менеджер ${user.name} взяв в розробку замовлення`,
      });
      const newHistory = JSON.parse(JSON.stringify(history));
      newHistory.push(men.data);
      setHistory(newHistory);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (value) => {
    try {
      const res = await axios.put('/api/orders', { status: value, orderId });
      setOrder(res.data);
      const men = await axios.post('/api/events', {
        userId: user.id,
        orderId,
        type: 'іефегі',
        description: `Менеджер ${user.name} змінив статус на ${value}`,
      });
      const newHistory = JSON.parse(JSON.stringify(history));
      newHistory.push(men.data);
      setHistory(newHistory);
    } catch (error) {
      console.log(error);
    }
  };

  const saveComment = async () => {
    try {
      const res = await axios.put('/api/orders', { comment, orderId });
      setOrder(res.data);
      setComment('');
      const men = await axios.post('/api/events', {
        userId: user.id,
        orderId,
        type: 'іефегі',
        description: `Менеджер ${user.name} додав коментар: ${comment}`,
      });
      const newHistory = JSON.parse(JSON.stringify(history));
      newHistory.push(men.data);
      setHistory(newHistory);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.order}>
      <div className='container'>
        <div className={styles.clientHeader}>Клієнт</div>
        <div className={styles.clientBody}>
          <div className={styles.clientName}>
            Ім`я:{' '}
            <Link href={`/admin/clients/${client._id}`}>{client.name}</Link>
          </div>
          <div className={styles.clientName}>
            Тел: <Link href={`tel:${client.phone}`}>{client.phone}</Link>
          </div>
          <div className={styles.clientName}>
            E-mail: <Link href={`mailto:${client.mail}`}>{client.mail}</Link>
          </div>
        </div>
        <div className={styles.clientHeader}>Замовлення</div>
        <div className={styles.clientBody}>
          <div className={styles.clientName}>Категорія: {order.category}</div>
          <div className={styles.clientName}>Розділ: {order.item}</div>
          <div className={styles.clientName}>Ціна: {order.price}</div>
          {order.comment && (
            <div className={styles.clientName}>Коментар: {order.comment}</div>
          )}
        </div>
        {!order.managerId && (
          <Fragment>
            <div className={styles.clientHeader}>
              Це замовлення не закріплене
            </div>
            <div className={styles.clientBody}>
              <button onClick={() => setManager()}>Взяти замовлення</button>
            </div>
          </Fragment>
        )}
        {order.managerId && (
          <Fragment>
            <div className={styles.clientHeader}>Статус</div>
            <div className={styles.clientBody}>
              <select
                value={order.status}
                onChange={(e) => changeStatus(e.target.value)}
              >
                <option value='waiting'>В роботі</option>
                <option value='connect'>Зв'язався</option>
                <option value='part'>Часткова оплата</option>
                <option value='paid'>Оплачено</option>
                <option value='closed'>Завершено</option>
              </select>
            </div>
            {order.managerComment && (
              <div className={styles.clientHeader}>Останній коментар</div>
            )}
            {order.managerComment && (
              <div className={styles.clientBody}>{order.managerComment}</div>
            )}
            <div className={styles.clientHeader}>Додати коментар</div>
            <div className={styles.clientBody}>
              <textarea
                value={comment || ''}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button onClick={() => saveComment()}>Зберегти коментар</button>
            </div>
            <div className={styles.clientHeader}>Історія</div>
            <div className={styles.clientBody}>
              {history &&
                history.map((his, idx) => (
                  <div key={idx} className={styles.history}>
                    {his.description}
                    <br />
                    <div className={styles.hisDate}>{his.createdAt}</div>
                  </div>
                ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default SingleOrder;
