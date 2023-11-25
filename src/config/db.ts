import mongoose,{ConnectOptions } from "mongoose";


const connectDB=async ()=>{
    console.log(`db connected to1 : ${process.env.MONGODB_URI} `)

    try {
        const con=await mongoose.connect('mongodb+srv://vercel-admin-user-655e16d49515342489998d39:07IGSDsI24FfnjC2@cluster0.fk3nt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
          useUnifiedTopology: true,
          useNewUrlParser: true,
      }as ConnectOptions)
        console.log(`db connected to2 : ${process.env.MONGODB_URI} `)
    } catch (error) {
        console.log(error)
        throw error;
        process.exit(1)
    }
}

export default connectDB