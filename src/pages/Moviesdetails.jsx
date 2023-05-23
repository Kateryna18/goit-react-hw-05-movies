import React, { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'api/api';
import { ColorRing } from 'react-loader-spinner';
import css from './Moviesdetails.module.css';

export default function Moviesdetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  
  useEffect(() => {
    const getMovieInfo = async () => {
      const movieInfo = await fetchMovieDetails(movieId);
      setMovieInfo(preparedMovieInfo(movieInfo));
    };

    getMovieInfo();
  }, [movieId]);

  const preparedMovieInfo = ({
    poster_path,
    title,
    vote_average,
    overview,
    genres,
  }) => {
    const score = vote_average.toFixed(1);
    const genresMovie = genres.map(genre => genre.name).join(', ');

    return {
      posterPath: poster_path,
      score: score,
      title: title,
      overview: overview,
      genres: genresMovie,
    };
  };

  const { posterPath, title, score, overview, genres } = movieInfo;
  return (
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
      <section>
        <Link className={css.button} to={location.state}>
          Go Back
        </Link>
        {Object.keys(movieInfo).length && (
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${posterPath}`}
              alt={title}
            />
            <div className={css.info}>
              <div>
                <h2 className={css.title}>{title}</h2>
                <p className={css.score}>User score: {score}%</p>
                <h3 className={css.overviewTitle}>Overview</h3>
                <p className={css.overviewText}>{overview}</p>
                <h4 className={css.genres}>Genres</h4>
                <p>{genres}</p>
              </div>
              <ul className={css.list}>
                <li className={css.item}>
                  <Link className={css.link} to="cast">
                    Cast
                  </Link>
                </li>
                <li className={css.item}>
                  <Link className={css.link} to="reviews">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Outlet />
      </section>
    </Suspense>
  );
}
