import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

const NotFound = lazy(() => import('pages/NotFound'));
const Movies = lazy(() => import('pages/Movies'));
const Moviesdetails = lazy(() => import('pages/Moviesdetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Moviesdetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
