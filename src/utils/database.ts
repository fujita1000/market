import mongoose from "mongoose"

const connectDB = async() => {
    try{
      await mongoose.connect("mongodb+srv://fujita1000:89so94ta@cluster0.spxxygk.mongodb.net/?retryWrites=true&w=majority")
      console.log("Success: connected to MongoDB")
    }catch(err){
      console.log("Failure: Unconnected to MongiDB")
      throw new Error()
    }
}

export default connectDB