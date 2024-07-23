import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Define your configuration in a separate variable and pass it to NextAuth()
// This way we can also 'export const config' for use later
export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [Google],
});
