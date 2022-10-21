import {NextApiResponse} from "next"
import auth from "@/utils/auth"
import connectDB from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"
import {ExtendesNextApiRequestItem, ResMessageType} from "@/utils/types"


const createItem = async(req: ExtendesNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
  try{
 await connectDB()
  await ItemModel.create(req.body)
  return res.status(200).json({message:"アイテム作成"})
  }catch(err){
    return res.status(400).json({message: "アイテム作成失敗"})
  }
}

export default auth(createItem)