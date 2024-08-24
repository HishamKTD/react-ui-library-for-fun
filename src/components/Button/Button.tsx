import React, { ReactNode } from "react";
import "./Button.css";

export type ButtonProps = {
  children?: ReactNode;
  color?: string;
  bgColor?: string;
  fontSize?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  label?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        color: props?.color,
        backgroundColor: props?.bgColor,
        fontSize: props?.fontSize,
      }}
      onClick={props?.onClick}
      type={props?.type}
      disabled={props?.disabled}
      className={props?.className}
      aria-label={props?.label}
    >
      {props?.children}
    </button>
  );
};

export default Button;
