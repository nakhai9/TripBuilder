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
        "flex items-center justify-center rounded-full p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        active ? "bg-amber-50 text-amber-600" : "bg-slate-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

