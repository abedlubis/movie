import React from 'react';

import './Button.css';

interface IButtonProps {
  btnType?: string;
  disabled?: boolean;
  clicked?(e: React.MouseEvent<HTMLButtonElement>): void;
}

const button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={['Button', props.btnType].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
