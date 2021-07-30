import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  ScreenScrollContainer,
} from '../../components/atoms/Container';
import { GoBack } from '../../components/atoms/GoBack';
import { Loader } from '../../components/atoms/Loader';
import { Title } from '../../components/atoms/Title';
import { GridList } from '../../components/organisms/GridList';
import { Hero } from '../../components/organisms/Hero';
import { Item } from '../../models';
import { useFavorites } from '../../services/hooks/useFavorites';
import { useDataStore } from '../../services/stores/dataStore';

type FavoritesProps = {
  navigation: NavigationProp<any, any>;
};

const Favorites: React.FC<FavoritesProps> = ({ navigation }) => {
  const { getFavorites } = useFavorites();
  const [favorites, setFavorites] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      (async () => {
        const data = await getFavorites();
        if (data instanceof Error) {
          Alert.alert('Error retrieving favorites. Reload app.');
          return;
        }
        setFavorites(data as Item[]);
        setLoading(false);
      })();
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <ScreenScrollContainer>
        <Loader />
      </ScreenScrollContainer>
    );
  }

  return (
    <ScreenScrollContainer withPadding>
      <Title font="bold" size={28} marginBottom={24}>
        Favoritos
      </Title>
      <GridList data={favorites} type="favorites" />
    </ScreenScrollContainer>
  );
};
export default Favorites;
