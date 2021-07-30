import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { ScreenScrollContainer } from '../../components/atoms/Container';
import { GoBack } from '../../components/atoms/GoBack';
import { Input } from '../../components/atoms/Input';
import { Loader } from '../../components/atoms/Loader';
import { Title } from '../../components/atoms/Title';
import { GridList } from '../../components/organisms/GridList';
import { Hero } from '../../components/organisms/Hero';
import { Item } from '../../models';
import { api } from '../../services/api';
import { useFavorites } from '../../services/hooks/useFavorites';
import { useGetData } from '../../services/hooks/useGetData';
import { useDataStore } from '../../services/stores/dataStore';

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
      <GridList data={results} type="search" />
    </ScreenScrollContainer>
  );
};
export default Search;
