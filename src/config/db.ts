import mongoose,{ConnectOptions } from "mongoose";


const connectDB=async ()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
      }as ConnectOptions)
        console.log(`db connected to : ${process.env.MONGO_URL} `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB