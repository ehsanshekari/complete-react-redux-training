import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import SerialList from './SerialList';
import Loading from './Loading/Loading';
import SerialDetails from './SerialDetails';
import { fetchSerials } from '../redux/action-creators/serials';

const App = () => {
  const initialSearchTerm = 'star wars';
  const {
    loading,
    error,
    data: serials,
  } = useSelector((store) => store.serials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSerials(initialSearchTerm));
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    return (
      <div className="row">
        <div className="col-4">
          <SerialList serials={serials} />
        </div>
        <div className='col-8'>
          <SerialDetails />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar initialSearchTerm={initialSearchTerm} />
      {renderContent()}
    </div>
  );
};

export default App;
