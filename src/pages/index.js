import React from 'react';

import { navigate } from 'gatsby';

export default function Home() {
  return (
    <div>
      <table>
      <tr>
          <td>
            <button
              onClick={event => {
                event.preventDefault();
                navigate(
                  '/login/',
                );
              }}
            >
              Login
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={event => {
                event.preventDefault();
                navigate(
                  '/register/',
                );
              }}
            >
              Cadastro
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={event => {
                event.preventDefault();
                navigate(
                  '/forgotpass/',
                );
              }}
            >Esqueceu Senha</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>Outros</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
