import styled from 'styled-components/native';

type ContainerProps = {
  dir?: string;
  justify?: string;
  align?: string;
  bg?: string;
  w?: number;
  h?: number;
};

export const Container = styled.View<ContainerProps>`
  flex-direction: ${({ dir }) => dir || 'column'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
  width: ${({ w, theme }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ h, theme }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`;
