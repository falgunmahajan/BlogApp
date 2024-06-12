import { User } from "@/models/user"
import { isValidData } from "@/utils/validation/validate"
import mongoose from "mongoose"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { getToken } from "@/utils/server/jwt/jwtToken"

const url=process.env.DB_URL as string

export const POST=async(req:NextRequest)=>{
   await mongoose.connect(url)
   const data = await req.json()
   const [boolMsg,msg]=isValidData(data);
   if(!boolMsg){
      return NextResponse.json({success:false,message:msg},{status:403})
   }
   try {
      const existingUser = await User.findOne({$or:[{email:data.email},{mobileNumber:data.mobileNumber}]})
    
      
      if(existingUser){
       return NextResponse.json({success:false,message:"This email or mobile number is already registered. Login to continue"},{status:403})
      }
      data.password=await bcrypt.hash(data.password,10)
      const newUser = await User.create(data);
      return NextResponse.json({success:true,result:newUser},{status:201})
   
   } catch (error) {
      return NextResponse.json({message:"Something went wrong"},{status:500})
   }
}