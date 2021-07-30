import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Item } from '../../../models';
import { useDataStore } from '../../../services/stores/dataStore';
import { CardContainer, CardImage } from './styles';

type CardProps = {
  item: Item;
};

const Card: React.FC<CardProps> = ({ item }) => {
  const navigation = useNavigation();
  const { setSelectedData } = useDataStore();

  function handlePressCard() {
    setSelectedData(item);
    navigation.navigate('Detail');
  }

  return (
    <CardContainer onPress={handlePressCard}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};

export default Card;
