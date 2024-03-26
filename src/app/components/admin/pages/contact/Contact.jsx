import styles from './styles.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [phone, setPhone] = useState({});
  const [mail, setMail] = useState({});
  const [insta, setInsta] = useState({});
  const [teleg, setTeleg] = useState({});
  const [youtube, setYoutube] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/contactpage');
        setPhone(res.data.phone);
        setMail(res.data.mail);
        setInsta(res.data.instagram);
        setTeleg(res.data.telegram);
        setYoutube(res.data.youtube);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const saveChanges = async () => {
    try {
      const data = {
        phone,
        mail,
        instagram: insta,
        telegram: teleg,
        youtube,
      };
      const res = await axios.put('/api/contactpage', data);
      setPhone(res.data.newPage.phone);
      setMail(res.data.newPage.mail);
      setInsta(res.data.newPage.instagram);
      setTeleg(res.data.newPage.telegram);
      setYoutube(res.data.newPage.youtube);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.headLine}>Контакти</div>
      <div className={styles.contacts}>
        <div className={styles.formControl}>
          <label htmlFor=''>Телефон</label>
          <input
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>E-mail</label>
          <input
            type='text'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Instagram</label>
          <input
            type='text'
            value={insta}
            onChange={(e) => setInsta(e.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Telegram</label>
          <input
            type='text'
            value={teleg}
            onChange={(e) => setTeleg(e.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Youtube</label>
          <input
            type='text'
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.saveButton} onClick={saveChanges}>
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default Contact;
