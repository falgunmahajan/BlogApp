import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullName:String,
    email:String,
    mobileNumber:String,
    password:String,
    role:{
        type:String,
        enum:["admin", "writer", "reader"]

    }
},{timestamps:true})

export const user=mongoose.models.user|| mongoose.model("user",userSchema)