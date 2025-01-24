import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  full?: boolean
}

export const Button = ({ children, full, ...props }: ButtonProps) => {
  return (
    <button className={`p-1 px-5 h-fit rounded-xl bg-accent font-semibold text-white hover:opacity-75 cursor-pointer ${full ? 'w-full': ''}`} {...props}>{children}</button>
  );
};
