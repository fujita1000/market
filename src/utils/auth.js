import jwt from "jsonwebtoken"

const secret_key = "nextmarket"

const auth = (handler) => {
  return async(req, res) => {
    if(req.method === "GET"){
      return handler(req,res)
    }


    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11c3lhbXVzeWEubm92ZWxAZ21haWwuY29tIiwiaWF0IjoxNjY2MjYxOTcyLCJleHAiOjE2NjYzNDQ3NzJ9.-bT5gmOHJi7bK_q1iXXqZ0i0xZYE4sGkg7oynW-ZToQ"

    // const token = await req.handers.authorization.split("")[1]

    if(!token){
      return res.status(401).json({message: "トークンがありません"})
    }
    try{
      const decoded = jwt.verify(token, secret_key)
      req.body.email = decoded.email
      return handler(req, res)
    }catch(err){
      return res.status(401).json({
        message: "トークンが正しくないので、ログインし直してください"
      })
    }
  }
}

export default auth

