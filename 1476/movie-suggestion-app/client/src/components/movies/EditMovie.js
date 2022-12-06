import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateMovie, fetchMovie } from '../../store';
import MovieForm from './MovieForm';

const MovieEdit = () => {
  const dispatch = useDispatch();
  let { movieId } = useParams();

  const movieToEdit = useSelector((state) => state.movies[movieId]);

  // Remember each component is fetching its own data
  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  const onFormSubmit = (name, description) => {
    dispatch(updateMovie(movieId, name, description));
  };

  return (
    <>
      <MovieForm
        onFormSubmit={onFormSubmit}
        initialValue={{
          name: movieToEdit && movieToEdit.name,
          description: movieToEdit && movieToEdit.description,
        }}
      />
    </>
  );
};

export default MovieEdit;
