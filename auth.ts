import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [Google],
  adapter: PrismaAdapter(prisma),
});
