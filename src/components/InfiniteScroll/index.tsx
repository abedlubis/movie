import React, { useRef, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { IHomeModuleOwnState } from '../../modules/home/types';
import Loader from '../../assets/loader.svg';
import { ISearchModuleOwnState } from '../../modules/search/types';
import NoActivity from '../NoMovieFound';

interface IInfiniteScrollProps {
  loadData: () => void;
  isLoading: boolean;
  rootMargin: string;
}
const InfiniteScroll: React.FC<IInfiniteScrollProps> = (props) => {
  const { loadData, rootMargin, isLoading, children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const thresholdRef = useRef<HTMLDivElement>(null);

  const [isIntersecting, setIntersecting] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const movieList = useSelector(
    (state: IHomeModuleOwnState) => state.homeState.movies
  );
  const isSearch = useSelector(
    (state: ISearchModuleOwnState) => state.searchState.isSearch
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: `0px 0px 0px 0px`,
    });
    const refLast = thresholdRef.current;
    if (refLast) {
      observer.observe(refLast);
    }
  }, [thresholdRef, rootMargin]);

  useEffect(() => {
    if (isIntersecting && movieList.length <= 30) {
      console.log("got here 1")
      loadData();
      setIntersecting(false);
    } else if (movieList.length >= 10 && movieList.length <= 30) {
      console.log("got here 2")
      setIsLoadMore(true);
    } else if (movieList.length >= 100) {
      console.log("got here 3")
      setIsLoadMore(false);
    }
  }, [isIntersecting, isLoading, loadData, movieList]);

  const onIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setIntersecting(entry.isIntersecting);
      }
    });
  };

  return (
    <div ref={ref}>
      {children}
      <div
        ref={thresholdRef}
        style={{
          textAlign: 'center',
          marginLeft: '-16px',
          marginBottom: '16px',
          marginTop: '16px',
        }}
      >
        {isLoading ? <img src={Loader} alt="loading..." /> : null}
        {!isLoading && !isLoadMore && !isSearch && movieList.length !== 0
          ? 'No more activity'
          : null}
        {!isLoading && movieList.length === 0 ? (
          <NoActivity></NoActivity>
        ) : null}
      </div>
    </div>
  );
};

export default InfiniteScroll;
