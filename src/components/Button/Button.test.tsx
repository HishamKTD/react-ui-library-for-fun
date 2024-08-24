import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

/**
 * This file contains tests for the Button component.
 *
 * The Button component is a reusable React component that can be used to
 * render a button element with a label.
 *
 * The first test is a smoke test that makes sure the component renders
 * without crashing when given some minimal props.
 *
 * Future tests could inspect the rendered component more closely, e.g.
 * by checking that the proper class names are used, or that the component
 * responds properly to user input.
 */

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button>Hello world!</Button>);
  });
});
