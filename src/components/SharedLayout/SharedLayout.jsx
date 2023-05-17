import { Outlet } from 'react-router-dom';

import React from 'react';
import Header from 'components/Header/Header';

export default function SharedLayout() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
}
