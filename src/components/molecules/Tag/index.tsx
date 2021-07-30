import React from 'react';
import { Title } from '../../atoms/Title';
import { TagContainer } from './styles';

type TagProps = {
  children: string;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
};

export const Tag: React.FC<TagProps> = ({ children, ...props }) => (
  <TagContainer {...props}>
    <Title font="bold" size={14}>
      {children}
    </Title>
  </TagContainer>
);
