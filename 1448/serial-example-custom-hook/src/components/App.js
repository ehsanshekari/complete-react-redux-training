import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import SerialDetails from './SerialDetails';
import SerialList from './SerialList';
import Loading from './Loading/Loading';
import useSerials from '../hooks/useSerials';

const App = () => {
  const initialSearchTerm = 'star wars';
  const [loading, error, serials, search] = useSerials(initialSearchTerm);
  const [selectedSerial, setSelectedSerial] = useState(null);

  const onSerialClick = (serial) => {
    setSelectedSerial(serial);
  };

  useEffect(() => {
    if (serials.length) {
      setSelectedSerial(serials[0].show);
    }
  }, [serials]);

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
          <SerialDetails selectedSerial={selectedSerial} />
        </div>
        <div className="col-4">
          <SerialList serials={serials} onSerialClick={onSerialClick} />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar onSubmit={search} initialSearchTerm={initialSearchTerm} />
      {renderContent()}
    </div>
  );
};

export default App;
