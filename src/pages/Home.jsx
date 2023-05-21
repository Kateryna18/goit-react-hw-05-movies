import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ApiService from 'api/api';

const apiServiceMovies = new ApiService();

export default function Home() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  
  const handleFetchMovies = async () => {
    const trendingMovies = await apiServiceMovies.fetchTrendingMovies();
    setMoviesTrending(trendingMovies);
  }


  useEffect(() => {
    handleFetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>{moviesTrending.map(({id, title}) => <li key={id}><Link to={`movies/${id}`}><p>{title}</p></Link></li>)}</ul>
    </main>
  )
}
