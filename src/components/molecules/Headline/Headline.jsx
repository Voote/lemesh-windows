import React from 'react';
import labels from 'assets/labels';
import styled from 'styled-components';

const StyledHeadline = styled.div`
  padding-top: 17vh; //27vh dla desktop
`;

const Cutoff = styled.h3`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.l}; // wieksze dla desktop
  padding: 1em;
  opacity: 90%;
  strong {
    font-family: 'Bodoni Moda', serif;
  }
`;

const Headline = () => (
  <StyledHeadline>
    <Cutoff>
      {labels.whiteCutoff1}
      <strong>{labels.whiteCutoffStrong}</strong>
      {labels.whiteCutoff2}
    </Cutoff>
  </StyledHeadline>
);

export default Headline;
