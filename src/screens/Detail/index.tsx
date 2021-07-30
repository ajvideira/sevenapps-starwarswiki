import React from 'react';
import { ScreenScrollContainer } from '../../components/atoms/Container';
import { GoBack } from '../../components/atoms/GoBack';
import { Hero } from '../../components/organisms/Hero';
import { useDataStore } from '../../services/stores/dataStore';

const Detail: React.FC = () => {
  const { selectedData } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail={true} />
      <GoBack />
    </ScreenScrollContainer>
  );
};
export default Detail;
