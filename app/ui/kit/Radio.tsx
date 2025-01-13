interface RadioProps {
  label?: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  error,
  className = '',
}: RadioProps) {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-4 h-4
            border-gray-300
            text-blue-600
            focus:ring-blue-500
            disabled:opacity-50
            ${error ? 'border-red-500' : ''}
          `}
        />
      </div>
      {label && (
        <div className="ml-3">
          <label className={`
            text-sm
            ${disabled ? 'text-gray-400' : 'text-gray-700'}
            ${error ? 'text-red-500' : ''}
          `}>
            {label}
          </label>
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
        </div>
      )}
    </div>
  );
} 