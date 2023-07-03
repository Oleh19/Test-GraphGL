import { ReactNode } from 'react';
import { FC } from 'react';
import { Rocket } from '../graphgl/queries';
import item1 from '../assets/images/item1.jpg';

interface ItemProps {
  icon?: ReactNode;
  rocket: Rocket;
  addToFavorites?: any;
  removeFromFavorites?: any;
}

const Item: FC<ItemProps> = ({
  icon,
  rocket,
  addToFavorites,
  removeFromFavorites,
}) => {
  const description = (str: string) => {
    if (str.length >= 50) {
      return str.substring(0, 50) + '...';
    }
    return str;
  };

  const handleAddToFavorites = () => {
    addToFavorites(rocket);
  };

  const handleRemoveFromFavorites = () => {
    if (removeFromFavorites) {
      removeFromFavorites(rocket);
    }
  };

  return (
    <div className="item">
      <img
        src={item1}
        alt={rocket.name}
        className="itemImg"
      />
      <div className="descContainer">
        <div className="topDesc">
          <div className="itemTitle">{rocket.name}</div>
          <div className="itemDesc">{description(rocket.description)}</div>
        </div>
        <div className="itemAction">
          <button className="itemBuy">
            <p>BUY</p>
          </button>
          <div
            className="optionalButton"
            onClick={
              addToFavorites ? handleAddToFavorites : handleRemoveFromFavorites
            }
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
