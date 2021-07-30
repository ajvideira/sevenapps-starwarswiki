import React from 'react';
import { FlatList } from 'react-native';
import { Item } from '../../../models';
import { theme } from '../../../styles/theme';
import { Title } from '../../atoms/Title';
import Card from '../../molecules/Card';
import { ListContainer } from './styles';

type CardListProps = {
  data: Item[];
  title: string;
};

export const CardList: React.FC<CardListProps> = ({ data, title }) => {
  return (
    <ListContainer>
      <Title font="black" size={18} marginLeft={24}>
        {title}
      </Title>
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
