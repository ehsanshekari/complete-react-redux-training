import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import SearchBar from './SearchBar';
import Loading from './Loading/Loading';
import { fetchSerials } from '../store/';

function App() {
  const initialSearchTerm = 'dororo';
  const dispatch = useDispatch();
  const {loading, error, data: serials} = useSelector((store) => store.serials);

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
      <SearchBar initialValue={initialSearchTerm} />
      {renderContent()}
    </div>
  );
}

export default App;
