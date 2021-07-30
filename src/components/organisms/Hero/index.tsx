import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Item } from '../../../models';
import { useFavorites } from '../../../services/hooks/useFavorites';
import { colors } from '../../../styles/colors';
import { Logo } from '../../atoms/Logo';
import { Title } from '../../atoms/Title';
import { FavoriteStateModal } from '../../molecules/FavoriteStateModal';
import { IconButton } from '../../molecules/IconButton';
import { PlayButton } from '../../molecules/PlayButton';
import { Tag } from '../../molecules/Tag';
import {
  ButtonItemView,
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
  const { addFavorite, removeFavorite, getFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFavoriteStateModal, setShowFavoriteStateModal] = useState('');
  const navigation = useNavigation();

  const verifyFavorite = async () => {
    const favorites = await getFavorites();

    if (favorites instanceof Error) {
      Alert.alert('Error retrieving favorites. Reload app.');
      return;
    }

    const foundFavorite = (favorites as Item[]).find(
      (favorite) => item.id === favorite.id && item.type === favorite.type
    );
    setIsFavorite(!!foundFavorite);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      verifyFavorite();
    });
    return unsubscribe;
  });

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteStateModal('');
    }, 2000);
  };

  async function handleAddFavorite() {
    await addFavorite(item);
    setIsFavorite(true);
    setShowFavoriteStateModal('added');
    closeFavoriteModal();
  }

  async function handleRemoveFavorite() {
    await removeFavorite(item);
    setIsFavorite(false);
    setShowFavoriteStateModal('removed');
    closeFavoriteModal();
  }

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
            <IconButton
              onPress={isFavorite ? handleRemoveFavorite : handleAddFavorite}
              iconName={
                isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
              }
              label={isFavorite ? 'Rem. Favoritos' : 'Add. Favoritos'}
            />

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

      <FavoriteStateModal
        visible={!!showFavoriteStateModal}
        onClose={() => setShowFavoriteStateModal('')}
        type={showFavoriteStateModal === 'added' ? 'added' : 'removed'}
      />
    </HeroContainer>
  );
};
