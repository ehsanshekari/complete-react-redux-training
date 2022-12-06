import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createMovie } from '../../store';
import MovieForm from './MovieForm';

const CreateMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate('/movies');
  };

  const onFormSubmit = (name, description) => {
    dispatch(createMovie(name, description, onSuccess));
  };

  return (
    <MovieForm
      initialValue={{ name: '', description: '' }}
      onFormSubmit={onFormSubmit}
    />
  );
};

export default CreateMovie;
