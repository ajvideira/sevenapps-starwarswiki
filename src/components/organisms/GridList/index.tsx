import React from 'react';
import { FlatList } from 'react-native';

import { Item } from '~/models';
import { Container, Text } from '~/components/atoms';
import { Card } from '~/components/molecules';
import { NoDataImage, SeparatorView } from './styles';
import emptyResultSearchImage from '~/assets/empty-result-search.png';
import emptyFavorites from '~/assets/empty-favorites.png';

type GridListProps = {
  data: Item[];
  type?: 'favorites' | 'search';
  loading: boolean;
};

export const GridList: React.FC<GridListProps> = ({
  data,
  type,
  loading = false,
}) => {
  return (
    <FlatList
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" item={item} />}
      keyExtractor={(item) => `${item.type}-${item.id}`}
      ItemSeparatorComponent={() => <SeparatorView />}
      refreshing={loading}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" height={500}>
          <NoDataImage
            resizeMode="contain"
            source={
              type === 'favorites' ? emptyFavorites : emptyResultSearchImage
            }
          />
          <Text font={'semiBold'} size={14} marginTop={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado`}
          </Text>
        </Container>
      )}
    />
  );
};
