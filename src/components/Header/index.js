import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import logo from '~/assets/Nubank_Logo.png';

import {Container, Top, Logo, Title} from './style';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Matheus</Title>
      </Top>
      <Icon name="arrow-down" size={20} color="#A0A0A0" />
    </Container>
  );
}
