import { TextInput, TextInputProps, View } from 'react-native';
import styled, { css } from 'styled-components';

type InputContainerProps = {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
};

export const InputContainer = styled(View)<InputContainerProps>`
  ${({ theme, marginTop, marginBottom, marginLeft, marginRight }) => css`
    align-items: flex-start;
    justify-content: flex-start;
    width: ${theme.metrics.px(327)}px;
    height: ${theme.metrics.px(42)}px;
    border-radius: ${theme.metrics.px(12)}px;
    border-width: ${theme.metrics.px(1)}px;
    border-color: ${theme.colors.light};
    padding: ${theme.metrics.px(6)}px;
    margin-top: ${theme.metrics.px(marginTop || 0)}px;
    margin-bottom: ${theme.metrics.px(marginBottom || 0)}px;
    margin-right: ${theme.metrics.px(marginRight || 0)}px;
    margin-left: ${theme.metrics.px(marginLeft || 0)}px;
  `}
`;

export const TextInputField = styled(TextInput).attrs<TextInputProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.colors.grey,
  })
)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semiBold};
    font-size: ${theme.metrics.px(14)}px;
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
  `}
`;
