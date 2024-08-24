/**
 * This file re-exports the Button component from ./Button.tsx, so that
 * users can import it from the root of the library, e.g.:
 *
 * import { Button } from 'echo-blade-ui';
 *
 * This is useful for users who don't want to import each component
 * individually, e.g.:
 *
 * import { Button, Switch } from 'echo-blade-ui/components';
 *
 * It's also useful for users who are using a bundler like Webpack or
 * Rollup, as it allows them to import components without having to
 * know the exact path to each component.
 */

export { default } from "./Button";
export type { ButtonProps } from "./Button.types";