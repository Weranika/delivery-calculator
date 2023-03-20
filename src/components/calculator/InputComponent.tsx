import { UseFormRegisterReturn } from 'react-hook-form';

interface IInputProps {
  label: string;
  type: string;
  id: string;
  ariaLabel: string;
  registerName: UseFormRegisterReturn;
  step: string;
  min: number | string;
  currency: string;
}

function InputComponent(props: IInputProps) {
  const {label, type, id, registerName, ariaLabel, step, min, currency} = props;

  return (
    <label className="form__label" htmlFor="value">
      <span className="label">{label}</span>
      <div className="input__value">
        <input
          type={type}
          id={id}
          aria-label={ariaLabel}
          {...registerName}
          required
          step={step}
          min={min}
        />
        <span className="currency">{currency}</span>
      </div>
    </label>
  );
}

export default InputComponent;
