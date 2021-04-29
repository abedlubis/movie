import axios from "axios";

import { Dispatch } from 'redux';
import {
  HOME_LOADING,
  HomeActionTypes,
  MOVIE_LIST,
  ADD_MOVIE_LIST,
  TOTAL_RESULTS,
  IMovieSingle,
} from '../types';
import { getCache, handleResponseFetchMovies } from '../../../utils/utility';

export const setHomeLoading = (loading: boolean): HomeActionTypes => {
  return {
    type: HOME_LOADING,
    loading,
  };
};
export const setMovieList = (
  list: IMovieSingle[],
  save: boolean = true
): HomeActionTypes => {
  if (save) {
    localStorage.setItem('movies', JSON.stringify(list));
  }
  return {
    type: MOVIE_LIST,
    movies: list,
  };
};

export const addMovieList = (list: IMovieSingle[]): HomeActionTypes => {
  return {
    type: ADD_MOVIE_LIST,
    movies: list,
  };
};

export const setTotalMovies = (totalResults: number): HomeActionTypes => {
  return {
    type: TOTAL_RESULTS,
    totalResults,
  };
};

export const getMovieContent = (add?: boolean, page?: number) => {
  return async (dispatch: Dispatch) => {
    let movies = await getCache('movies');
    if (movies === null || add) {
      console.log(page,"---page")
      dispatch(setHomeLoading(true));
      const url = process.env.REACT_APP_API_URL + '/';
      axios
        .get(url, {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            s: `*the*`,
            page: page || 1,
          },
        })
        .then(async (response) => {;
          const data = response.data
          console.log("data",data)
          const movieReduce: IMovieSingle[]  = handleResponseFetchMovies(data);
          if (add) {
            await dispatch(addMovieList(movieReduce));
          } else {
            // await dispatch(setEventList(editTime));
            await dispatch(setMovieList(movieReduce));
          }
          await dispatch(setTotalMovies(data.totalResults));
          dispatch(setHomeLoading(false));
        })
        .catch(() => {
          console.log("errrr")
          dispatch(setHomeLoading(false));
        });
    } else {
      await dispatch(setMovieList(movies));
    }
  };
};

export const getMovieDetail = (movies: IMovieSingle[] | any, key: string) => {
  const filtered = movies.filter((movie: IMovieSingle | any) => {
    return movie['imdbID'] === key;
  });
  return filtered.length > 0 ? filtered[0] : {};
};
