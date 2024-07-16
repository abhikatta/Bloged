import AuthButton from "@/app/components/Button";
import { RoutePaths } from "@/app/constants/routes";
import Link from "next/link";
import { handleSignup } from "../auth";

const page = () => {
  return (
    <div className="w-full max-h-screen flex flex-col justify-center items-center mt-[10%]">
      <h1 className="text-4xl">Create a new account!</h1>

      <form
        action={handleSignup}
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
        <input
          type="password"
          name="confirmPassword"
          className="w-full text-4xl outline-none bg-inherit border-b-4 focus:border-opacity-100 transition-all duration-300 border-transparent focus:border-cyan-400"
          placeholder="Confirm Password"
        />
        <AuthButton type="submit" buttonText="Sign Up" />
      </form>
      <div className="flex my-10">
        <p>{"Already have an account?"}</p>
        <Link href={RoutePaths.login} className="hover:underline decoration-cyan-300 underline-offset-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default page;
