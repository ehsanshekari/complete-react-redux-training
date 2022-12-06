import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../store';

const AuthButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(logout());
    navigate('/');
  };

  const createButtons = () => {
    return (
      <button onClick={signOut} type="button" className="btn btn-danger">
        Logout
      </button>
    );
  };

  return createButtons();
};

export default AuthButton;
