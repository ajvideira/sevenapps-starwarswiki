import React from 'react';

import { Container } from '../../components/atoms/Container';
import Card from '../../components/molecules/Card';
import { CardList } from '../../components/organisms/CardList';

export default function Home() {
  return (
    <Container justify="center" align="center">
      <CardList />
    </Container>
  );
}
