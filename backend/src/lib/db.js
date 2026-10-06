import mongoose from "mongoose";

const  connectDB= async ()=>{
    await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("the database is connected"))
    .catch((error) => console.log(`Error is comming ${error}`))
}

export default connectDB;

