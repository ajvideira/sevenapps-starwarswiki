import styled from 'styled-components/native';

type TitleTextProps = {
  color?: string;
};

export const TitleText = styled.Text<TitleTextProps>`
  color: ${({ color, theme }) => color || theme.colors.red};
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
