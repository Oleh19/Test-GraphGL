import { FC } from 'react';
import BackgroundBanner from './BackgroundBanner';
import BannerTitle from './BannerTitle';
import ToContent from './ToContent';

const Banner: FC = () => {
  return (
    <div className="bannerWrapper">
      <BackgroundBanner />
      <BannerTitle />
      <ToContent />
    </div>
  );
};

export default Banner;
