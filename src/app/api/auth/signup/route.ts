import mongoose from "mongoose"
import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"
const url=process.env.DB_URL as string

export const POST=async(req:NextRequest)=>{
   await mongoose.connect(url)
   const data = await req.json()
   console.log(data);
   

   return NextResponse.json({success:true,data:data})
}