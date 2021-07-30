import styled, { css } from 'styled-components/native';

type CardContainerProps = {
  size: {
    width: number;
    height: number;
  };
};

export const CardContainer = styled.TouchableOpacity<CardContainerProps>`
  ${({ size, theme }) => css`
    width: ${theme.metrics.px(size.width)}px;
    height: ${theme.metrics.px(size.height)}px;
    border-radius: ${theme.metrics.px(8)}px;
    overflow: hidden;
    margin-right: ${theme.metrics.px(12)}px;
  `}
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
