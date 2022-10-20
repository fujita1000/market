import connectDB from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"

const updataItem = async(req, res) => {
  try{
    await connectDB()
    await ItemModel.updateOne({_id: req.query.id}, req.query)
      return res.status(200).json({message: "アイテム編集成功"})
  }catch(err){
     return res.status(400).json({message: "アイテム編集失敗"})
  }

}

export default updataItem