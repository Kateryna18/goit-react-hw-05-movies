import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import ApiService from 'api/api';

const apiServiceMovies = new ApiService();

export default function Home() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    handleFetchMovies();
  }, []);
  
  const handleFetchMovies = async () => {
    const trendingMovies = await apiServiceMovies.fetchTrendingMovies();
    setMoviesTrending(trendingMovies);
  }

  return (
    <section>
      <h1>Trending today</h1>
      <ul>{moviesTrending.map(({id, title}) => <li key={id}><Link to={`movies/${id}`} state={location}><p>{title}</p></Link></li>)}</ul>
    </section>
  )
}
