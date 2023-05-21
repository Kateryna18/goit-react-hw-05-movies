import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import ApiService from 'api/api';

const apiServiceMovies = new ApiService();

export default function Moviesdetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const [firstRender, setFirstRender] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    if(firstRender) {
      setFirstRender(false);
      return
    }

    async function fetchMovieDetails() {
      const movieInfo = await apiServiceMovies.fetchMovieDetails(movieId);
      setMovieInfo(movieInfo);
    }
    
    fetchMovieDetails()
  }, [movieId, firstRender])

  const {overview, title, poster_path, vote_count} = movieInfo;
  console.log(movieInfo);

  return (
    <main>
      {movieInfo && <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <h2>{title}</h2>
        <p>{vote_count}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p></p>
      </div>}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </main>
  )
}
