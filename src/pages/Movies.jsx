import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ApiService from 'api/api';

const apiServiceMovies = new ApiService();

export default function Movies() {
  const [movie, setMovie] = useState('');
  const [listMovies, setListMovies] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  const movieSearch = e.target.elements.query.value;
  setMovie(movieSearch);
}

useEffect(() => {
  if(movie === '') {
    return
  }

  async function fetchMoviesSearch() {
    const moviesSearch = await apiServiceMovies.fetchSearchQueryMovies(movie);
    console.log(moviesSearch);
    setListMovies(moviesSearch);
  }
  
  fetchMoviesSearch();
}, [movie])


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"/>
        <button>Search</button>
      </form>
      <ul>{listMovies.map(({id, title}) => <li key={id}><Link to={`${id}`}><p>{title}</p></Link></li>)}</ul>
    </main>
  )
}
