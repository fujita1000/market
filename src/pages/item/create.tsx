import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import ImgInput from '@/components/imgInput';
import styles from "@/styles/Create.module.scss"
import useAuth from '@/utils/useAuth';


const CreateItem: NextPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolio-honda-market.vercel.app//api/item/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert('アイテム作成失敗');
    }
  };

  const loginUser = useAuth();

  if (loginUser) {
    return (
      <div className={styles.container}>
        <Head>アイテム作成</Head>
        <h1>アイテム作成</h1>
    
        <form onSubmit={handleSubmit} className={styles.input_container}>    <ImgInput setImage={setImage} />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            name='title'
            placeholder='アイテム名'
            required
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type='text'
            name='price'
            placeholder='価格'
            required
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type='text'
            name='image'
            placeholder='画像'
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name='description'
            rows={15}
            placeholder='商品説明'
            required
          />
          <button className={styles.button}>作成</button>
        </form>
      </div>
    );
  }else{
    return<h1>ログインしてください</h1>
  }
};

export default CreateItem;
