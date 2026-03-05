import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Button({
  children,
  className,
  variant = "primary",
  leftIcon,
  rightIcon,
  type = "button",
  ...rest
}: ButtonProps) {
  const baseClass =
    "flex items-center cursor-pointer gap-2 px-4 rounded-md h-8 md:h-10 text-xs md:text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClass =
    variant === "primary"
      ? "bg-amber-600 hover:bg-amber-500 text-white"
      : "border border-amber-600 text-amber-600 hover:bg-amber-50";

  return (
    <button
      type={type}
      {...rest}
      className={clsx(baseClass, variantClass, className)}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children && <span className="flex items-center">{children}</span>}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}
