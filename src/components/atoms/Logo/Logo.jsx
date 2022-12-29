import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.1em;
`;

const LogoPNG = styled.img`
  min-width: 9rem;
  max-width: 17rem;
  width: 50vw;
  margin: auto;
  align-self: center;
`;

const Logo = () => (
  <Wrapper>
    <LogoPNG src="IMG/LEMESH_LOGO_OFFICIAL.png" alt="Lemesh Windows logo" />
  </Wrapper>
);

export default Logo;
