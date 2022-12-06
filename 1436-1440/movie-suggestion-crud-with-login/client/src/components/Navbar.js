import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthButton from './AuthButton';

const Navbar = () => {
  const { data: authData } = useSelector((state) => state.login);

  const linksToShow = () => {
    if (authData) {
      return (
        <Link className="nav-link" to="/movies/create">
          Create
        </Link>
      );
    }
  };

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        {linksToShow()}
        <div className="d-flex">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
