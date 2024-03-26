import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          "bg-blue-500 hover:bg-blue-600 text-white text-lg py-0.5 px-4 rounded-md",
          className
        )
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
