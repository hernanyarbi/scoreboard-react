import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  full?: boolean
}

export const Button = ({ children, full, ...props }: ButtonProps) => {
  return (
    <button className={`py-1.5 px-6 h-fit rounded-xl text-lg bg-accent font-semibold text-white hover:opacity-75 cursor-pointer ${full ? 'w-full': ''}`} {...props}>{children}</button>
  );
};
