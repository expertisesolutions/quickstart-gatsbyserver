import React from 'react';

import { Limiter, Container, FormLogin, InputLogin } from './styles';

export default function RegisterForm() {
  return (
        <Limiter>
            <Container>
                <div className="boxLogin">
                    <FormLogin>
                        <span className="titlelogin">
                            Login
                        </span>

                        <span className="captionlogin">
                            Nome de usuário
                        </span>
                        <InputLogin data-validate = "Nome requerida">
                            <input type="text" name="username"/>
                            <span className="focuslogin"></span>
                        </InputLogin>

                        <span className="captionlogin">
                            Senha
                        </span>
                        <InputLogin data-validate = "Senha requerida">
                            <span>
                                <i></i>
                            </span>
                            <input type="password" name="pass"/>
                            <span className="focuslogin"></span>
                        </InputLogin>
                        <div className="flexLogin">
                            <div>
                                <input className="checkboxlogin" type="checkbox" id="remember" name="remember-me"/>
                                <label htmlFor="remember">
                                    Manter-me conectado
                                </label>
                            </div>
                            <div>
                                <a>
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div className="conteinerbuttonlogin">
                            <button>
                                Login
                            </button>
                        </div>
                    </FormLogin>
                </div>
            </Container>
        </Limiter>
  );
}
