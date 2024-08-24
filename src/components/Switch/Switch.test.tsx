import React from "react";
import { render } from "@testing-library/react";

import Switch from "./Switch";

/**
 * These tests verify that the Switch component renders as expected.
 *
 * The first test is a smoke test that makes sure the component renders
 * without crashing when given some minimal props.
 *
 * Future tests could inspect the rendered component more closely, e.g.
 * by checking that the proper class names are used, or that the component
 * responds properly to user input.
 */

describe("Switch", () => {
    test("renders the Switch component", () => {
        render(<Switch>Hello world!</Switch>);
    });
})