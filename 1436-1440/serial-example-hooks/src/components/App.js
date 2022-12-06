import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import SerialDetails from './SerialDetails';
import SerialList from './SerialList';
import Loading from './Loading/Loading';

const App = () => {
  const [serials, setSerials] = useState([]);
  const [selectedSerial, setSelectedSerial] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = async (term) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );

      setLoading(false);
      setSerials(response.data);
      setSelectedSerial(response.data[0].show);
      setError('');
    } catch (e) {
      setLoading(false);
      setSerials([]);
      setSelectedSerial(null);
      setError(e.message);
    }
  };

  const onItemClick = (serial) => {
    setSelectedSerial(serial);
  };

  useEffect(() => {
    search("dororo");
  }, [])
  
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
          <SerialList
            serials={serials}
            onItemClick={onItemClick}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar onSubmit={search} initialValue="dororo" />
      {renderContent()}
    </div>
  );
};

export default App;
