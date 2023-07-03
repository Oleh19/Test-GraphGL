import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const navMenu = [
  { title: 'HOME', id: 1, link: '/' },
  { title: 'TOURS', id: 2, link: 's' },
  { title: 'ABOUT', id: 3, link: 's' },
  { title: 'HELP', id: 4, link: 's' },
];

const NavHeader: FC = () => {
  return (
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
  );
};

export default NavHeader;
