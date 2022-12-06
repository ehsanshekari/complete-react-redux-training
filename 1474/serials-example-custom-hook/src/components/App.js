import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import Spinner from './Spinner/Spinner';
import useSerials from '../hooks/useSerials';

function App() {
  const [selectedSerial, setSelectedSerial] = useState(null);
  const initialSearch = 'dororo';
  const [loading, error, serials, search] = useSerials(initialSearch);

  useEffect(() => {
    if (serials.length) {
      setSelectedSerial(serials[0].show);
    }
  }, [serials]);

  const onItemClick = (serial) => {
    setSelectedSerial(serial);
  };

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
          <SerialDetails selectedSerial={selectedSerial} />
        </div>
        <div className="col-4">
          <SerialList serials={serials} onItemClick={onItemClick} />
        </div>
      </div>
    );
  };
  return (
    <div className="container mt-3">
      <SearchBar onSubmit={search} initialValue={initialSearch} />
      {renderContent()}
    </div>
  );
}

export default App;
