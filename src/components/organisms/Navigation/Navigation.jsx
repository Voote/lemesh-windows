import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import HamburgerMenu from 'components/molecules/HamburgerMenu/HamburgerMenu';
import SocialMedia from 'components/molecules/SocialMedia/SocialMedia';

const Navigation = () => (
  <div style={{ display: 'flex', backgroundColor: '#fff' }}>
    <SocialMedia />
    <Logo />
    <HamburgerMenu />
  </div>
);

export default Navigation;
