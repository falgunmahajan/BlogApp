
import jwt from "jsonwebtoken"
const secretKey=process.env.SECRET_KEY as string
export const getToken = (user:any)=> jwt.sign({userId:user._id},secretKey,{expiresIn:"24h"})