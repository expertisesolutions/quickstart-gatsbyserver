import React from 'react';

//styles
import { 
    Limiter, Container, FormLogin, InputLogin, InputButton
 } from './styles';

 import {FaFacebookSquare} from 'react-icons/fa'
 
export default function RegisterForm() {
  return (
        <Limiter>
            <Container>
                <div className="boxLogin">
                    <FormLogin>
                        <span className="titlelogin">
                            Login
                        </span>
                        <InputButton>
                            <a className="buttonFacebook" href="#">
                                <FaFacebookSquare className="iconlogin"/>
                                Entrar com Facebook
                            </a>
                        </InputButton>
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
                            <div className="remember">
                                <input className="checkboxlogin" type="checkbox" id="remember" name="remember-me"/>
                                <label htmlFor="remember">
                                    Manter-me conectado
                                </label>
                            </div>
                            <div>
                                <a href="#">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div className="conteinerbuttonlogin">
                            <button>
                                Login
                            </button>
                        </div>
                        <InputLogin/>
                        <div className="flexLogin">
                            <a href="#">
                               Ainda não é cadastrado ?  <strong>Cadastrar-se</strong>
                            </a>
                        </div>
                    </FormLogin>
                </div>
            </Container>
        </Limiter>
  );
}


