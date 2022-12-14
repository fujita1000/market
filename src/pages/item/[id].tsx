import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/SingleItem.module.scss"
import {ReadSingleDataType} from "@/utils/types";


const ReadSingleItem: NextPage<ReadSingleDataType> = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>{props.singleItem.title}</Head>
      <div className={styles.single_flex}>
        <h1>{props.singleItem.title}</h1>
        <Link href={`/item/update/${props.singleItem._id}`}>
          <a className={styles.link}>アイテム編集</a>
        </Link>
        <Link href={`/item/delete/${props.singleItem._id}`}>
          <a className={styles.link}>アイテム削除</a>
        </Link>
      </div>
      <div className={styles.image}>
        <Image
          src={props.singleItem.image}
          alt={props.singleItem.title}
          width={1200}
          height={500}
        />
      </div>
      <div className={styles.single}>
        <h2>値段</h2>
        <h2>￥{props.singleItem.price}</h2>
      </div>
      <div className={styles.single}>
        <h3>商品タイトル</h3>
        <h3>{props.singleItem.title}</h3>
      </div>
      <div className={styles.single}>
        <p>商品説明</p>
        <p>{props.singleItem.description}</p>
      </div>
    </div>
  );
};

export default ReadSingleItem;

export const getServerSideProps: GetServerSideProps<ReadSingleDataType> = async (context) => {
  const response = await fetch(`https://portfolio-honda-market.vercel.app/api/item/${context.query.id}`);
  const singleItem = await response.json();
  return {
    props: singleItem,
  };
};
