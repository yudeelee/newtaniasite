'use client';

import styles from './styles.module.scss';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const register = async () => {
    const res = await axios.post('/api/register', { name, login, password });
  };
  return (
    <div className={styles.register}>
      <div className={styles.registerForm}>
        <div className={styles.header}>Реєстрація</div>
        <div className={styles.body}>
          <div className={styles.formControl}>
            <label>Ім'я</label>
            <input
              type='text'
              value={name}
              placeholder='Введіть Логін'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label>Логін</label>
            <input
              type='text'
              value={login}
              placeholder='Введіть Логін'
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label>Пароль</label>
            <input
              type='text'
              value={password}
              placeholder='Введіть Пароль'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <button onClick={register}>Зареєструвати</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
