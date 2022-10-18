import { InputMultiple, InputSingle } from 'components/molecules/Input/Input';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 1rem 7rem 1rem;
`;

const Label = styled.h1`
  text-align: center;
`;

const ContactForm = () => (
  <Wrapper>
    <Label>Get in touch</Label>
    <InputSingle labelName="Name" />
    <InputSingle labelName="E-mail" />
    <InputSingle labelName="Mobile Number" />
    <InputMultiple />
  </Wrapper>
);

export default ContactForm;
