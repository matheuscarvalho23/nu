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
  AnnotationIcon,
  CardHeaderIcon,
} from './style';

export default function Main() {
  let offset = 0;
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

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 390 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 390 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 390],
                    outputRange: [-50, 0, 390],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <CardHeaderIcon>
                <Icon name="attach-money" size={26} color="#777" />
                <Title>Conta</Title>
              </CardHeaderIcon>
              <Icon name="visibility-off" size={26} color="#777" />
            </CardHeader>

            <CardContent>
              <Title>Saldo dispoinível</Title>
              <Description>R$ 568.968,78</Description>
            </CardContent>

            <CardFooter>
              <AnnotationIcon>
                <Icon name="verified-user" size={20} color="#999" />
              </AnnotationIcon>
              <Annotation>
                Transferência de R$ 1.500,00 recebida de Google Inc hoje às
                03:47h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
