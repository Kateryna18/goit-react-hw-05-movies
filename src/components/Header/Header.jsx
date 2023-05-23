import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
        <nav className={css.nav}>
          <NavLink className={css.link} to="/">Home</NavLink>
          <NavLink className={css.link} to="/movies">Movies</NavLink>
        </nav>
  )
}
