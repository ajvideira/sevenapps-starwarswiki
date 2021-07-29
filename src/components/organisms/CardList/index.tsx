import React from 'react';
import { FlatList } from 'react-native';
import Card from '../../molecules/Card';

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
  },
  {
    id: 1,
    image_url:
      'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125',
  },
];

export const CardList: React.FC = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
