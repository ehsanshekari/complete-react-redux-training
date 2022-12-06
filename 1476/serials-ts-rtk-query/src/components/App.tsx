import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import SearchBar from './SearchBar';
import Loading from './Loading/Loading';
import { Serial, SerialData } from '../services/serialApi';

function App() {
  const [serialResponse, setSerialResponse] = useState<{
    serials: Serial[];
    error: null | string;
    loading: boolean;
  }>({
    serials: [],
    loading: false,
    error: null,
  });
  const [selectedSerial, setSelectedSerial] = useState<SerialData | null>(null);

  const initialSearchTerm = 'dororo';

  const search = useCallback(
    async (term: string) => {
      setSerialResponse({ ...serialResponse, loading: true });
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${term}`
        );
        console.log('App > search > response.data:', response.data);
        setSerialResponse({
          serials: response.data,
          error: null,
          loading: false,
        });
        setSelectedSerial(response.data[0].show);
      } catch (e: unknown) {
        if(e instanceof Error) {
          setSerialResponse({ serials: [], error: e.message, loading: false });
          setSelectedSerial(null);
        } else {
          console.log(e);
        }
      }
    },
    [serialResponse]
  );

  useEffect(() => {
    search(initialSearchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSerialClick = (serial: SerialData) => {
    setSelectedSerial(serial);
  };

  const renderContent = () => {
    const { loading, error, serials } = serialResponse;
    console.log(loading, error, serials);

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
