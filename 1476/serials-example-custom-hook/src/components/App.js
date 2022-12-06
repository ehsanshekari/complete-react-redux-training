import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import SearchBar from './SearchBar';
import Loading from './Loading/Loading';
import useSerials from '../hooks/useSerials';

function App() {
  const [selectedSerial, setSelectedSerial] = useState(null);
  const initialSearchTerm = 'star wars';
  debugger;
  const [loading, error, serials, search] = useSerials(initialSearchTerm);

  useEffect(() => {
    if(serials.length){
      setSelectedSerial(serials[0].show);
    }
  }, [serials]);

  const onSerialClick = (serial) => {
    setSelectedSerial(serial);
  };

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
          <SerialList serials={serials} onItemClick={onSerialClick} />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar onFormSubmit={search} initialValue={initialSearchTerm} />
      {renderContent()}
    </div>
  );
}

export default App;
