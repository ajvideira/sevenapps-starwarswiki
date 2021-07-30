import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components/native';
import { theme } from '../../../styles/theme';

type ContainerProps = {
  dir?: string;
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  background?: keyof typeof theme.colors;
  width?: number;
  height?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ dir, justify, align, background, width, height }) => css`
    flex-direction: ${dir || 'column'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
    background-color: ${theme.colors[background || 'dark']};
    width: ${width ? `${theme.metrics.px(width)}px` : '100%'};
    height: ${height ? `${theme.metrics.px(height)}px` : '100%'};
  `}
`;

type ScreenScrollContainerProps = {
  dir?: string;
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  background?: keyof typeof theme.colors;
  width?: number;
  height?: number;
  withPadding?: boolean;
};

export const ScreenScrollContainer = styled.ScrollView.attrs<ScreenScrollContainerProps>(
  ({ withPadding, theme }) => ({
    contentContainerStyle: withPadding
      ? {
          paddingHorizontal: theme.metrics.px(24),
          paddingVertical: theme.metrics.px(56),
        }
      : {},
  })
)<ScreenScrollContainerProps>`
  ${({ background, theme }) => css`
    background-color: ${theme.colors[background || 'dark']};
  `}
`;
