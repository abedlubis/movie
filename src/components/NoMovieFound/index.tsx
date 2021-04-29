import React from 'react';

import CameraTripod from '../../assets/camera-tripod.svg';
import Image from '../UI/Image/Image';

const NoActivity: React.FC = () => {
  return (
    <>
      <Image
        src={CameraTripod}
        style={{ margin: '0 auto', marginTop: '98px' }}
        alt="no-activity"
        className="w64 h64"
      ></Image>
      <p
        style={{
          color: '#bababa',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '18px',
          textAlign: 'center',
        }}
      >
        No movie found
      </p>
    </>
  );
};

export default NoActivity;
