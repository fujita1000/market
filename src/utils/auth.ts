
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from "next"
import {DecodedType, ExtendNextApiRequestAuth, ResMessageType} from "./types"

const secret_key = "nextmarket"

const auth = (handler: Function) => {
  return async(req: ExtendNextApiRequestAuth, res: NextApiResponse<ResMessageType>) => {
    if(req.method === "GET"){
      return handler(req,res)
    }


    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11c3lhbXVzeWEubm92ZWxAZ21haWwuY29tIiwiaWF0IjoxNjY2MzQxMzU2LCJleHAiOjE2NjY0MjQxNTZ9._hJFXZJmSntsANT9jVQwvwK7AZfIw49EeKxDC8tO32k"

    // const token = await req.headers.authorization.split("")[1]

    if(!token){
      return res.status(401).json({message: "トークンがありません"})
    }
    try{
      const decoded = jwt.verify(token, secret_key)
      req.body.email = (decoded as DecodedType).email
      return handler(req, res)
    }catch(err){
      return res.status(401).json({
        message: "トークンが正しくないので、ログインし直してください"
      })
    }
  }
}

export default auth

