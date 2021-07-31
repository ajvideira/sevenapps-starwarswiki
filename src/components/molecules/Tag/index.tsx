import React from 'react';

import { Text } from '~/components/atoms';
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
    <Text font="bold" size={14}>
      {children}
    </Text>
  </TagContainer>
);
