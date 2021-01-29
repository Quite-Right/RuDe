import React from 'react'

type ButtonFillType = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";
interface Props {
  children: React.ReactNode;
  fillType?: ButtonFillType;
  disabled?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  className?: string;
  type?: ButtonType;
}

const Button = ({ children, fillType = "primary", disabled, onClick, className, type="button" }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`button button_${fillType} ${className ? className : ""}`} type={type}>
      {children}
    </button>
  )
}

export default Button
