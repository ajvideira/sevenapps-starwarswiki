import { Item, ItemType } from '../../models';
import { api } from '../api';

export const useGetData = () => {
  const getFilms = async (): Promise<Item[] | Error> => {
    try {
      const { data } = await api.get('/films');
      return data.map((film: any) => {
        return {
          ...film,
          type: ItemType.FILM,
        };
      }) as Item[];
    } catch (error) {
      return error;
    }
  };

  const getCharacters = async (): Promise<Item[] | Error> => {
    try {
      const { data: characters } = await api.get('/characters');
      return characters.map((character: any) => {
        return {
          ...character,
          type: ItemType.CHARACTER,
        };
      }) as Item[];
    } catch (error) {
      return error;
    }
  };

  const getSearchResult = async (query: string): Promise<Item[] | Error> => {
    try {
      const { data } = await api.get('/search', {
        params: {
          query,
        },
      });
      return data.map((item: any) => {
        return {
          ...item,
          type: item.trailer_url ? ItemType.FILM : ItemType.CHARACTER,
        };
      }) as Item[];
    } catch (error) {
      return error;
    }
  };

  return {
    getCharacters,
    getFilms,
    getSearchResult,
  };
};
