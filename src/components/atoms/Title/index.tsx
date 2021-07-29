import React from 'react';
import { Text } from 'react-native';
import { theme } from '../../../styles/theme';
import { TitleText } from './styles';

type TitleProps = {
  children: string;
  color?: keyof typeof theme.colors;
};

export const Title: React.FC<TitleProps> = ({ children, color }) => {
  return <TitleText color={color}>{children}</TitleText>;
};
