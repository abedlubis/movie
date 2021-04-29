// Describing the shape of the home's slice of state
export interface IHomeState {
  loading: boolean;
  movies: IMovieSingle[];
  totalMovies: number;
  page: number;
}

export interface IHomeModuleOwnState {
  homeState: IHomeState;
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


export const HOME_LOADING = 'Home/Loading';
export const MOVIE_LIST = 'Home/SetMovieList';
export const ADD_MOVIE_LIST = 'Home/AddMovieList';
export const TOTAL_RESULTS = 'Home/SetTotalResults';

interface IHomeLoadingAction {
  type: typeof HOME_LOADING;
  loading: boolean;
}

interface ISetMovieListAction {
  type: typeof MOVIE_LIST;
  movies: IMovieSingle[];
}

interface IAddMovieListAction {
  type: typeof ADD_MOVIE_LIST;
  movies: IMovieSingle[];
}


interface ISetTotalResultsAction {
  type: typeof TOTAL_RESULTS;
  totalResults: number;
}

export type HomeActionTypes =
  | IHomeLoadingAction
  | ISetMovieListAction
  | IAddMovieListAction
  | ISetTotalResultsAction;
