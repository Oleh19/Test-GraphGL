import { FC } from 'react'
import banner from '../../assets/images/banner.jpg';

const BackgroundBanner:FC = () => {
    return(
        <img
        className="banner"
        src={banner}
        alt="banner"
      />
    )
}

export default BackgroundBanner