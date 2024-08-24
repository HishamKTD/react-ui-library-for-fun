import React from 'react';

import './Switch.css';
import { SwitchProps } from './Switch.types';

/**
 * A simple toggle switch component that renders a label and an input element.
 * It accepts a boolean prop and a style prop to customize its appearance.
 *
 * @param {SwitchProps} props - The props object containing the switch's properties.
 * @return {JSX.Element} The JSX element representing the toggle switch.
 */

const Switch = (props: SwitchProps) => {

    const {style, ...rest } = props

  return (
    <label className="echo-blade-ui-switch" htmlFor="toggle-switch" style={style}>
        <input type="checkbox" className='echo-blade-ui-switch-input' id="toggle-switch" {...rest} />
        <span className="echo-blade-ui-switch-slider"></span>
    </label>
  )
}

export default Switch