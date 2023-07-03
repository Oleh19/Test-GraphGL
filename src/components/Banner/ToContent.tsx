import { FC } from 'react';
import arrow from '../../assets/images/Arrow - Down.svg';

const ToContent: FC = () => {
  return (
    <div className="toContent">
      <a
        href="#section2"
        className="toContentText"
      >
        Explore tours
      </a>
      <img
        src={arrow}
        alt="arrow"
        className="toContentArrow"
      />
    </div>
  );
};

export default ToContent;
