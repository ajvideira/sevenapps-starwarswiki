import styled from 'styled-components/native';
import { theme } from '../../../styles/theme';

type TitleTextProps = {
  color?: keyof typeof theme.colors;
  size?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  font?: keyof typeof theme.fonts;
};

export const TitleText = styled.Text<TitleTextProps>`
  color: ${({ color, theme }) => theme.colors[color || 'white']};
  font-size: ${({ size, theme }) => theme.metrics.px(size || 24)}px;
  margin-top: ${({ marginTop, theme }) => theme.metrics.px(marginTop || 0)}px;
  margin-bottom: ${({ marginBottom, theme }) =>
    theme.metrics.px(marginBottom || 0)}px;
  margin-right: ${({ marginRight, theme }) =>
    theme.metrics.px(marginRight || 0)}px;
  margin-left: ${({ marginLeft, theme }) =>
    theme.metrics.px(marginLeft || 0)}px;
  font-family: ${({ font, theme }) => theme.fonts[font || 'regular']};
`;
