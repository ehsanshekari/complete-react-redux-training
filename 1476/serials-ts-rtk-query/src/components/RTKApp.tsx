import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import SearchBar from './SearchBar';
import Loading from './Loading/Loading';
import { SerialData, useGetSerialsQuery } from '../services/serialApi';

function RTKApp() {
  const [term, setTerm] = useState('dororo');
  const { data: serials, isLoading, isError, error } = useGetSerialsQuery(term);
  const [selectedSerial, setSelectedSerial] = useState<SerialData | null>(null);

  useEffect(() => {
    if (serials) {
      setSelectedSerial(serials[0].show);
    }
  }, [serials]);

  const onSerialClick = (serial: SerialData) => {
    setSelectedSerial(serial);
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      if ('error' in error)
        return <div className="alert alert-danger">{error.error}</div>;
    }

    return (
      <div className="row">
        <div className="col-8">
          <SerialDetails selectedSerial={selectedSerial} />
        </div>
        <div className="col-4">
          {serials && (
            <SerialList serials={serials} onItemClick={onSerialClick} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar
        onFormSubmit={(term: string) => setTerm(term)}
        initialValue={term}
      />
      {renderContent()}
    </div>
  );
}

export default RTKApp;
