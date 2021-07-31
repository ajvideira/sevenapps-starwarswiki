import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Item, ItemType } from '~/models';
import { useFavorites } from '~/services/hooks/useFavorites';
import { useDataStore } from '~/services/stores/dataStore';
import { Logo, Text } from '~/components/atoms';
import {
  FavoriteStateModal,
  IconButton,
  PlayButton,
  Tag,
} from '~/components/molecules';
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
  const { setSelectedData } = useDataStore();
  const theme = useTheme();

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

  function handlePlayVideo() {
    setSelectedData(item);
    navigation.navigate('Watch');
  }

  function handleKnowMore() {
    setSelectedData(item);
    navigation.navigate('Detail');
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: item.image_url,
        }}
      >
        <HeroGradient
          colors={[theme.colors.dark, 'transparent', theme.colors.dark]}
        >
          {!onDetail && <Logo size="small" />}
          <Tag marginTop={onDetail ? 224 : 200}>{item.type}</Tag>
          <Text font="bold" size={28} marginTop={8}>
            {item.title}
          </Text>
          <Text size={18} marginTop={8}>
            {item.subtitle}
          </Text>
          <ButtonsView>
            <ButtonItemView align="flex-start">
              <IconButton
                onPress={isFavorite ? handleRemoveFavorite : handleAddFavorite}
                iconName={
                  isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
                }
                label={isFavorite ? 'Rem. Favoritos' : 'Add. Favoritos'}
              />
            </ButtonItemView>
            <ButtonItemView>
              {item.type === ItemType.FILM && (
                <PlayButton onPress={handlePlayVideo} />
              )}
            </ButtonItemView>
            <ButtonItemView align="flex-end">
              {!onDetail && (
                <IconButton
                  iconName="information-circle-outline"
                  label="Saiba mais"
                  onPress={handleKnowMore}
                />
              )}
            </ButtonItemView>
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
