import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovieList } from '../../store';

const MovieList = () => {
  const dispatch = useDispatch();

  let movies = useSelector((state) => state.movies);
  movies = Object.values(movies);

  let email = useSelector((state) => state.login.data.email);

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  const addButtons = (movie) => {
    if (movie.creator === email) {
      return (
        <div className="float-end">
          <Link className="btn btn-info" to={`/movies/edit/${movie.id}`} style={{marginRight: '2px'}}>
            Edit
          </Link>
          <Link className="btn btn-primary" to={`/movies/delete/${movie.id}`} style={{marginRight: '2px'}}>
            Delete
          </Link>
          <Link className="btn btn-secondary" to={`/movies/${movie.id}`}>
            View
          </Link>
        </div>
      );
    }
    return (
      <div className="float-end">
        <Link className="btn btn-secondary" to={`/movies/${movie.id}`}>
          View
        </Link>
      </div>
    );
  };

  const moviesToShow = movies.map((movie) => (
    <div
      key={movie.id}
      className="mt-3 p-3"
      style={{ backgroundColor: '#F2F2F2' }}
    >
      {movie.name}
      {addButtons(movie)}
    </div>
  ));

  return <div>{moviesToShow}</div>;
};

export default MovieList;
