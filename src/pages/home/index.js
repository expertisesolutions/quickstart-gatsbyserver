import React from 'react';

import { Container } from './styles';
import Private from '../../auth/privateComponent'
import Exemple from '../../components/exemple'

export default function Page01() {
  return (
        <Container>
            <Private component={Exemple}/>
        </Container>
  );
}
