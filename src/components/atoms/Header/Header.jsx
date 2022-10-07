import React from 'react';
import labels from 'assets/labels';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding-top: 27vh;
`;

const Cutoff = styled.h3`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.l}; // wieksze dla desktop
  padding: 1rem;
  opacity: 90%;
  strong {
    font-family: 'Bodoni Moda', serif;
  }
`;

const Header = () => (
  <StyledHeader>
    <Cutoff>
      {labels.whiteCutoff1}
      <strong>{labels.whiteCutoffStrong}</strong>
      {labels.whiteCutoff2}
    </Cutoff>
  </StyledHeader>
);

export default Header;
