import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import NotFound from './NotFound';
import Login from './Login/Login';
import Movie from './movies/Movie';
import EditMovie from './movies/EditMovie';
import MovieList from './movies/MovieList';
import CreateMovie from './movies/CreateMovie';
import DeleteMovie from './movies/DeleteMovie';
import { checkAuthStatus } from '../store';

const App = () => {
  const dispatch = useDispatch();
  const { data: authData } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  const routesToShow = () => {
    if (authData) {
      // Check if the user is logged in
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
