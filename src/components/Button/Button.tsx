import React from "react";
import "./Button.css";

export type ButtonProps = {
  label?: string;
};

const Button = (props: ButtonProps) => {
  return <button>{props?.label}</button>;
};

export default Button;
