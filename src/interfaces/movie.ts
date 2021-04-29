import { TMovieSearchType } from "../types/movie";

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: TMovieSearchType;
}

export interface IMovieResponse {
  Search: string[];
  totalResults: string;
  Response: string;
}

export interface IMovieState {
  movies: IMovie[];
}

export interface ISetMovieFetchAction {
  type: 'MOVIE_SET',
  payload: IMovie[];
}