import { Link } from 'react-router-dom';

import AuthButton from './AuthButton';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        <Link className="nav-link" to="/movies/create">
          Create
        </Link>
        <div className="d-flex">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
