import styled from 'styled-components/native';

type LogoImageProps = {
  size: number;
};

export const LogoImage = styled.Image<LogoImageProps>`
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
`;
