import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ApiService from 'api/api';

const apiServiceMovies = new ApiService();

export default function Movies() {
  const [listMovies, setListMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const location = useLocation();


useEffect(() => {
  if(!query) return;

  async function fetchMoviesSearch() {
    const moviesSearch = await apiServiceMovies.fetchSearchQueryMovies(query);
    setListMovies(moviesSearch);
  }
  
  fetchMoviesSearch();
}, [query]);


const handleSubmit = (e) => {
  e.preventDefault();
  const movieSearch = e.currentTarget.elements.query.value;
  setSearchParams({ query: movieSearch});
}


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"/>
        <button>Search</button>
      </form>
      <ul>{listMovies?.map(({id, title}) => <li key={id}><Link to={`${id}`} state={location}><p>{title}</p></Link></li>)}</ul>
    </main>
  )
}
