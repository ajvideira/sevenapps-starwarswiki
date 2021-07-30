import { CSSProperties } from 'react';
import styled, { css } from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalBackgroundContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.darkTransparent};
  `}
`;

export const ModalContentContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.dark};
    height: ${theme.metrics.px(326)}px;
    width: ${theme.metrics.px(326)}px;
    border-radius: ${theme.metrics.px(24)}px;
    padding: ${theme.metrics.px(24)}px;
  `}
`;

export const FavoriteImage = styled.Image`
  ${({ theme }) => css`
    height: ${theme.metrics.px(80)}px;
    width: ${theme.metrics.px(80)}px;
  `}
`;
