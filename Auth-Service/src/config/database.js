import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connect = async() =>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected!!");
}