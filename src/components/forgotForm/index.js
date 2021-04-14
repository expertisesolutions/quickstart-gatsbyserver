import React, { useState } from 'react';

// styles
import {
  Limiter, Container, FormLogin, InputLogin
} from './styles';

import { navigate } from 'gatsby';

export default function ForgotPass() {
  const [emailForgot, setEmailForgot] = useState('');
  return (
        <Limiter>
            <Container>
                <div className="boxLogin">
                <FormLogin>
                    <span className="titlelogin">
                        Recuperar senha
                    </span>

                    <span className="captionlogin">
                        Informe seu E-mail
                    </span>
                    <InputLogin>
                        <input
                            type="email"
                            name="emailforgot"
                            value={emailForgot}
                            onChange={e => setEmailForgot(e.target.value)}
                        />
                        <span className="focuslogin"></span>
                    </InputLogin>
                        <div className="conteinerbuttonlogin">
                            <button
                                onClick={event => {
                                  event.preventDefault();
                                  navigate(
                                    '/login/',
                                  );
                                }}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={event => {
                                  event.preventDefault();
                                  navigate(
                                    '/login/',
                                  );
                                }}
                            >
                                Recuperar
                            </button>
                        </div>
                </FormLogin>
                </div>
            </Container>
        </Limiter>
  );
}
