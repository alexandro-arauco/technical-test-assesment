import { InputHTMLAttributes } from "react";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  id?: string;
}

export function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  error,
  className = "",
  id = `checkbox-${Math.random().toString(36).substr(2, 9)}`,
}: CheckboxProps) {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className={`
            w-4 h-4 rounded
            border-gray-300
            text-blue-600
            focus:ring-blue-500
            disabled:opacity-50
            ${error ? "border-red-500" : ""}
          `}
        />
      </div>
      {label && (
        <div className="ml-3">
          <label
            htmlFor={id}
            className={`
              text-sm
              ${disabled ? "text-gray-400" : "text-gray-700"}
              ${error ? "text-red-500" : ""}
            `}
          >
            {label}
          </label>
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
      )}
    </div>
  );
} 