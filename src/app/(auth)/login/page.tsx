import AuthButton from "@/app/components/Button";
import { RoutePaths } from "@/app/constants/routes";
import Link from "next/link";
import React from "react";
import { handleLogin } from "../auth";

const page = () => {
  return (
    <div className="w-full max-h-screen flex flex-col justify-center items-center mt-[10%]">
      <h1 className="text-4xl">Login to bloged</h1>

      <form
        action={handleLogin}
        className="w-[400px] flex flex-col items-center justify-center mt-[10%] h-auto gap-10"
      >
        <input
          type="email"
          name="email"
          className="w-full text-4xl outline-none bg-inherit border-b-4 focus:border-opacity-100 transition-all duration-300 border-transparent focus:border-cyan-400"
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          className="w-full text-4xl outline-none bg-inherit border-b-4 focus:border-opacity-100 transition-all duration-300 border-transparent focus:border-cyan-400"
          placeholder="Enter Password"
        />
        <AuthButton type="submit" buttonText="Login" />
      </form>
      <div className="flex my-10">
        <p>{"Don't have an account?"}</p>
        <Link href={RoutePaths.signup} className="hover:underline decoration-cyan-300 underline-offset-2">
          Register
        </Link>
      </div>
    </div>
  );
};

export default page;
