import { ButtonHTMLAttributes } from "react";

/**
 * This file defines the props for the Button component.
 *
 * The Button component accepts all the props that the `button` element
 * accepts, as well as some additional props that are specific to the
 * Button component.
 *
 * The interface `ButtonProps` is used to define the props for the Button
 * component. This interface extends the `ButtonHTMLAttributes` interface
 * from the `@types/react` package, which defines the props that are
 * accepted by the `button` element.
 *
 * The `ButtonProps` interface adds some additional props that are specific
 * to the Button component. These props are:
 *
 * - `primary`: a boolean that indicates whether the button should have a
 *   primary style.
 *
 * - `backgroundColor`: a string that specifies the background color for
 *   the button.
 *
 * - `size`: a string that specifies the size of the button. This can be
 *   either "small", "medium", or "large".
 *
 * - `label`: a string that specifies the label for the button.
 *
 * - `onClick`: a function that is called when the button is clicked.
 *
 * The `ButtonProps` interface is used as the type for the `Button`
 * component's props.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
