import React from 'react';
import { ScreenScrollContainer } from '../../components/atoms/Container';
import { GoBack } from '../../components/atoms/GoBack';
import { Title } from '../../components/atoms/Title';
import { Hero } from '../../components/organisms/Hero';
import { useDataStore } from '../../services/stores/dataStore';

const Detail: React.FC = () => {
  const { selectedData } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Title marginLeft={24} size={18}>
        Descrição
      </Title>
      <Title
        marginTop={12}
        marginLeft={24}
        marginRight={24}
        size={14}
        lineHeight={20}
      >
        {selectedData.description}
      </Title>
      <GoBack />
    </ScreenScrollContainer>
  );
};
export default Detail;
