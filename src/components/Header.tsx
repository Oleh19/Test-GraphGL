import { FC } from 'react';
import { CiHeart } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const navMenu = [
  { title: 'HOME', id: 1, link: '/' },
  { title: 'TOURS', id: 2, link: 's' },
  { title: 'ABOUT', id: 3, link: 's' },
  { title: 'HELP', id: 4, link: 's' },
];

const Header: FC = () => {
  return (
    <header className="header">
      <Link
        to="/"
        className="logo"
      >
        <img
          src={logo}
          alt="logo"
        />
      </Link>
      <nav className="navMenu">
        {navMenu.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) =>
              isActive ? 'activeNavItem ' : 'navItem'
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
      <div className="control">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'favoritesActive ' : 'favorites'
          }
          to="/favorites"
        >
          <CiHeart className="heart" />
        </NavLink>
        
        <div className="signIn">
          <div className="signIn-text">SIGN IN</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
