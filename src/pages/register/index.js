import React from 'react';

import { Container } from './styles';
import { RegistrationForm } from 'components/forms/RegistrationForm';

export default function Register() {
  function onSubmit() {
    console.log('submit');
  }

  return (
    <Container>
      <h1>Register</h1>
      <RegistrationForm
        onSubmit={ onSubmit }
      />
    </Container>
  );
}
