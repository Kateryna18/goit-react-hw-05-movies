import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'api/api';
import css from './Cast.module.css';

export default function Cast() {
  const [movieActors, setMovieActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
   const getfetchMovieActors = async () => {
      const movieActors = await fetchMovieActors(movieId);
      setMovieActors(movieActors);
    }
    getfetchMovieActors();
  }, [movieId]);

  
  return (
    <section>
      <h2 className={css.title}>Cast</h2>
      {movieActors.length && 
        <ul className={css.list} >
          {movieActors.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={css.image}
              />
              <h2>{name}</h2>
              <span>Character: </span>
              <span>{character}</span>
            </li>
          ))}
        </ul>
      }
    </section>
  );
}
