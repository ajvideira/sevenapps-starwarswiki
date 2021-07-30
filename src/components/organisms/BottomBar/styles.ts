import styled, { css } from 'styled-components/native';

export const BottomBarContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: ${theme.metrics.px(64)}px;
    width: 100%;
    background-color: ${theme.colors.black};
    padding-bottom: ${theme.metrics.px(6)}px;
  `}
`;

export const BarItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
