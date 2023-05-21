import axios from 'axios';

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
      const response = await axios.get(
        `${BASE_URL}${this.requestType}/movie/day?api_key=${API_KEY}&page=${this.page}`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchSearchQueryMovies(movie) {
    console.log(movie)
    try {
        const response = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query={movie}&include_adult=false&page=${this.page}`
        );
        return response.data.results;
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
        return response.cast;
      } catch (error) {
        console.log(error);
      }
  }

  // async fetchMovieReviews() {
  //   try {
  //       const response = await fetch(
  //         `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  //       );
  //       const moviesReviews = await response.json();
  //       return moviesReviews;
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }

  // get query() {
  //   return this.query;
  // }

  // set query(newQuery) {
  //   this.query = newQuery;
  // }

  // get pages() {
  //   return this.page;
  // }
  
  // set pages(newPage) {
  //   this.page = newPage;
  // }
}

export default ApiService;
