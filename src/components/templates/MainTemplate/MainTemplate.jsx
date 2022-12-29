import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import Headline from 'components/molecules/Headline/Headline';

const Wrapper = styled.div`
  background: url(IMG/SlidingSash01.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 48%;
  height: 50vh;
  margin-top: 9rem;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Headline />
    {children}
  </Wrapper>
);

export default MainTemplate;
