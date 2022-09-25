import React from 'react';
import Header from '../../atoms/Header/Header';
import Navigation from '../../organisms/Navigation/Navigation';
// import Header from 'atoms/Header/Header';
// import Navigation from 'organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => (
  <div>
    <Navigation />
    <Header />
    {children}
  </div>
);

export default MainTemplate;
