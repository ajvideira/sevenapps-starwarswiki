import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { GoBackContainer } from './styles';

export const GoBack = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
      />
    </GoBackContainer>
  );
};
