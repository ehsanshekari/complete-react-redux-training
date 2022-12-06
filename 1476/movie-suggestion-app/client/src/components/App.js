import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import CreateMovie from './movies/CreateMovie';
import DeleteMovie from './movies/DeleteMovie';
import EditMovie from './movies/EditMovie';
import Movie from './movies/Movie';
import MovieList from './movies/MovieList';
import Login from './Login/Login';
import NotFound from './NotFound';
import Navbar from './Navbar';
import { checkAuthStatus } from '../store';

const App = () => {
  const { data: authData } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  const routesToShow = () => {
    if (authData) {
      return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/movies" element={<MovieList />}></Route>
            <Route path="/movies/:movieId" element={<Movie />}></Route>
            <Route path="/movies/create" element={<CreateMovie />}></Route>
            <Route path="/movies/edit/:movieId" element={<EditMovie />}></Route>
            <Route
              path="/movies/delete/:movieId"
              element={<DeleteMovie />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      );
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return (
    <div className="container mt-3">
      <ToastContainer />
      {routesToShow()}
    </div>
  );
};

export default App;
