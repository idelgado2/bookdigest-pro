import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}

// New ButtonNormal component
interface ButtonNormalProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ButtonNormal: React.FC<ButtonNormalProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-primary text-black font-semibold rounded-xl shadow-md hover:bg-primaryHover transition duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary: React.FC<ButtonNormalProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-secondary text-black font-semibold rounded-xl shadow-md hover:bg-secondaryHover transition duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};
