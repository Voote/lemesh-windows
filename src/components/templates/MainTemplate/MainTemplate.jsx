import React from 'react';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper = styled.div`
  background: url(IMG/SlidingSash01.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 12%;
  height: 85vh;
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
