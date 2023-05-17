const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '84c383365f1d91dcec85ad7e4d3952ec';

class ApiService {
  constructor() {
    this.query = '';
    this.page = 1;
    this.requestType = 'trending';
  }

  async fetchTrendingMovies() {
    try {
      const response = await fetch(
        `${BASE_URL}${this.requestType}/movie/day?api_key=${API_KEY}&page=${this.page}`
      );
      const popularMovies = await response.json();
      return popularMovies;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchSearchQueryMovies() {
    try {
        const response = await fetch(
          `${BASE_URL}${this.query}/movie?api_key=${API_KEY}&include_adult=false&page=${this.page}`
        );
        const searchQueryMovies = await response.json();
        return searchQueryMovies;
      } catch (error) {
        console.log(error);
      }
  }

  async fetchMovieDetails(id) {
    try {
        const response = await fetch(
          `${BASE_URL}movie/${id}?api_key=${API_KEY}`
        );
        const moviesDetails = await response.json();
        return moviesDetails;
      } catch (error) {
        console.log(error);
      }
  }

  async fetchMovieActors(id) {
    try {
        const response = await fetch(
          `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
        );
        const moviesActors = await response.json();
        return moviesActors;
      } catch (error) {
        console.log(error);
      }
  }

  async fetchMovieReviews() {
    try {
        const response = await fetch(
          `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
        );
        const moviesReviews = await response.json();
        return moviesReviews;
      } catch (error) {
        console.log(error);
      }
  }

  get query() {
    return this.query;
  }

  set query(newQuery) {
    this.query = newQuery;
  }

  get pages() {
    return this.page;
  }
  
  set pages(newPage) {
    this.page = newPage;
  }
}

export default ApiService;
