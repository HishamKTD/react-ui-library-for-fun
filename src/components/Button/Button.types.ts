import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bgColor?: string;
  fontSize?: string;
}
