import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import Spinner from './Spinner/Spinner';
import { Serial, SerialData } from '../services/serialApi';

function App() {
  const [serialResponse, setSerialResponse] = useState<{
    serials: Serial[];
    error: null | string;
    loading: boolean;
  }>({
    serials: [],
    error: null,
    loading: false,
  });
  const [selectedSerial, setSelectedSerial] = useState<SerialData | null>(null);
  const initialSearch = 'star wars';

  const search = useCallback(
    async (term: string) => {
      setSerialResponse({ ...serialResponse, loading: false });
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${term}`
        );
        console.log('App > search > response.data', response.data);
        setSerialResponse({
          loading: false,
          error: null,
          serials: response.data,
        });
        setSelectedSerial(response.data[0].show);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setSerialResponse({ loading: false, error: e.message, serials: [] });
          setSelectedSerial(null);
        } else {
          console.log('Unexpected Error:', e);
        }
      }
    },
    [serialResponse]
  );

  const onItemClick = (serial: SerialData) => {
    setSelectedSerial(serial);
  };

  useEffect(() => {
    search(initialSearch);
  }, [search]);

  const renderContent = () => {
    const { loading, error, serials } = serialResponse;
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
