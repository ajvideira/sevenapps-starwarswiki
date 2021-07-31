import React from 'react';

import { useDataStore } from '~/services/stores/dataStore';
import { GoBack, Hero, ScreenScrollContainer, Text } from '~/components';

const Detail: React.FC = () => {
  const { selectedData } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text marginLeft={24} size={18}>
        Descrição
      </Text>
      <Text
        marginTop={12}
        marginLeft={24}
        marginRight={24}
        marginBottom={24}
        size={14}
        lineHeight={20}
      >
        {selectedData.description}
      </Text>
      <GoBack />
    </ScreenScrollContainer>
  );
};
export default Detail;
