import React from 'react';

import './Label.css';

interface ILabelProps {
  className?: string;
  style?: React.CSSProperties;
  rounded?: boolean;
  bordered?: boolean;
  active?: boolean;
  clicked?: () => void;
}
const label: React.FC<ILabelProps> = (props) => {
  const classes = ['Label', props.className].join(' ');

  return (
    <div
      className={[
        classes,
        props.rounded ? 'rounded' : '',
        props.bordered ? 'bordered' : '',
        props.active ? 'active' : '',
      ].join(' ')}
      style={props.style}
      onClick={props.clicked}
    >
      {props.children}
    </div>
  );
};

export default label;
