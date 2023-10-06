import { ButtonHTMLAttributes, MouseEvent } from "react";

import style from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "default"
    | "secondary"
    | "outline-primary"
    | "outline-secondary";
  size?: "sm" | "md" | "lg";
  type?: "submit" | "button";
  id?: string;
  block?: true | false;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  variant,
  size = "md",
  type = "button",
  id,
  block = false,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const variantButton = variant ? `btn-${variant}` : "default";
  const btnBlock = block ? `block` : "";
  const sizeButton = size ? `btn-${size}` : "md";

  return (
    <button
      type={type}
      id={id}
      className={`${style.btn} ${style[sizeButton]} ${style[variantButton]} ${style[btnBlock]}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
