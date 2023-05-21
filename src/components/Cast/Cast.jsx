import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from 'api/api';

const apiServiceMovies = new ApiService();

export default function Cast() {
  const [movieActors, setMovieActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieActors() {
      const movieActors = await apiServiceMovies.fetchMovieActors(movieId);
      setMovieActors(movieActors);
    }
    fetchMovieActors();
  }, [movieId]);

  return (
    <div>
      {movieActors && (
        <ul>
          {movieActors.map(({ name, character, profile_path }) => (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt=""
              />
              <h2>{name}</h2>
              <span>Character: </span>
              <span>{character}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
