import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Logo } from '../../components/atoms/Logo';
import { Title } from '../../components/atoms/Title';

import { Container } from './styles';

export default function SplashScreen() {
  return (
    <Container>
      <Logo />
      <Title>StarWars - Wiki</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
