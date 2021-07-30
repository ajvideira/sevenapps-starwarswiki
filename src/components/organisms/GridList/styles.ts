import styled, { css } from 'styled-components/native';

export const SeparatorView = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(12)}px;
  `}
`;

export const NoDataImage = styled.Image`
  ${({ theme }) => css`
    height: ${theme.metrics.px(48)}px;
    width: ${theme.metrics.px(48)}px;
  `}
`;
