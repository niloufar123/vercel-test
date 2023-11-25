import mongoose,{ConnectOptions } from "mongoose";


const connectDB=async ()=>{
    console.log(`db connected to1 : ${process.env.MONGO_URL} `)

    try {
        const con=await mongoose.connect(process.env.MONGO_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
      }as ConnectOptions)
        console.log(`db connected to2 : ${process.env.MONGO_URL} `)
    } catch (error) {
        console.log(error)
        throw error;
        process.exit(1)
    }
}

export default connectDB