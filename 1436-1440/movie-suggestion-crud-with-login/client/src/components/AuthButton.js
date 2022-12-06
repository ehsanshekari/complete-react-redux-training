import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../store';

const AuthButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.login);

  const signOut = () => {
    dispatch(logout());
    navigate('/');
  };

  const createButtons = () => {
    if (data) {
      return (
        <button onClick={signOut} type="button" className="btn btn-danger">
          Logout
        </button>
      );
    }

    return (
      <Link to="/" className="btn btn-primary">
        Login
      </Link>
    );
  };

  return createButtons();
};

export default AuthButton;
