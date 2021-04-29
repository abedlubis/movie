import React from 'react';

import './Input.css';

interface IElementConfig {
  type: string;
  placeholder: string;
}

interface IInputProps {
  iconPosition: string;
  classes: string;
  invalid: boolean;
  shouldValidate: boolean;
  touched: boolean;
  label: string;
  elementConfig: IElementConfig;
  value: string;
  changed(e: React.ChangeEvent | React.FocusEvent): void;
  icon: string;
  elementType: string;
  name: string;
  autoComplete: string;
}
const input: React.FC<IInputProps> = (props) => {
  const inputClasses = ['InputElement', props.iconPosition, props.classes];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('Invalid');
  }

  return (
    <div className="Input">
      <label className="Input-label">{props.label}</label>
      <input
        key={props.name}
        autoComplete={props.autoComplete}
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        name={props.name}
        onChange={props.changed}
        onBlur={props.changed}
      />
      <img
        src={props.icon}
        className={'Input-icon ' + props.iconPosition}
        alt="icon"
      />
    </div>
  );
};

export default input;
