import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Title } from '~/components/atoms';
import { ButtonContainer } from './styles';

type PlayButtonProps = {
  onPress?: () => void;
};

export const PlayButton: React.FC<PlayButtonProps> = ({ onPress }) => {
  const theme = useTheme();

  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <Title marginTop={2} marginLeft={4} font="bold" size={14} color="black">
        Assistir
      </Title>
    </ButtonContainer>
  );
};
