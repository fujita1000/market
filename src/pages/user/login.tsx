import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from "@/styles/Login.module.scss"

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolio-honda-market.vercel.app//api/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const jsonData = await response.json();
      localStorage.setItem('token', jsonData.token);
      alert(jsonData.message);
    } catch (err) {
      alert('ログイン失敗');
    }
  };
  return (
    <div className={styles.container}>
      <Head>ログインページ</Head>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit} className={styles.input_container}>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type='text'
          name='email'
          placeholder='メールアドレス'
          required
        ></input>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type='text'
          name='password'
          placeholder='パスワード'
          required
        ></input>
        <button>ログインボタン</button>
      </form>
    </div>
  );
};

export default Login;
