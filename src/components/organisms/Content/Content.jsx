import React from 'react';
import styled from 'styled-components';
import AboutMe from '../AboutMe/AboutMe';
import ContactForm from '../ContactForm/ContactForm';

const Wrapper = styled.div`
  margin-top: 4vh; //25vh for desktop; 14vh under 380
`;

const Content = () => (
  <Wrapper>
    <AboutMe />
    <ContactForm />
  </Wrapper>
);

export default Content;
