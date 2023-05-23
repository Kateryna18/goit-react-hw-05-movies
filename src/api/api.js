const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '84c383365f1d91dcec85ad7e4d3952ec';

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`); 
  const data = await response.json();
  return data
}

export const fetchMovieActors = async (id) => {
  try {
      const response = await fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
      const data = await response.json();
      return data.cast;
    } catch (error) {
      console.log(error);
    }
}

export const fetchMovieReviews = async (id) => {
  try {
      const response = await fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
}

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export const fetchSearchQueryMovies = async (movie) => {
  try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movie}&include_adult=false&page=1`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
}
