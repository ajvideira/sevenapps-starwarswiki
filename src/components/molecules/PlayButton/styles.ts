import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: ${theme.metrics.px(36)}px;
    width: ${theme.metrics.px(100)}px;
    border-radius: ${theme.metrics.px(8)}px;
    background-color: ${theme.colors.white};
  `}
`;
