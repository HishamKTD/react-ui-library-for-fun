import { InputHTMLAttributes } from "react";

/**
 * Omit the `type` property from the `InputHTMLAttributes<HTMLInputElement>`
 * interface since we don't want users to specify the `type` of the input
 * element (it should always be `checkbox`).
 */
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}
