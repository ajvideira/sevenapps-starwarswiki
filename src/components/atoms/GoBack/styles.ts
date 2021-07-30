import styled, { css } from 'styled-components/native';

export const GoBackContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.metrics.px(64)}px;
    padding-left: ${theme.metrics.px(24)}px;
  `}
`;
