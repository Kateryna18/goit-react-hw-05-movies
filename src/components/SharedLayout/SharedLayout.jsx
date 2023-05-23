import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from 'components/Header/Header';
import css from './SharedLayout.module.css';
import { ColorRing } from 'react-loader-spinner';

export default function SharedLayout() {
  return (
    <div className={css.container}>
      <header><Header /></header>
      <main>
        <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
