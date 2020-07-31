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
  NavItemIcon,
} from './style';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="http://www.facebook.com.br/matheus.h.carvalho"
          size={80}
          color="#81259d"
          backgroundColor="#fff"
        />
      </Code>

      <Nav>
        <NavItem onPress={() => {}}>
          <NavItemIcon>
            <Icon name="question" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </NavItemIcon>
          <Icon name="arrow-right" size={10} color="#fff" />
        </NavItem>

        <NavItem onPress={() => {}}>
          <NavItemIcon>
            <Icon name="user" size={20} color="#fff" />
            <NavText>Perfil</NavText>
          </NavItemIcon>
          <Icon name="arrow-right" size={10} color="#fff" />
        </NavItem>

        <NavItem onPress={() => {}}>
          <NavItemIcon>
            <Icon name="screen-smartphone" size={20} color="#fff" />
            <NavText>Configurações do app</NavText>
          </NavItemIcon>
          <Icon name="arrow-right" size={10} color="#fff" />
        </NavItem>

        <NavItem onPress={() => {}}>
          <NavItemIcon>
            <Icon name="home" size={20} color="#fff" />
            <NavText>Pedir conta PJ</NavText>
          </NavItemIcon>
          <Icon name="arrow-right" size={10} color="#fff" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
