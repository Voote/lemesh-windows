import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: large;
`;

const Beige = styled.h2`
  background-color: #f5f5dc;
`;

const Cutoff = styled.h1`
  background-color: white;
  padding: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <Beige>Hello World in beige</Beige>
    <Cutoff>White Cutoff</Cutoff>
  </StyledHeader>
);

export default Header;
