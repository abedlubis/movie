import React from 'react';

import './Image.css';

interface IImageProps {
  alt: string;
  src: string;
  className?: string;
  style?: React.CSSProperties;
  rounded?: boolean;
  bordered?: boolean;
  circular?: boolean;
  onClick?(): void;
}
const image: React.FC<IImageProps> = (props) => {
  const classes = ['Image', props.className].join(' ');

  return (
    <div
      className={['image-wrapper', props.className].join(' ')}
      style={props.style}
    >
      <img
        src={props.src}
        className={[
          classes,
          props.circular ? 'circular' : '',
          props.rounded ? 'rounded' : '',
          props.bordered ? 'bordered' : '',
        ].join(' ')}
        alt={props.alt}
        onClick={props.onClick}
      />
    </div>
  );
};

export default image;
