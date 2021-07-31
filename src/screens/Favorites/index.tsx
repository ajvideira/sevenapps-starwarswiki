import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { GridList, Loader, ScreenScrollContainer, Title } from '~/components';
import { Item } from '~/models';
import { useFavorites } from '~/services/hooks/useFavorites';

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
      <GridList data={favorites} type="favorites" loading={loading} />
    </ScreenScrollContainer>
  );
};
export default Favorites;
