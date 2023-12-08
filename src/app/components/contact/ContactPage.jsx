import styles from './styles.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.contact}>
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
            <div className={styles.conData}>consulting.lviv.ua@gmail.com</div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/instagram.png' alt='' />
              </div>
              <div className={styles.conText}>Instagram</div>
            </div>
            <div className={styles.conData}>
              www.instagram.com/tanyaselezniova_accountant/
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/telegram.png' alt='' />
              </div>
              <div className={styles.conText}>Telegram</div>
            </div>
            <div className={styles.conData}>
              t.me/tanyaselezniova_accountant
            </div>
            <div className={styles.cons}>
              <div className={styles.conIcon}>
                <img src='/img/youtube.png' alt='' />
              </div>
              <div className={styles.conText}>YouTube</div>
            </div>
            <div className={styles.conData}>
              www.youtube.com/@consulting-accountant
            </div>
            <div className='text mt100'>
              Компанія <span>“БУХГАЛТЕР-КОНСУЛЬТАНТ”</span> працює онлайн по
              всій території України з понеділка по п’ятницю з 9:00 до 18:00.
              Завжди раді допомогти!
            </div>
          </div>
          <div className={styles.conForm}>
            <div className={styles.formControl}>
              <input type='text' placeholder='Ім’я' />
            </div>
            <div className={styles.formControl}>
              <input type='text' placeholder='Телефон' />
            </div>
            <div className={styles.formControl}>
              <input type='text' placeholder='Електронна адреса' />
            </div>
            <div className={styles.formControl}>
              <select>
                <option value=''>value</option>
              </select>
            </div>
            <div className={styles.formControl}>
              <select>
                <option value=''>value</option>
              </select>
            </div>
            <div className={styles.formControl}>
              <textarea
                name=''
                id=''
                cols='30'
                rows='6'
                placeholder='Коментар'
              ></textarea>
            </div>
            <div className={styles.formControl}>
              <button className='button'>Замовити послугу</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
