import React from "react";
import "./Button.css";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
