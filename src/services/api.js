import axios from 'axios';
import { API_KEY } from './utils';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const getTrending = async () => {
  const response = axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response;
};

const getMovieInfo = async id => {
  const response = axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response;
};

const getMovieReviews = async (id, page = 1) => {
  const response = axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response;
};

const getMovieCast = async id => {
  const response = axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

const searchMovie = async query => {
  const response = axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`
  );
  return response;
};

export {
  getTrending,
  getMovieInfo,
  getMovieReviews,
  getMovieCast,
  searchMovie,
};
