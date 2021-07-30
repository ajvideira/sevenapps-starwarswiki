import { TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<TouchableOpacityProps>`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;
