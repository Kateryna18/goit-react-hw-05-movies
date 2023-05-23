import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { fetchTrendingMovies } from 'api/api';
import css from './Home.module.css';

export default function Home() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    handleFetchMovies();
  }, []);
  
  const handleFetchMovies = async () => {
    const trendingMovies = await fetchTrendingMovies();
    setMoviesTrending(trendingMovies);
  }

  return (
    <section>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>{moviesTrending.map(({id, title}) => <li className={css.item} key={id}><Link className={css.link} to={`movies/${id}`} state={location}><p>{title}</p></Link></li>)}</ul>
    </section>
  )
}
