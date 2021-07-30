import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer } from './styles';

import { Ionicons } from '@expo/vector-icons';
import { Title } from '../../atoms/Title';
import { theme } from '../../../styles/theme';

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
