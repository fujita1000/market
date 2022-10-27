import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p>©{new Date().getFullYear()} 本田マーケット</p>
      </footer>
    </div>
  )
}

export default Footer
