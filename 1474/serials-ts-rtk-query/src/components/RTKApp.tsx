import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import Spinner from './Spinner/Spinner';
import { SerialData, useGetSerialsQuery } from '../services/serialApi';

function App() {
  const [term, setTerm] = useState('star wars');
  const { data: serials, isLoading, isError, error } = useGetSerialsQuery(term);
  const [selectedSerial, setSelectedSerial] = useState<SerialData | null>(null);

  useEffect(() => {
    if (serials) {
      setSelectedSerial(serials[0].show);
    }
  }, [serials]);

  const onItemClick = (serial: SerialData) => {
    setSelectedSerial(serial);
  };

  const renderContent = () => {
    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      if ('error' in error) {
        return <div className="alert alert-danger my-color">{error.error}</div>;
      }
    }

    return (
      <div className="row">
        <div className="col-8">
          <SerialDetails selectedSerial={selectedSerial} />
        </div>
        <div className="col-4">
          {serials && (
            <SerialList serials={serials} onItemClick={onItemClick} />
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="container mt-3">
      <SearchBar
        onSubmit={(term: string) => setTerm(term)}
        initialValue={term}
      />
      {renderContent()}
    </div>
  );
}

export default App;
