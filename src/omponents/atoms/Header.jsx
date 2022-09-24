import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: large;
`;

const Beige = styled.h2`
  background-color: beige;
`;

const Header = () => (
  <StyledHeader>
    <h1>Hello World</h1>
    <Beige>Hello World in beige</Beige>
  </StyledHeader>
);

export default Header;
