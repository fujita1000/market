import Link from "next/link"
import styles from './Header.module.scss'


const Header = () => {
  return (
    <div className={styles.container}>
      <nav>
        <li>
          <Link href='/user/register'>
            <a>登録</a>
          </Link>
        </li>
        <li>
          <Link href='/user/login'>
            <a>ログイン</a>
          </Link>
        </li>
        <li>
          <Link href='/item/create'>
            <a>アイテム作成</a>
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Header
