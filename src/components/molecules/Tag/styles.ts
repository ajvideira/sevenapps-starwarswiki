import styled, { css } from 'styled-components/native';

type TagContainerProps = {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
};

export const TagContainer = styled.View<TagContainerProps>`
  ${({ marginTop, marginBottom, marginRight, marginLeft, theme }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.red};
    height: ${theme.metrics.px(24)}px;
    border-radius: ${theme.metrics.px(24)}px;
    padding-horizontal: ${theme.metrics.px(10)}px;
    max-width: ${theme.metrics.px(100)}px;
    margin-top: ${theme.metrics.px(marginTop || 0)}px;
    margin-bottom: ${theme.metrics.px(marginBottom || 0)}px;
    margin-right: ${theme.metrics.px(marginRight || 0)}px;
    margin-left: ${theme.metrics.px(marginLeft || 0)}px;
  `}
`;
