import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchQueryMovies } from 'api/api';
import css from './Movies.module.css'

export default function Movies() {
  const [listMovies, setListMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const location = useLocation();


useEffect(() => {
  if(!query) return;

  async function fetchMoviesSearch() {
    const moviesSearch = await fetchSearchQueryMovies(query);
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
    <section>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="query" placeholder='Please enter the name of the movie'/>
        <button className={css.button}>Search</button>
      </form>
      <ul className={css.list}>{listMovies?.map(({id, title}) => <li className={css.item} key={id}><Link className={css.link} to={`${id}`} state={location}><p>{title}</p></Link></li>)}</ul>
    </section>
  )
}
