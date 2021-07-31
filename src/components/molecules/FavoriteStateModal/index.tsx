import React from 'react';

import { Text } from '~/components/atoms';
import {
  FavoriteImage,
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
} from './style';
import favoriteAdded from '~/assets/favorite-added.png';
import favoriteRemoved from '~/assets/favorite-removed.png';

type FavoriteStateModalProps = {
  visible?: boolean;
  type?: 'added' | 'removed';
  onClose?: () => void;
};

export const FavoriteStateModal: React.FC<FavoriteStateModalProps> = ({
  visible,
  onClose,
  type,
}) => {
  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={type === 'added' ? favoriteAdded : favoriteRemoved}
          />
          <Text
            align="center"
            marginTop={24}
            size={28}
            font="bold"
          >{`Favorito ${
            type === 'added' ? 'adicionado' : 'removido'
          } com sucesso!`}</Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  );
};
