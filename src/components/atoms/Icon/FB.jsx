import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';

const ColoredIcon = styled(FacebookIcon)`
  color: #4267b2;
  :hover {
    //Only desktop
    color: brown;
  }
`;

const IconFB = () => (
  <div>
    <ColoredIcon />
  </div>
);

export default IconFB;
