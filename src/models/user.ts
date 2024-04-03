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
})

export const user= mongoose.model("user",userSchema)