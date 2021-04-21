import React from 'react';

import { Container, Limiter } from './styles';
import Private from '../../auth/privateComponent';
import Exemple from '../../components/exemple';

//Parts
import Header from '../../components/parts/header'
import Footer from '../../components/parts/footer'

export default function Page01() {
  return (
      <Limiter>
        <Container>
            <Header/>
              <Private component={Exemple}/>
            <Footer/>
        </Container>
      </Limiter>        
  );
}
