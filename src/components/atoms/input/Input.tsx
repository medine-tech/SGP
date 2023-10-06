import styleInput from "./input.module.scss";
import { useState } from 'react';

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "number" | "password";
  required?: boolean;
}

export const Input = ({ name, label, type = "text" }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styleInput["form-control"]}>
      <label htmlFor={name} className={styleInput["label-input"]}>
        {label}
      </label>
      <input
        className={`${styleInput["text-input"]}`}
        type={type}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};