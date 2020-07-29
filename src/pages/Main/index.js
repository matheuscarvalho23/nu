import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './style';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={26} color="#666" />
            <Icon name="visibility-off" size={26} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo dispoinível</Title>
            <Description>R$ 5.780,00</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Transferência de R$ 1.500,00 recebida de Google Inc hoje às 03:47h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
