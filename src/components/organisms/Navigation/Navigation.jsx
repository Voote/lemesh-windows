import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import HamburgerMenu from 'components/molecules/HamburgerMenu/HamburgerMenu';
import SocialMedia from 'components/molecules/SocialMedia/SocialMedia';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  background-color: #fff;
  width: 100%;
`;

const Navigation = () => (
  <Wrapper>
    <SocialMedia />
    <Logo />
    <HamburgerMenu />
  </Wrapper>
);

export default Navigation;
