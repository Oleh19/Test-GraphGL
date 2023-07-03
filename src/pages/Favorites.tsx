import { FC } from 'react';
import Header from '../components/Header';
import banner from '../assets/images/favorites-banner.jpg';
import Item from '../components/Item';
import { AiOutlineDelete } from 'react-icons/ai';
import { useFavoriteItems } from '../store/useFavoriteItems';
import { Rocket } from '../store/queries';

const Favorites: FC = () => {
  const { favoriteItems, removeFromFavorites, clearFavorites } =
    useFavoriteItems();

  const handleRemoveFromFavorites = (item: Rocket) => {
    removeFromFavorites(item);
  };

  const handleClearFavorites = () => {
    clearFavorites();
  };

  return (
    <>
      <Header />
      <div className="favoritesBanner">
        <img
          className="favoritesImage"
          src={banner}
          alt="banner"
        />
        <div className="favoritesTitle">FAVORITES</div>
      </div>
      <div className="favoritesContainer">
        <div className="favoritesAction">
          <div
            className="clearFavorites"
            onClick={handleClearFavorites}
          >
            Clear all
          </div>
        </div>

        <div className="favoritesItems">
          {favoriteItems.map((item) => (
            <Item
              removeFromFavorites={handleRemoveFromFavorites}
              key={item.id}
              icon={<AiOutlineDelete className="heart" />}
              rocket={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
