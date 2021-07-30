import { Item } from '../../models';

import AsyncStorage from '@react-native-async-storage/async-storage';

const DB_KEY = '@StarWarsWiki:favorites';

export const useFavorites = () => {
  const addFavorite = async (data: Item): Promise<Item[] | Error> => {
    try {
      const dbData = await AsyncStorage.getItem(DB_KEY);
      const newDbData = [...JSON.parse(dbData || '[]'), data];
      await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDbData));
      return newDbData;
    } catch (error) {
      return error;
    }
  };

  const getFavorites = async (): Promise<Item[] | Error> => {
    try {
      const dbData = await AsyncStorage.getItem(DB_KEY);
      return [...JSON.parse(dbData || '[]')];
    } catch (error) {
      return error;
    }
  };

  const removeFavorite = async (data: Item): Promise<Item[] | Error> => {
    try {
      const dbData = await AsyncStorage.getItem(DB_KEY);
      const newDbData = [...JSON.parse(dbData || '[]')].filter(
        (favorite: Item) =>
          !(data.id === favorite.id && data.type === favorite.type)
      );
      await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDbData));
      console.log(newDbData.length);
      return newDbData;
    } catch (error) {
      return error;
    }
  };

  return {
    addFavorite,
    getFavorites,
    removeFavorite,
  };
};
