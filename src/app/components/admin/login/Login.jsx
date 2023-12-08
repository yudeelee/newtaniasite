'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const enter = async () => {
    let options = {
      redirect: false,
      email: login,
      password: password,
    };
    const res = await signIn('credentials', options);
    if (res.ok) {
      router.push('/admin');
    }
  };
  return (
    <div className={styles.register}>
      <div className={styles.registerForm}>
        <div className={styles.header}>Вхід</div>
        <div className={styles.body}>
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
            <button onClick={enter}>Увійти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
