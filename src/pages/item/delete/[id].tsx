import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from "@/styles/Delete.module.scss"
import { ReadSingleDataType } from '@/utils/types';
import useAuth from '@/utils/useAuth';

const DeleteItem: NextPage<ReadSingleDataType> = (props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://portfolio-honda-market.vercel.app//api/item/delete/${props.singleItem._id}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert('アイテム削除失敗');
    }
  };

  const loginUser = useAuth();

  if (loginUser === props.singleItem.email) {
    return (
      <div className={styles.container}>
        <Head>
          <title>アイテム削除</title>
        </Head>
        <h1>アイテム削除ページ</h1>
        <form onSubmit={handleSubmit}>
    
          <Image
            src={props.singleItem.image}
            width='1200px'
            height='500px'
            alt={props.singleItem.title}
          />     
          <h2>{props.singleItem.title}</h2>
          <h3>￥{props.singleItem.price}</h3>
          <p>{props.singleItem.description}</p>
          <button>削除ボタン</button>
        </form>
      </div>
    );
  } else {
    return <h1>権限がありません</h1>;
  }
};

export default DeleteItem;

export const getServerSideProps: GetServerSideProps<ReadSingleDataType> = async (context) => {
  const response = await fetch(`https://portfolio-honda-market.vercel.app//api/item/${context.query.id}`);
  const singleItem = await response.json();
  return {
    props: singleItem,
  };
};
