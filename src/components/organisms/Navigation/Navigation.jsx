import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import SocialMedia from 'components/molecules/SocialMedia/SocialMedia';
import HamburgerMenu from 'components/molecules/HamburgerMenu/HamburgerMenu';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100vw;
  background-color: #fff;
  z-index: 7;
`;

const Navigation = () => (
  <Wrapper>
    <SocialMedia />
    <Logo />
    <HamburgerMenu />
  </Wrapper>
);

export default Navigation;
