import styled from 'styled-components/native';

type TitleTextProps = {
  color?: string;
};

export const TitleText = styled.Text<TitleTextProps>`
  color: ${({ color }) => color || '#fff'};
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
`;
