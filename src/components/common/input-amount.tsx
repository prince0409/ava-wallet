import { FC } from "react";

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  balance?: string;
}

const InputAmount: FC<InputProps> = ({
  label,
  name,
  placeholder,
  disabled,
  required,
  className,
  balance,
}) => {
  return (
    <div className="input-wrapper">
      <div className="label-wrapper">
        <label htmlFor={label} className="label">
          {label}
        </label>
        <span className="balance-label">Balance: {balance || 0} USDC</span>
      </div>
      <div className="input-field-wrapper">
        <span className="coin-icon"> U </span>
        <span className="coin-label">USDC</span>
        <input
          type="number"
          id={label}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`input-field ${className}`}
          step=".01"
        />
      </div>
    </div>
  );
};

export default InputAmount;
