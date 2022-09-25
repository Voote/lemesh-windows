import React from 'react';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper = styled.div`
  background: url(IMG/SlidingSash1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 25%;
  height: 75vh;
  /* if width < 375px zwiekszyc szerokosc do 105vw */
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Header />
    {children}
  </Wrapper>
);

export default MainTemplate;
