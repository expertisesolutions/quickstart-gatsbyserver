import React from 'react';

import PropTypes from 'prop-types';

export default function RegistrationForm({ onSubmit }) {
  return <>
    <form name="registerForm">
      <label htmlFor="username">Username: </label><input type="text" name="username"/>
      <label htmlFor="password">Password: </label><input type="text" name="password"/>
    </form>
  </>;
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func,
};
