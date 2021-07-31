import { CSSProperties } from 'react';
import styled, { css } from 'styled-components/native';

import { theme } from '~/styles/theme';

type TitleTextProps = {
  color?: keyof typeof theme.colors;
  size?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  font?: keyof typeof theme.fonts;
  lineHeight?: number;
  align?: CSSProperties['textAlign'];
};

export const TitleText = styled.Text<TitleTextProps>`
  ${({
    color,
    size,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    font,
    lineHeight,
    align,
    theme,
  }) => css`
    text-align: ${align || 'left'}
    color: ${theme.colors[color || 'white']};
    font-size: ${theme.metrics.px(size || 24)}px;
    margin-top: ${theme.metrics.px(marginTop || 0)}px;
    margin-bottom: ${theme.metrics.px(marginBottom || 0)}px;
    margin-right: ${theme.metrics.px(marginRight || 0)}px;
    margin-left: ${theme.metrics.px(marginLeft || 0)}px;
    font-family: ${theme.fonts[font || 'regular']};
    line-height: ${theme.metrics.px(lineHeight || size || 24)}px;
  `}
`;
