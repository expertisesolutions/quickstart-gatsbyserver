import React from 'react';

import { Limiter, Container, FormLogin } from './styles';

export default function RegisterForm() {
  return (
        <Limiter>
            <Container>
                <div className="boxLogin">
                    <FormLogin>
                        <span className="titlelogin">
                            Account Login
                        </span>

                        <span>
                            Username
                        </span>
                        <div>
                            <input/>
                            <span></span>
                        </div>

                        <span>
                            Password
                        </span>
                        <div>
                            <span>
                                <i></i>
                            </span>
                            <input/>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <input/>
                                <label>
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a>
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <div>
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
