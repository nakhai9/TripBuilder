import React from "react";
import clsx from "clsx";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export default function IconButton({
  className,
  active,
  type = "button",
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      className={clsx(
        "flex justify-center items-center disabled:opacity-50 p-1 rounded-full cursor-pointer disabled:cursor-not-allowed",
        active ? "bg-amber-50 text-amber-600" : "",
        className,
      )}
    >
      {children}
    </button>
  );
}
