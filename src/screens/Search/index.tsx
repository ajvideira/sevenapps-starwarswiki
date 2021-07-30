import React from 'react';
import { ScreenScrollContainer } from '../../components/atoms/Container';
import { GoBack } from '../../components/atoms/GoBack';
import { Title } from '../../components/atoms/Title';
import { Hero } from '../../components/organisms/Hero';
import { useDataStore } from '../../services/stores/dataStore';

const Search: React.FC = () => {
  return (
    <ScreenScrollContainer>
      <Title>Tela de Pesquisa</Title>
    </ScreenScrollContainer>
  );
};
export default Search;
