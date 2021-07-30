import React from 'react';
import { Item } from '../../../models';
import { colors } from '../../../styles/colors';
import { Logo } from '../../atoms/Logo';
import { Title } from '../../atoms/Title';
import { IconButton } from '../../molecules/IconButton';
import { PlayButton } from '../../molecules/PlayButton';
import { Tag } from '../../molecules/Tag';
import {
  ButtonsView,
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
} from './styles';

type HeroProps = {
  item: Item;
  onDetail?: boolean;
};

export const Hero: React.FC<HeroProps> = ({ item, onDetail = false }) => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: item.image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag marginTop={onDetail ? 224 : 200}>{item.type}</Tag>
          <Title font="bold" size={28} marginTop={8}>
            {item.title}
          </Title>
          <Title size={18}>{item.subtitle}</Title>
          <ButtonsView>
            <IconButton iconName="add-circle-outline" label="Favoritos" />
            <PlayButton />
            {!onDetail && (
              <IconButton
                iconName="information-circle-outline"
                label="Saiba mais"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  );
};
