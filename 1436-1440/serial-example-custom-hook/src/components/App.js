import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import SerialDetails from './SerialDetails';
import SerialList from './SerialList';
import Loading from './Loading/Loading';
import useSerials from '../hooks/useSerials';

const App = () => {
  const [loading, error, serials, search] = useSerials('star wars');
  const [selectedSerial, setSelectedSerial] = useState(null);


  useEffect(() => {
    if(serials.length){
      setSelectedSerial(serials[0].show);
    }
  }, [serials]);

  const onItemClick = (serial) => {
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
          <SerialList serials={serials} onItemClick={onItemClick} />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar onSubmit={search} initialValue="star wars" />
      {renderContent()}
    </div>
  );
};

export default App;
