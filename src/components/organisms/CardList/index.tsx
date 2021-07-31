import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import { Item } from '~/models';
import { Text } from '~/components/atoms';
import { Card } from '~/components/molecules';
import { ListContainer } from './styles';

type CardListProps = {
  data: Item[];
  title: string;
};

export const CardList: React.FC<CardListProps> = ({ data, title }) => {
  const theme = useTheme();

  return (
    <ListContainer>
      <Text font="black" size={18} marginLeft={24}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingLeft: theme.metrics.px(24),
          paddingTop: theme.metrics.px(12),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  );
};
