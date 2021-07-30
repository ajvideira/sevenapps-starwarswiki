import React from 'react';

import {
  Container,
  ScreenScrollContainer,
} from '../../components/atoms/Container';
import Card from '../../components/molecules/Card';
import { CardList } from '../../components/organisms/CardList';
import { Hero } from '../../components/organisms/Hero';
import { ItemType } from '../../models';

const FAKE_DATA_CHARACTER = [
  {
    id: 0,
    title: 'Darth Vader',
    subtitle: 'Anakin Skaywalker',
    description: 'Aprendiz jedi, após um lord sith',
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
    type: ItemType.CHARACTER,
  },
  {
    id: 1,
    title: 'Yoda',
    subtitle: 'Mestre Jedi',
    description: 'Lendário Jedi, poder imensurável',
    image_url:
      'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125',
    type: ItemType.CHARACTER,
  },
];
const FAKE_DATA_FILMS = [
  {
    id: 0,
    title: 'Episódio I',
    subtitle: 'A Ameaça Fantasma',
    description: 'Uma rebelião, uma jovem promessa jedi. O que será?',
    image_url:
      'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest/scale-to-width-down/1000?cb=20130822171446',
    type: ItemType.FILM,
  },
  {
    id: 1,
    title: 'Episódio II',
    subtitle: 'A Guerra dos Clones',
    description: 'Anakin cresceu, e junto com o mal cresce.',
    image_url:
      'https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg/revision/latest/scale-to-width-down/678?cb=20180318125654',
    type: ItemType.FILM,
  },
];

export default function Home() {
  return (
    <ScreenScrollContainer justify="flex-start" align="flex-start">
      <Hero item={FAKE_DATA_FILMS[0]} />
      <CardList title="Filmes" data={FAKE_DATA_FILMS} />
      <CardList title="Personagens" data={FAKE_DATA_CHARACTER} />
    </ScreenScrollContainer>
  );
}
