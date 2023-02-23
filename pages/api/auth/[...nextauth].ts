import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { compare } from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import User from "models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({
          email: credentials?.email,
        });

        if (!user) throw new Error("Email is not registered.");

        const isPasswordCorrect = await compare(
          credentials!.password,
          user.hashedPassword
        );

        if (!isPasswordCorrect) throw new Error("Password is incorrect.");

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
};

export default NextAuth(authOptions);
