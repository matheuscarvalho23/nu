import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Container, TabsContainer, TabItem, TabText} from './style';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="user-follow" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="screen-smartphone" size={24} color="#FFF" />
          <TabText>Recarga de celular</TabText>
        </TabItem>

        <TabItem>
          <Icon name="vector" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="emotsmile" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="rocket" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <Icon name="list" size={24} color="#FFF" />
          <TabText>Ajustar Limite</TabText>
        </TabItem>

        <TabItem>
          <Icon name="energy" size={24} color="#FFF" />
          <TabText>Pagar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="question" size={24} color="#FFF" />
          <TabText>Me Ajuda</TabText>
        </TabItem>

        <TabItem>
          <Icon name="lock-open" size={24} color="#FFF" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>

        <TabItem>
          <Icon name="credit-card" size={24} color="#FFF" />
          <TabText>Cartão Virtual</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
