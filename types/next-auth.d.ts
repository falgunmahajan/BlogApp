import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      mobileNumber: string;
      password: string;
      role:string
      
    },
    accessToken: string;
  }
}
