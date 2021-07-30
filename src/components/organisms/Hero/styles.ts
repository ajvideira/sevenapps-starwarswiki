import { LinearGradient } from 'expo-linear-gradient';
import { CSSProperties } from 'react';
import styled from 'styled-components/native';

export const HeroContainer = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`;

export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeroGradient = styled(LinearGradient)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`;

export const ButtonsView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;

type ButtonItemViewProps = {
  align?: CSSProperties['alignItems'];
};

export const ButtonItemView = styled.View<ButtonItemViewProps>`
  flex: 1;
  flex-direction: column;
  align-items: ${({ align }) => align || 'center'};
`;
