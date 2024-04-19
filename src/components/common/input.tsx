import { FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const Input: FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  error,
  disabled,
  required,
  className,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`input-field ${className}`}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
