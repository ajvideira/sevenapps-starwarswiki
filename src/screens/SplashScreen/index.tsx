import React from 'react';
import { Logo } from '../../components/atoms/Logo';
import { Title } from '../../components/atoms/Title';
import { Container } from '../../components/atoms/Container';
import { NavigationProp } from '@react-navigation/native';
import { useEffect } from 'react';

type SplashScreenProps = {
  navigation: NavigationProp<any, any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <Container justify="center" align="center">
      <Logo />
      <Title font="bold" size={24} marginTop={12}>
        StarWars - Wiki
      </Title>
    </Container>
  );
};

export default SplashScreen;
