import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { ButtonContainer } from './styles';
import { Title } from '~/components/atoms';

type IconButtonProps = {
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  onPress?: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  label,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Title font="semiBold" size={10} marginTop={6}>
        {label}
      </Title>
    </ButtonContainer>
  );
};
