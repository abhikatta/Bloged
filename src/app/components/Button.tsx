"use client";

import { ButtonHTMLAttributes, FC } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const AuthButton: FC<ButtonProps> = ({ buttonText, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className=" w-[95%] disabled:cursor-not-allowed mt-5 hover:bg-cyan-400 rounded-lg py-2 hover:text-black hover:w-full text-2xl bg-inherit transition-all duration-300"
      disabled={pending}
    >
      {pending ? "Loading..." : buttonText}
    </button>
  );
};

export default AuthButton;
