import React from 'react';
import Image from '../UI/Image/Image';
import './index.css';
import { useHistory } from 'react-router-dom';

interface IEventContentProps {
  id: string;
  poster: string;
}

const MovieContent: React.FC<IEventContentProps> = (props) => {
  const {
    id,
    poster,
  } = props;

  const history = useHistory();


  const goToDetail = (id: string) => {
    history.push(`/movie/${id}`);
  };

  return (
    <div className="EventContent" onClick={() => goToDetail(id)}>
      <Image src={poster} alt={id} className="h100 w150"></Image>
    </div>
  );
};

export default MovieContent;
