import { FC } from 'react';
import leftArrow from '../assets/images/leftArrow.svg';
import rightArrow from '../assets/images/rightArrow.svg';
import Item from './Item';
import { CiHeart } from 'react-icons/ci';
import { Rocket } from '../graphgl/queries';
import { ReactNode } from 'react';
import { useFavoriteItems } from '../hooks/useFavoriteItems';

interface ItemsProps {
  rockets: Rocket[];
  pagination: ReactNode;
}

const Items: FC<ItemsProps> = ({ rockets, pagination }) => {
  const { addToFavorites } = useFavoriteItems();

  return (
    <div
      id="section2"
      className="itemsWrapper"
    >
      <div className="itemsContainer">
        <div className="itemsMenu">
          <div className="itemsTitle">POPULAR TOURS</div>
          <div className="itemsArrow">
            <div className="leftArrow">
              <img
                src={leftArrow}
                alt="leftArrow"
              />
            </div>
            <div className="rightArrow">
              <img
                src={rightArrow}
                alt="rightArrow"
              />
            </div>
          </div>
        </div>

        <div className="itemsBox">
          {rockets.map((rocket) => (
            <Item
              key={rocket.id}
              rocket={rocket}
              icon={<CiHeart className="heart" />}
              addToFavorites={addToFavorites}
            />
          ))}
        </div>

        <div className="itemsScrollIndicator">{pagination}</div>
      </div>
    </div>
  );
};

export default Items;
