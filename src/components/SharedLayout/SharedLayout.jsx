import { Link, Outlet } from 'react-router-dom';

import React from 'react';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
