import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.scss'

const ReadAllItem: NextPage = (props) => {

  return (
    <div className={styles.container}>
      <h1>こんにちは</h1>
      {props.allItems.map((item) => (
        <Link href={`/item/${item._id}`} key={item._id}>
          <a>
            <div key={item._id}>
              <Image src={item.image} alt={item.title} width={500} height={300} />
              <h2>{item.price}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default ReadAllItem;

export const getServerSideProps = async() => {
  const response = await fetch("http://localhost:3000/api/item/readall")
  const allItems = await response.json();
  return{
    props: allItems
  }
}
