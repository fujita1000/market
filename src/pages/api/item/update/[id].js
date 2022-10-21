import auth from "@/utils/auth"
import connectDB from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"

const updataItem = async(req, res) => {
  try{
    await connectDB()
    const singleItem = await ItemModel.updateOne({_id: req.query.id}, req.query)
    if(singleItem === req.body.email){
      return res.status(200).json({message: "アイテム編集成功"}) 
     }else{
      throw new Error()
     }
  }catch(err){
     return res.status(400).json({message: "アイテム編集失敗"})
  }

}

export default auth(updataItem)