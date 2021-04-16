import React, {useState} from 'react';
import { navigate } from 'gatsby';

import { Containerheader, Limiter } from './styles';

import {FaCodepen, FaUserCircle} from 'react-icons/fa'
import {TiArrowSortedDown} from 'react-icons/ti'

export default function header() {

const [userMenu, setUserMenu] = useState(false)

function menuHeader() {
    return (
            <>
                {
                    userMenu? (
                        <ul className="dropheader">
                                <li><h1>Ricardo Campos</h1></li>
                                <li><p></p></li>
                                <li><a 
                                        onClick={event => {
                                            event.preventDefault();
                                            navigate(
                                                '/profile/',
                                            );
                                            }}
                                    >Perfil</a></li>
                                <li><a href="#">Outros</a></li>
                                <li><p></p></li>
                                <li><a href="#">Sair</a></li>
                        </ul>
                    )
                    : (
                        null
                    )
                }
            </>
        );
    }



  return (
      <Limiter>
        <Containerheader>
            <div className="containerlogo">
                <FaCodepen className="logoheader"/>
            </div>
            <div className="headerbody">
                <div className="itensheader">
                    <nav  className="navheader">
						<ul>
                            <li><a title="home"
                                    onClick={event => {
                                        event.preventDefault();
                                        navigate(
                                          '/home/',
                                        );
                                      }}
                                >Inicio</a></li>
							<li><a title="login"
                                    onClick={event => {
                                        event.preventDefault();
                                        navigate(
                                          '/login/',
                                        );
                                      }}
                                >Login</a></li>
							<li><a title="cadastro"
                                    onClick={event => {
                                        event.preventDefault();
                                        navigate(
                                          '/register/',
                                        );
                                      }}
                                >Cadastro</a></li>
							<li><a title="forgot"
                                    onClick={event => {
                                        event.preventDefault();
                                        navigate(
                                          '/forgotpass/',
                                        );
                                      }}
                                >Outros</a></li>
                            <li>
                                <div className="contuserheader">
                                    <FaUserCircle className="userheader"/>
                                    <a
                                        onClick={event => {
                                            event.preventDefault();
                                            setUserMenu(!userMenu)     
                                        }}     
                                    ><TiArrowSortedDown/></a>
                                </div>
                                {menuHeader()}
                            </li>
						</ul>
					</nav>
                </div>
            </div>
        </Containerheader>
      </Limiter>        
  );
}

/*


<li><a href="#">Home</a></li>
		<li><a href="#">Sobre</a></li>
	  		<li><a href="#">O que fazemos?</a>
	         	<ul>
	                  <li><a href="#">Web Design</a></li>
	                  <li><a href="#">SEO</a></li>
	                  <li><a href="#">Design</a></li>
	       		</ul>
			</li>
		<li><a href="#">Links</a></li>
<li><a href="#">Contato</a></li>


*/