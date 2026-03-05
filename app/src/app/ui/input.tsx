import React from "react";
import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
  containerClassName?: string;
};

export default function Input({
  label,
  required,
  containerClassName,
  className,
  ...rest
}: InputProps) {
  return (
    <div className={clsx("w-full", containerClassName)}>
      {label && (
        <label className="block mb-1 font-medium text-sm">
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </label>
      )}
      <input
        {...rest}
        className={clsx(
          "px-2 border-2 border-amber-600 rounded-md outline-none w-full h-10 text-sm",
          className,
        )}
      />
    </div>
  );
}
