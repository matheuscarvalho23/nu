import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
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
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  // function onHandlerStateChange(event) {}

  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={() => {}}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={26} color="#666" />
              <Icon name="visibility-off" size={26} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>Saldo dispoinível</Title>
              <Description>R$ 568.968,78</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$ 1.500,00 recebida de Google Inc hoje às
                03:47h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs />
    </Container>
  );
}
