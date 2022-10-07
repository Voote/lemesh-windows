import React from 'react';
import IconFB from 'components/atoms/Icon/FB';
import IconIG from 'components/atoms/Icon/IG';

const SocialMedia = () => (
  <div
    style={{
      display: 'flex',
      position: 'absolute',
      top: '2vh',
      left: '2vh',
    }}
  >
    <IconIG />
    <IconFB />
  </div>
);

export default SocialMedia;
