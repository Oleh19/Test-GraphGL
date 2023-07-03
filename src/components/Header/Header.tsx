import { FC } from 'react';
import ControlHeader from './ControlHeader';
import LogoHeader from './LogoHeader';
import NavHeader from './NavHeader';

const Header: FC = () => {
  return (
    <header className="header">
      <LogoHeader />
      <NavHeader />
      <ControlHeader />
    </header>
  );
};

export default Header;
