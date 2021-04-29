import { IHomeState, IMovieSingle, IMoviesResponse} from '../modules/home/types';
import { URL_API, API_KEY} from "../constants";

export const initialHomeState: IHomeState = {
  loading: false,
  movies: [],
  totalMovies: 0,
  page: 1,
};

export const loadHomeState = () => {
  try {
    let movies: IMovieSingle[] | [];
    movies = getCache('movies');

    const homeState: IHomeState = {
      loading: false,
      movies: movies || [],
      totalMovies: 0,
      page: 1,
    };
    return homeState;
  } catch (error) {
    return initialHomeState;
  }
};

export const handleResponseFetchMovies = (response: IMoviesResponse) => {
  const movies: IMovieSingle[] = [];
  response.Search.forEach(movie => {
    movies.push({
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    })
  })
  return movies
}


export const getCache = (key: string) => {
  try {
    let cacheKey = localStorage.getItem(key);
    let cache = null;
    if (cacheKey === null) {
      if (typeof cache === 'object') {
        cache = [];
      } else {
        cache = '';
      }
    } else {
      cache = JSON.parse(cacheKey);
    }
    return cache;
  } catch (error) {
    return null;
  }
};

export const generateUrl = (keyword: string, page: number) => `${URL_API}/?apikey=${API_KEY}&s=*${keyword}*&page='${page}`
