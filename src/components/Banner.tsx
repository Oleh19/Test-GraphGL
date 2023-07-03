import { FC } from 'react';
import banner from '../assets/images/banner.jpg';
import arrow from '../assets/images/Arrow - Down.svg';

const Banner: FC = () => {
  return (
    <div className="bannerWrapper">
      <img
        className="banner"
        src={banner}
        alt="banner"
      />

      <div className="bannerTitle">
        <div className="textContainer">
          <p className="firstText">THE SPACE IS WAITING FOR</p>

          <div className="bannerScrollIndicator">
            <div className="scrollBanner">
              <div className="scrollBannerActive"></div>
            </div>
            <div className="scrollBanner">
              <div className="scrollBannerEllipse"></div>
            </div>
            <div className="scrollBanner">
              <div className="scrollBannerEllipse"></div>
            </div>
          </div>

          <p className="secondText">YOU</p>
        </div>
      </div>

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
    </div>
  );
};

export default Banner;
