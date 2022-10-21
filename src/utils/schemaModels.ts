import mongoose from "mongoose"
import {ItemDataType, UserDataType} from "./types"

const Schema = mongoose.Schema

const ItemSchema = new Schema<ItemDataType>({
  title: String,
  image: String,
  price: String,
  description: String,
  email: String
})

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unipue: true,
  },
  password:{
    type: String,
    require: true,
  },
})

export const ItemModel = mongoose.models.Item || mongoose.model<ItemDataType>("Item", ItemSchema)

export const UserModel = mongoose.models.User || mongoose.model<UserDataType>("User", UserSchema)