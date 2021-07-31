import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Item } from '~/models';
import { useDataStore } from '~/services/stores/dataStore';
import { CardContainer, CardImage } from './styles';

const sizes: { [key: string]: { width: number; height: number } } = {
  small: {
    height: 124,
    width: 88,
  },
  large: {
    height: 150,
    width: 102,
  },
};

type CardProps = {
  item: Item;
  size?: keyof typeof sizes;
};

export const Card: React.FC<CardProps> = ({ item, size }) => {
  const navigation = useNavigation();
  const { setSelectedData } = useDataStore();

  function handlePressCard() {
    setSelectedData(item);
    navigation.navigate('Detail');
  }

  return (
    <CardContainer onPress={handlePressCard} size={sizes[size || 'small']}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};
