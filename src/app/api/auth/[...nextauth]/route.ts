import { User } from "@/models/user";
import mongoose from "mongoose";
import NextAuth, {
  User as AuthUser,
  Session,
  Account,
  Profile,
  NextAuthOptions,
} from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider,{GoogleProfile} from "next-auth/providers/Google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getToken } from "@/utils/server/jwt/jwtToken";

const url = process.env.DB_URL as string;
const authOptions : NextAuthOptions = {
session:{
strategy:"jwt",
maxAge:1 * 24 * 60 * 60
},

  providers: [
    GoogleProvider({
      profile(profile:GoogleProfile){
        console.log("PROFILE",profile);
        
        return {
          ...profile,
          id:profile.sub
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "abc@gmail.com" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any) {
        await mongoose.connect(url);
        try {
          const existingUser = await User.findOne({ email: credentials.email });
          if (existingUser) {
            const isValidPassword = await bcrypt.compare(
              credentials.password,
              existingUser.password
            );
            if (isValidPassword) {
              const token = getToken(existingUser);

              existingUser.accessToken = token;

              return existingUser;
            }
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: AuthUser;
      account: Account | null;
    }) {
      if (account?.provider === "credentials") {
        return true;
      }
      if (account?.provider === "google") {
        try {
          await mongoose.connect(url);
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = await User.create(user);
            const token = getToken(newUser);
           
            newUser.accessToken = token;
            return newUser;
          }
          const token = getToken(existingUser);
          existingUser.accessToken = token;
          return existingUser;
        } catch (err: any) {
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user,account }: { token: JWT; user: AuthUser ,account:Account|null }) {
   

      return { ...token, ...user };
    },
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: any;
      user: any;
    }) {
     
      session.user = token._doc;
      session.accessToken = token.accessToken;
      return session;
    },
  },

 
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
