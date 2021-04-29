import {
  HOME_LOADING,
  EVENT_LIST,
  CHANNEL_LIST,
  ADD_EVENT_LIST,
  ADD_MOVIE_LIST,
  IHomeState,
  HomeActionTypes,
  IEventsState,
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
    case EVENT_LIST:
      return { ...state, events: action.events };
    case ADD_EVENT_LIST:
      const list: IEventsState[] = [...state.events, ...action.events];
      localStorage.setItem('events', JSON.stringify(list));
      return { ...state, events: list };
    case CHANNEL_LIST:
      return { ...state, channel: action.channel };
    case TOTAL_RESULTS:
      return { ...state, totalMovies: action.totalResults };
    default:
      return state;
  }
};

export default homeReducer;
