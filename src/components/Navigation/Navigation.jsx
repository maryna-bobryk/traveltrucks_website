import clsx from 'clsx';
import s from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isActiveLink = ({ isActive }) => {
    return clsx(s.nav__menu, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink className={isActiveLink} to="/">
        Home
      </NavLink>
      <NavLink className={isActiveLink} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};
export default Navigation;
