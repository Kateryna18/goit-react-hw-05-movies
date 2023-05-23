import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from 'api/api';

// const apiServiceMovies = new ApiService();

export default function Moviesdetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  

  useEffect(() => {
    const getMovieInfo = async () => {
      const movieInfo = await fetchMovieDetails(movieId);
    setMovieInfo(movieInfo);
  }

    getMovieInfo()
  }, [movieId])

  const {poster_path, title, vote_count, overview} = movieInfo;
  
  return (
    <section>
      <Link to={location.state}>Go Back</Link>
      {Object.keys(movieInfo).length && <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
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
    </section>
  )
}
