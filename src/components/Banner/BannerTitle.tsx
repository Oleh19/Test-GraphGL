import { FC } from 'react';

const Bannertitle: FC = () => {
  return (
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
  );
};

export default Bannertitle;
