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
  margin-top: 9rem; // 7rem if under 380
  /* if width < 375px increace  105vw */
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Headline />
    {children}
  </Wrapper>
);

export default MainTemplate;
