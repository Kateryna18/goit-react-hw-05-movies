import React, { useEffect, useState } from 'react';
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

  // console.log(moviesTrending);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>{moviesTrending.map(({id, title}) => <li key={id}><p>{title}</p></li>)}</ul>
    </div>
  )
}
