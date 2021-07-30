export type Item = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  trailer_url?: string;
  type: ItemType;
};

export enum ItemType {
  FILM = 'Filme',
  CHARACTER = 'Personagem',
}
