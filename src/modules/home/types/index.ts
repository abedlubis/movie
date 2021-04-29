// Describing the shape of the home's slice of state
export interface IHomeState {
  loading: boolean;
  events: IEventsState[];
  movies: IMovieSingle[];
  totalMovies: number;
  page: number;
  channel: IChannelState[];
}

export interface IHomeModuleOwnState {
  homeState: IHomeState;
}

export interface IChannelState {
  id: string;
  name: string;
}

export interface IMovieSingle {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface IMoviesResponse {
  Search: IMovieSearch[];
  totalResults: string;
  Response: string;
}

interface IMovieSearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IEventsState {
  id: string;
  username: string;
  channel: string;
  title: string;
  description: string;
  avatar: string;
  image: string;
  start_date: string;
  end_date: string;
  start_time: string | null;
  end_time: string | null;
  total_going: number;
  total_like: number;
  is_going: boolean;
  is_like: boolean;
  created_date?: string;
  image_1?: string | null;
  image_2?: string | null;
  image_3?: string | null;
  image_4?: string | null;
}

export const HOME_LOADING = 'Home/Loading';
export const EVENT_LIST = 'Home/SetEventList';
export const ADD_EVENT_LIST = 'Home/AddEventList';
export const MOVIE_LIST = 'Home/SetMovieList';
export const ADD_MOVIE_LIST = 'Home/AddMovieList';
export const CHANNEL_LIST = 'Home/SetChannelList';
export const TOTAL_RESULTS = 'Home/SetTotalResults';

interface IHomeLoadingAction {
  type: typeof HOME_LOADING;
  loading: boolean;
}

interface ISetEventListAction {
  type: typeof EVENT_LIST;
  events: IEventsState[];
}

interface IAddEventListAction {
  type: typeof ADD_EVENT_LIST;
  events: IEventsState[];
}

interface ISetMovieListAction {
  type: typeof MOVIE_LIST;
  movies: IMovieSingle[];
}

interface IAddMovieListAction {
  type: typeof ADD_MOVIE_LIST;
  movies: IMovieSingle[];
}

interface ISetChannelListAction {
  type: typeof CHANNEL_LIST;
  channel: IChannelState[];
}

interface ISetTotalResultsAction {
  type: typeof TOTAL_RESULTS;
  totalResults: number;
}

export type HomeActionTypes =
  | IHomeLoadingAction
  | ISetEventListAction
  | IAddEventListAction
  | ISetMovieListAction
  | IAddMovieListAction
  | ISetChannelListAction
  | ISetTotalResultsAction;
