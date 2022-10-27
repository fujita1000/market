import {Types} from "mongoose"
import type { NextApiRequest } from "next"

export interface ItemDataType{
  title: string
  image: string
  price: string
  description: string
  email: string  
}

export interface UserDataType{
  name: string
  email: string
  password: string
}

export interface DecodedType{
  email: string
}
export interface ExtendNextApiRequestAuth extends NextApiRequest{
  headers: {
    authorization: string
  }
  body:{
    email: string
  }
}
export interface ResMessageType {
  message: string
  token?: string
}

// registerUser.ts, login.ts
export interface ExtendedNextApiRequestUser extends NextApiRequest {
  body: UserDataType
}

// loginUser.ts
export interface SavedUserDataType extends UserDataType{
  _id: Types.ObjectId
}

// readAll.ts, [id].ts, update/[id].ts, delete/[id].ts 
export interface SavedItemDataType extends ItemDataType{
  _id: Types.ObjectId
}

// readAll.ts
export interface ResReadAllType {
  message: string
  allItems?: SavedItemDataType[]
}

// create.ts
export interface ExtendesNextApiRequestItem extends NextApiRequest {
  body: ItemDataType
}

// [id].js
export interface ResReadSingleType{
  message: string
  singleItem?: SavedItemDataType
}

// Frontend
// [id].tsx, update/[id].tsx, delete/[id].tsx, 
export interface ReadSingleDataType{
  singleItem: {
    _id: string
    title: string
    image: string
    price: string
    description: string
    email: string
}
}

// index.tsx
export interface ReadAllDataType {
  allItems: {
    _id: string
    title: string
    image: string
    price: string
    description: string
    email: string
  }[]
}