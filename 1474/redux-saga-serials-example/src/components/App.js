import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import Spinner from './Spinner/Spinner';
import { fetchSerialList } from '../store/actions/serials';

function App() {
  const {
    data: serials,
    loading,
    error,
  } = useSelector((store) => store.serials);
  const initialSearch = 'star wars';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSerialList(initialSearch));
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <div className="alert alert-danger my-color">{error}</div>;
    }

    return (
      <div className="row">
        <div className="col-8">
          <SerialDetails selectedSerial={null} />
        </div>
        <div className="col-4">
          <SerialList serials={serials} />
        </div>
      </div>
    );
  };
  return (
    <div className="container mt-3">
      <SearchBar initialValue={initialSearch} />
      {renderContent()}
    </div>
  );
}

export default App;
