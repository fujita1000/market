
import jwt from "jsonwebtoken"
import type { NextApiResponse } from "next"
import {DecodedType, ExtendNextApiRequestAuth, ResMessageType} from "./types"

const secret_key = "nextmarket"

const auth = (handler: Function) => {
  return async(req: ExtendNextApiRequestAuth, res: NextApiResponse<ResMessageType>) => {
    if(req.method === "GET"){
      return handler(req,res)
    }

    const token = await req.headers.authorization.split(" ")[1]

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

