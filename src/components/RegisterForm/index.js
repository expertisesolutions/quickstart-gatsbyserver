import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';

// styles
import {
  Limiter, Container, FormLogin, InputLogin
} from './styles';

export default function RegisterForm() {
  const [pageRegister, setPageRegister] = useState(false);
  const [nameRegister, setNameRegister] = useState('');
  const [lastnameRegister, setLastnameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [telRegister, setTelRegister] = useState('');
  const [passRegister, setPassRegister] = useState('');
  const [passConfirmRegister, setPassConfirmRegister] = useState('');
  const [buttonConfirm, setButtonConfirm] = useState(true);
  // const []

  // clear the forms if the page is recharged
  useEffect(() => {
    clearRegister();
  }, []);

  // clear the forms function
  function clearRegister() {
    setNameRegister('');
    setLastnameRegister('');
    setEmailRegister('');
    setTelRegister('');
    setPassRegister('');
    setPassConfirmRegister('');
  }

  // tells whether passwords match
  function passConfirm() {
    if (passConfirmRegister) {
      if (!passRegister.includes(passConfirmRegister)) {
        return ('As senhas não correspondem');
      } else {
        return (null);
      }
    } else {
      return (null);
    }
  }

  function register() {
    if (!pageRegister) {
      return (
                <FormLogin>
                    <span className="titlelogin">
                        Informe seus dados:
                    </span>

                    <span className="captionlogin">
                        Informe seu nome
                    </span>
                    <InputLogin>
                        <input
                            type="text"
                            name="username"
                            value={nameRegister}
                            onChange={e => setNameRegister(e.target.value)}
                        />
                        <span className="focuslogin"></span>
                    </InputLogin>
                    <span className="captionlogin">
                        Informe seu sobrenome
                    </span>
                    <InputLogin>
                        <input
                            type="text"
                            name="lastname"
                            value={lastnameRegister}
                            onChange={e => setLastnameRegister(e.target.value)}
                        />
                        <span className="focuslogin"></span>
                    </InputLogin>
                    <span className="captionlogin">
                        Informe seu e-mail
                    </span>
                    <InputLogin>
                        <input
                            type="email"
                            name="email"
                            value={emailRegister}
                            onChange={e => setEmailRegister(e.target.value)}
                        />
                        <span className="focuslogin"></span>
                    </InputLogin>
                    <span className="captionlogin">
                        Informe seu telefone
                    </span>
                    <InputLogin>
                        <input
                            type="tel"
                            name="tel"
                            value={telRegister}
                            onChange={e => setTelRegister(e.target.value)}
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
                              setPageRegister(true);
                            }}
                        >
                            Continuar
                        </button>
                    </div>
                </FormLogin>
      );
    } else {
      return (
                <FormLogin>
                    <span className="titlelogin">
                        Informe uma senha
                    </span>

                    <span className="captionlogin">
                        Informe uma senha com letras e numeros
                    </span>
                    <InputLogin>
                        <input
                            type="password"
                            name="pass"
                            value={passRegister}
                            onChange={e => setPassRegister(e.target.value)}
                        />
                        <span className="focuslogin"></span>
                    </InputLogin>
                    <span className="captionlogin">
                        Repita a senha
                    </span>
                    <span className="captionlogin-2">
                        {passConfirm()}
                    </span>
                    <InputLogin>
                        <input
                            type="password"
                            name="confirmPass"
                            value={passConfirmRegister}
                            onChange={e => setPassConfirmRegister(e.target.value)}
                        />
                        <span className="focuslogin"></span>
                    </InputLogin>
                        <div className="conteinerbuttonlogin">
                            <button
                                onClick={event => {
                                  event.preventDefault();
                                  setPageRegister(false);
                                }}
                            >
                                Voltar
                            </button>
                            {confirm()}
                        </div>
                </FormLogin>
      );
    }
  }

  function confirm() {
    return (
            <>
                {
                    buttonConfirm
                      ? (
                        <button
                            onClick={event => {
                              event.preventDefault();
                              setButtonConfirm(false);
                            }}
                        >
                            Confirmar
                        </button>
                        )
                      : (
                        <button
                            disabled
                            className="buttonfalse"
                        >
                            ConfirmarFalse
                        </button>
                        )
                }
            </>
    );
  }

  return (
        <Limiter>
            <Container>
                <div className="boxLogin">
                    {register()}
                </div>
            </Container>
        </Limiter>
  );
}
