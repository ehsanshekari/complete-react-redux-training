import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovie } from '../../store';

const Movie = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const movie = useSelector((state) => state.movies[movieId]);

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  const showMovie = () => {
    if (movie) {
      return (
        <div>
          <h3>{movie.name}</h3>
          <p>{movie.description}</p>
        </div>
      );
    }
    return null;
  };

  return <div className="mt-3 p-3">{showMovie()}</div>;
};

export default Movie;
