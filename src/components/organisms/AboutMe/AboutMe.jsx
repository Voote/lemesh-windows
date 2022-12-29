import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  margin-top: 14vh; //25vh for desktop; 14vh under 380
  padding: 0.1rem 1rem 2rem 1rem;
  h1 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
`;

const AboutMe = () => (
  <Wrapper>
    <h1>Section</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis
      egestas sed tempus urna et. Non nisi est sit amet. Nisl nisi scelerisque eu
      ultrices vitae auctor eu. Lorem sed risus ultricies tristique nulla aliquet
      enim. Felis eget velit aliquet sagittis id consectetur purus ut. Diam volutpat
      commodo sed egestas egestas fringilla phasellus faucibus.
    </p>
  </Wrapper>
);

export default AboutMe;
