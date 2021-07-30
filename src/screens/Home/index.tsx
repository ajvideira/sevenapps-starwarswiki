import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  ScreenScrollContainer,
} from '../../components/atoms/Container';
import { Loader } from '../../components/atoms/Loader';
import Card from '../../components/molecules/Card';
import { CardList } from '../../components/organisms/CardList';
import { Hero } from '../../components/organisms/Hero';
import { Item, ItemType } from '../../models';
import { useGetData } from '../../services/hooks/useGetData';

export default function Home() {
  const { getFilms, getCharacters } = useGetData();
  const [films, setFilms] = useState<Item[]>([]);
  const [characters, setCharacters] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const dataFilms = await getFilms();
      const dataCharacters = await getCharacters();

      if (dataFilms instanceof Error || dataCharacters instanceof Error) {
        Alert.alert('Error retrivieng data. Reload the app.');
        return;
      }

      setFilms(dataFilms);
      setCharacters(dataCharacters);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    );
  }

  return (
    <ScreenScrollContainer justify="flex-start" align="flex-start">
      <Hero item={films[0]} />
      <CardList title="Filmes" data={films} />
      <CardList title="Personagens" data={characters} />
    </ScreenScrollContainer>
  );
}
