import React from 'react'

type ButtonType = "primary" | "secondary";

interface Props {
  children: React.ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  className?: string;
}

const Button = ({ children, type = "primary", disabled, onClick, className }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`button button_${type} ${className ? className : ""}`}>
      {children}
    </button>
  )
}

export default Button
