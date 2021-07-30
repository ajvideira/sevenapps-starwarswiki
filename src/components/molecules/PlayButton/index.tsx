import React from 'react';
import { ButtonContainer } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../styles/theme';
import { Title } from '../../atoms/Title';

type PlayButtonProps = {
  onPress?: () => void;
};

export const PlayButton: React.FC<PlayButtonProps> = ({ onPress }) => (
  <ButtonContainer>
    <Ionicons
      name="play"
      size={theme.metrics.px(16)}
      color={theme.colors.black}
    />
    <Title font="bold" size={14} color="black">
      Play
    </Title>
  </ButtonContainer>
);
