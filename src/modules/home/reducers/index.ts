import {
  HOME_LOADING,
  ADD_MOVIE_LIST,
  IHomeState,
  HomeActionTypes,
  IMovieSingle,
  TOTAL_RESULTS,
} from '../types';
import { loadHomeState } from '../../../utils/utility';

const homeState: IHomeState = loadHomeState();
const homeReducer = (
  state: IHomeState = homeState,
  action: HomeActionTypes
): IHomeState => {
  switch (action.type) {
    case ADD_MOVIE_LIST:
      const movies: IMovieSingle[] = [...state.movies, ...action.movies];
      localStorage.setItem('movies', JSON.stringify(movies));
      return { ...state, movies };
    case HOME_LOADING:
      return { ...state, loading: action.loading };
    case TOTAL_RESULTS:
      return { ...state, totalMovies: action.totalResults };
    default:
      return state;
  }
};

export default homeReducer;
