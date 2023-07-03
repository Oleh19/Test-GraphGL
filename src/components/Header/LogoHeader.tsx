import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const LogoHeader: FC = () => {
  return (
    <Link
      to="/"
      className="logo"
    >
      <img
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default LogoHeader;
