import React, { CSSProperties } from 'react';

import { theme } from '~/styles/theme';
import { TextText } from './styles';

type TextProps = {
  children: string;
  color?: keyof typeof theme.colors;
  font?: keyof typeof theme.fonts;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  size?: number;
  lineHeight?: number;
  align?: CSSProperties['textAlign'];
};

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <TextText {...props}>{children}</TextText>;
};
