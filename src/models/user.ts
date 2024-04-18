import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobileNumber:String,
    password:String,
    image:String,
    role:{
        type:String,
        enum:["admin", "writer", "reader"]

    }
},{timestamps:true})

export const User=mongoose.models.user|| mongoose.model("user",userSchema)