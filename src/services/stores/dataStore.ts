import create from 'zustand';

import { Item } from '~/models';

type ItemStore = {
  selectedData: Item;
  setSelectedData: (item: Item) => void;
};

export const useDataStore = create<ItemStore>((set) => ({
  selectedData: {} as Item,
  setSelectedData: (selectedData) => set({ selectedData }),
}));
