import React, { useEffect, useState } from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import './HomeStyle.css';
import {
  getHomeModule,
  IHomeModuleOwnState,
} from '../../modules/home/homeModule';
import { getMovieContent } from '../../modules/home/actions';
import EventContent from '../../components/MovieContent';
import InfiniteScroll from '../../components/InfiniteScroll';
import ScrollToTop from '../../components/ScrollToTop';


function HomeView(props: RouteComponentProps) {
  const movieList = useSelector(
    (state: IHomeModuleOwnState) => state.homeState.movies
  );

  const loading = useSelector(
    (state: IHomeModuleOwnState) => state.homeState.loading
  );

  const [firstLoad, setFirstLoad] = useState(true);

  const [currentLoadPage, setCurrentloadPage] = useState(1)

  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      setFirstLoad(false);
      await dispatch(getMovieContent(false));
    }
    init();
    // eslint-disable-next-line
  }, [dispatch]);

  const onLoadData = async () => {
    if (!firstLoad) {
      await dispatch(getMovieContent(true, currentLoadPage));
      setCurrentloadPage(currentLoadPage + 1);
    }
  };

  return (
    <DynamicModuleLoader modules={[getHomeModule()]}>
      <ScrollToTop></ScrollToTop>
      <div className="Home container">
        <InfiniteScroll
          loadData={onLoadData}
          rootMargin={movieList.length <= 10 ? '400' : '0'}
          isLoading={loading}
        >
          <div className="movie-container">
            {movieList &&
              movieList.length > 0 &&
              movieList.map((movie) => (
                <EventContent
                  id={movie.imdbID}
                  key={movie.imdbID}
                  poster={movie.poster}
                ></EventContent>
              ))}
          </div>
        </InfiniteScroll>
      </div>
    </DynamicModuleLoader>
  );
}

export default HomeView;
