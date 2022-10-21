import { NextApiResponse } from "next"
import auth from "@/utils/auth"
import connectDB from "@/utils/database";
import {ItemModel} from "@/utils/schemaModels"
import { ExtendesNextApiRequestItem, SavedItemDataType, ResMessageType } from "@/utils/types"

const deleteItem = async(req: ExtendesNextApiRequestItem, res:NextApiResponse<ResMessageType>) =>{
  try{
    await connectDB()
    const singleItem: SavedItemDataType | null = await ItemModel.findById(req.query.id)

    if(!singleItem) return res.status(400).json({message: "アイテムが存在していないため削除失敗"})
    if(singleItem.email === req.body.email){
    return res.status(200).json
   
({
  message: "アイテム削除成功" 
})  }else{
  throw new Error()
}
}catch(err){
return res.status(400).json({
  message: "アイテム削除失敗"
})
}
}

export default auth(deleteItem)