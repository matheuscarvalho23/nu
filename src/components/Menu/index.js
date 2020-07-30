import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

// import logo from '~/assets/Nubank_Logo.png';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './style';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="http://www.facebook.com.br/matheus.h.carvalho"
          size={80}
          color="#81259d"
          backgroundColor="#fff"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="question" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="user" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="screen-smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>

        <NavItem>
          <Icon name="home" size={20} color="#fff" />
          <NavText>Pedir conta PJ</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
