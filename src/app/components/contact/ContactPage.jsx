'use client';

import styles from './styles.module.scss';
// import { data } from '../../../../data/data';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const TOKEN = '5530765545:AAFy5U47-r8OYc198-5blcgCR-cKB3_jowE';
  const CHAT_ID = '-1001517912943';
  const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [sections, setSections] = useState([]);
  const [section, setSection] = useState();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  const [price, setPrice] = useState();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/servicepage');
        setData(res.data.services);
        setSections(res.data.services.map((sec) => sec.name));
        setItems(res.data.services[0].items);
        setSection(res.data.services[0]);
        setItem(res.data.services[0].items[0].name);
        setPrice(res.data.services[0].items[0].price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const current = data?.find((sec) => sec.name === section);
    setItems(current?.items);
    setItem(current?.items[0].name);
    setPrice(current?.items[0].price);
  }, [section]);

  useEffect(() => {
    const cutItem = items?.find((it) => it.name === item);
    setPrice(cutItem?.price);
  }, [item]);

  const sendMessage = async () => {
    if (name === '') {
      setErrorMsg("Введіть будь-ласка своє Ім'я");
      return;
    }
    if (phone === '') {
      setErrorMsg('Введіть будь-ласка свій номер телефону');
      return;
    }
    if (email === '') {
      setErrorMsg('Введіть будь-ласка свій E-mail');
      return;
    }
    if (!section) {
      setErrorMsg('Виберіть категорію');
      return;
    }
    if (item === '...') {
      setErrorMsg('Виберіть розділ');
      return;
    }
    const msg = `${name}\n${phone}\n${email}\n${section}\n${item}\n${price}\n${comment}`;

    // const data = {
    //   name,
    //   phone,
    //   mail: email,
    //   category: section,
    //   item,
    //   comment,
    //   price,
    // };

    // const res = await axios.post('/api/orders', data);

    const data = {
      source_id: 'YTU3NzQ1ZmIzMDdmNDU5YzBjMjFhODRmMGY0MTRmMjg0YTdhYzVhNw',
      buyer: {
        full_name: name,
        email: email,
        phone: phone,
      },
      shipping: {
        shipping_address_city: 'Lviv',
        shipping_receive_point: 'Lviv',
        shipping_address_country: 'Lviv',
        shipping_address_region: 'Lviv',
        shipping_address_zip: 'Lviv',
      },
      products: {
        price: price,
        quantity: 1,
        name: `${section} || ${item}`,
        picture: '111',
        properties: [
          {
            name: 'Color',
            value: 'Space Gray',
          },
        ],
      },
    };

    const res = await axios.post('https://openapi.keycrm.app/v1/order', data);
    console.log(res.data);

    axios
      .post(URI, {
        chat_id: CHAT_ID,
        text: msg,
        parse_mode: 'html',
      })
      .then((res) => {
        setErrorMsg('Ваше замовлення прийнято');
      })
      .catch((err) => {
        console.log('bad');
      });
  };

  return (
    <div className={styles.contact}>
      {errorMsg && (
        <div className={styles.alertWrapper} onClick={() => setErrorMsg('')}>
          <div className={styles.alert}>
            <p>{errorMsg}</p>
            <button onClick={() => setErrorMsg('')}>Гаразд</button>
          </div>
        </div>
      )}
      <div className='container'>
        <div className={styles.contactHeader}>
          <div className='title'>Замовити послугу</div>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.contacts}>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/phone.png' alt='' />
              </div>
              <div className={styles.conText}>Телефон</div>
            </div>
            <div className={styles.conData}>
              <a href='tel:073-418-7147'>+380734187147</a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/mail.png' alt='' />
              </div>
              <div className={styles.conText}>Електронна пошта</div>
            </div>
            <div className={styles.conData}>
              <a href='mailto:consulting.lviv.ua@gmail.com'>
                consulting.lviv.ua@gmail.com
              </a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/instagram.png' alt='' />
              </div>
              <div className={styles.conText}>Instagram</div>
            </div>
            <div className={styles.conData}>
              <a href='https://www.instagram.com/tanyaselezniova_accountant/'>
                www.instagram.com/tanyaselezniova_accountant/
              </a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/telegram.png' alt='' />
              </div>
              <div className={styles.conText}>Telegram</div>
            </div>
            <div className={styles.conData}>
              <a href='https://t.me/tanyaselezniova_accountant'>
                t.me/tanyaselezniova_accountant
              </a>
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/youtube.png' alt='' />
              </div>
              <div className={styles.conText}>YouTube</div>
            </div>
            <div className={styles.conData}>
              <a href='https://www.youtube.com/@consulting-accountant'>
                www.youtube.com/@consulting-accountant
              </a>
            </div>
            <div className='text mt100'>
              Компанія <span>“БУХГАЛТЕР-КОНСУЛЬТАНТ”</span> працює онлайн по
              всій території України з понеділка по п’ятницю з 9:00 до 18:00.
              <br />
              Завжди раді допомогти!
            </div>
          </div>
          <div className={styles.conForm}>
            <div className={styles.formControl}>
              <input
                type='text'
                placeholder='Ім’я'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formControl}>
              <input
                type='text'
                placeholder='Телефон'
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.formControl}>
              <input
                type='text'
                placeholder='Електронна адреса'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formControl}>
              <select onChange={(e) => setSection(e.target.value)}>
                <option value='...'>...</option>
                {sections?.map((sec, idx) => {
                  return (
                    <option key={idx} value={sec}>
                      {sec}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.formControl}>
              <select value={item} onChange={(e) => setItem(e.target.value)}>
                <option value='...'>...</option>
                {items?.map((itm, idx) => {
                  return (
                    <option key={idx} value={itm.name}>
                      {itm.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.formControl}>
              <textarea
                name=''
                id=''
                cols='30'
                rows='6'
                placeholder='Коментар'
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.formControl}>
              <button className='button' onClick={sendMessage}>
                Замовити послугу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
