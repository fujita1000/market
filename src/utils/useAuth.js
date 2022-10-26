
import jwt from "jsonwebtoken"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
const secret_key = "nextmarket"

const useAuth = () => {   
  const [loginUser, setLoginUser] = useState("")
  const router = useRouter()

  useEffect(() => {  
  const token = localStorage.getItem("token")
  
      if(!token){
      router.push("/user/login")
      }
try{
  const decoded = jwt.verify(token, secret_key)
  setLoginUser(decoded.email)
}catch(err){
  router.push("/user/login")
}
},[router])

 return loginUser
}
export default useAuth