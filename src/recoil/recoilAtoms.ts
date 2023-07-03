import { atom } from 'recoil';
import { Rocket } from '../graphgl/queries';

export const rocketsState = atom<Rocket[]>({
  key: 'rocketsState',
  default: [],
});

export const favoriteItemsState = atom<Rocket[]>({
  key: 'favoriteItemsState',
  default: [],
});
