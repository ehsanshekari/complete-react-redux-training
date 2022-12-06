import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';

import { deleteMovie, fetchMovie } from '../../store';

const SerialDelete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let { movieId } = useParams();
  const movieToDelete = useSelector((state) => state.movies[movieId]);

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  const deleteAction = () => {
    dispatch(
      deleteMovie(movieId, () => {
        navigate('/movies');
      })
    );
  };

  return (
    <Modal
      title="Delete Movie"
      body={`Are you sure you want to delete ${
        movieToDelete && movieToDelete.name
      }?`}
      onApply={deleteAction}
      onCancel={() => navigate('/movies')}
    />
  );
};

export default SerialDelete;
