import React from 'react';
import './Button.css';
import { ButtonProps } from './Button.types';

/**
 * A reusable Button component that renders a basic button element.
 *
 * @param {ButtonProps} props - The props to be applied to the button element.
 * @return {JSX.Element} The rendered button element.
 */

const Button = (props: ButtonProps) => {
  const { size, className, ...rest } = props;

  const sizeClass = size ? `echo-blade-ui-button-${size}` : '';

  return (
    <button
      className={`echo-blade-ui-button ${sizeClass} ${className}`}
      {...rest}
    />
  );
};

export default Button;
