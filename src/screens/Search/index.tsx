import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { GridList, Input, ScreenScrollContainer, Title } from '~/components';
import { Item } from '~/models';
import { useGetData } from '~/services/hooks/useGetData';

type SearchProps = {
  navigation: NavigationProp<any, any>;
};

const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const { getSearchResult } = useGetData();

  useEffect(() => {
    (async () => {
      if (query.length > 0) {
        setLoading(true);
        const data = await getSearchResult(query);
        if (data instanceof Error) {
          Alert.alert('Error searching results. Reload app.');
          return;
        }
        setResults(data as Item[]);
        setLoading(false);
      } else {
        setResults([]);
      }
    })();
  }, [query]);

  return (
    <ScreenScrollContainer withPadding>
      <Title font="bold" size={28} marginBottom={24}>
        Pesquisar
      </Title>
      <Input
        placeholder="Título ou subtítulo do filme ou personagem"
        value={query}
        onChangeText={setQuery}
        marginBottom={24}
      />
      <GridList data={results} type="search" loading={loading} />
    </ScreenScrollContainer>
  );
};
export default Search;
