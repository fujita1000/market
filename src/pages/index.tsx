import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.scss'
import {ReadAllDataType} from "@/utils/types"


const ReadAllItem: NextPage = (props) => {

  return (
    <div className={styles.container}>
      <h1>本田マーケット</h1>
      <div className={styles.Card_container}>
        {props.allItems.map((item) => (
          <Link href={`/item/${item._id}`} key={item._id}>
            <div className={styles.Card}>
              <a>
                <div key={item._id}>
                  <Image src={item.image} alt={item.title} width={500} height={300} className={styles.image}/>
                  <h2>￥{item.price}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ReadAllItem;

export const getServerSideProps: GetServerSideProps<ReadAllDataType> = async() => {
  const response = await fetch("http://localhost:3000/api/item/readall")
  const allItems = await response.json();
  return{
    props: allItems
  }
}

// }t37afwgq