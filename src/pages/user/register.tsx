import type { NextPage } from "next"
import Head from "next/head"
import {useState} from "react"
import styles from "@/styles/Register.module.scss"

const Register: NextPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = async(e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
   const response = await fetch("http://localhost:3000/api/user/register",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    }catch(err){
      alert("ユーザー登録失敗")
    }
  }
  return(
    <div className={styles.container}>
      <Head>ユーザー登録ページ</Head>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit} className={styles.input_container}>
        <input value={name} onChange={(e) => {setName(e.target.value)}}
        type="text" name="name" placeholder="名前" required></input>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}}
        type="text" name="email" placeholder="メールアドレス" required></input>
        <input value={password} onChange={(e) => {setPassword(e.target.value)}}
        type="text" name="password" placeholder="パスワード" required></input>
        <button>登録ボタン</button>
      </form>
    </div>
  )
}

export default Register