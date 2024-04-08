import { user } from "@/models/user";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { getToken } from "@/utils/server/jwt/jwtToken";
const url=process.env.DB_URL as string

export const POST = async(req:NextRequest)=>{
    await mongoose.connect(url)
   const data = await req.json()
   console.log(data);
   
   try {
     const existingUser = await user.findOne({$or:[{email:data.email},{mobileNumber:data.mobileNumber}]})
     if(!existingUser){
        return NextResponse.json({success:false,message:`This ${data.email && "email"}  ${data.mobileNumber && "phone number"} is not registered. Please signup to continue `},{status:401})
     }
     const isMatchedPassword = await bcrypt.compare(data.password,existingUser.password)
     if(!isMatchedPassword){
        return NextResponse.json({success:false,message:"Incorrect email or password"},{status:401})
     }
     const token = getToken(existingUser)
     return NextResponse.json({success:true,result:existingUser,token},{status:200})
   } catch (error) {
    return NextResponse.json({message:"something went wrong"},{status:500})
   }
}