import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: "text" | "email" | "password" | "number";
  id: string;
}

export function Input({
  label,
  error,
  type = "text",
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`
          w-full
          px-4
          py-2
          rounded-lg
          border
          border-gray-300
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          outline-none
          transition-colors
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
