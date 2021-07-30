import React from 'react';
import { Text } from 'react-native';
import { theme } from '../../../styles/theme';
import { TitleText } from './styles';

type TitleProps = {
  children: string;
  color?: keyof typeof theme.colors;
  font?: keyof typeof theme.fonts;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  size?: number;
};

export const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return <TitleText {...props}>{children}</TitleText>;
};
