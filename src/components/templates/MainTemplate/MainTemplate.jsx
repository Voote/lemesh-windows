import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import Headline from 'components/molecules/Headline/Headline';

const Wrapper = styled.div`
  background: url(IMG/SlidingSash01.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 10%;
  height: 85vh;
  /* if width < 375px zwiekszyc szerokosc do 105vw */
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Headline />
    {children}
  </Wrapper>
);

export default MainTemplate;
