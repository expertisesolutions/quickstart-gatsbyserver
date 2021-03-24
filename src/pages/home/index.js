import React from 'react';

import { Container } from './styles';
import Private from '../../auth/privateComponent'
import Teste from '../../components/teste'

export default function Page01() {
  return (
        <Container>
            <Private component={Teste}/>
        </Container>
  );
}
