import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

const IconIG = () => (
  <div>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={0} y1={1} x2={1} y2={0}>
        <stop offset={0} stopColor="#405de6" />
        <stop offset={1} stopColor="#fd1d1d" />
      </linearGradient>
    </svg>
    <InstagramIcon sx={{ fill: 'url(#linearColors)' }} />
  </div>
);

export default IconIG;
