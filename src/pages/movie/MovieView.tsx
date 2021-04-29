import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import './MovieStyle.css';
import '../../components/MovieContent/index.css';
import {
  getCache,
} from '../../utils/utility';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieContent, setMovieList, getMovieDetail } from '../../modules/home/actions';
import { IMovieSingle, IHomeModuleOwnState } from '../../modules/home/types';

interface IMovieParams {
  id: string;
}

function MovieView(props: RouteComponentProps) {
  let { id } = useParams<IMovieParams>();
  const dispatch = useDispatch();

  const movieList = useSelector(
    (state: IHomeModuleOwnState) => state.homeState.movies
  );

  const [detailMovie, setDetailMovie] = useState<IMovieSingle | any>();

  useEffect(() => {
    if (getCache('movies').length === 0) {
      dispatch(getMovieContent(true));
    } else {
      dispatch(setMovieList(getCache('movies'), false));
    }
  }, [dispatch]);

  useEffect(() => {
    setDetailMovie(getMovieDetail(movieList, id));
  }, [dispatch, movieList, id]);

  return (
    <div className="Event container">
      
    </div>
  );
}

export default MovieView;
