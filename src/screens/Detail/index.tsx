import React from 'react';

import { useDataStore } from '~/services/stores/dataStore';
import { GoBack, Hero, ScreenScrollContainer, Title } from '~/components';

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
