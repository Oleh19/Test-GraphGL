import { useRecoilState } from 'recoil';
import { Rocket } from '../graphgl/queries';
import { favoriteItemsState } from '../recoil/recoilAtoms';

export const useFavoriteItems = () => {
  const [favoriteItems, setFavoriteItems] = useRecoilState(favoriteItemsState);

  const addToFavorites = (item: Rocket) => {
    const isItemFavorite = favoriteItems.some(
      (favoriteItem) => favoriteItem.id === item.id
    );
    if (!isItemFavorite) {
      setFavoriteItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromFavorites = (item: Rocket) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  };

  const isFavorite = (item: Rocket) => {
    return favoriteItems.some((favoriteItem) => favoriteItem.id === item.id);
  };

  const clearFavorites = () => {
    setFavoriteItems([]);
  };

  return {
    favoriteItems,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,
  };
};
