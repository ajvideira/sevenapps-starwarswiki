import React from 'react';
import { CardContainer, CardImage } from './styles';

type CardProps = {
  item: Character | Film;
};

type Film = {
  id: number;
  image_url: string;
};

type Character = {
  id: number;
  image_url: string;
};

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};

export default Card;
