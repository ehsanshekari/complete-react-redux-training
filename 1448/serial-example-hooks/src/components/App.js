import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import SerialDetails from './SerialDetails';
import SerialList from './SerialList';
import Loading from './Loading/Loading';

const App = () => {
  const [serialResponse, setSerialResponse] = useState({serials:[], loading: false, error: null});
  // const [serials, setSerials] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [selectedSerial, setSelectedSerial] = useState(null);
  const initialSearchTerm = 'star wars';

  const search = async (searchTerm) => {
    setSerialResponse({...serialResponse, loading: true});
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
      );
      setSerialResponse({loading: false, serials: response.data, error: null});    
      setSelectedSerial(response.data[0].show);
    } catch (e) {
      setSerialResponse({loading: false, serials: [], error: e.message});    
      setSelectedSerial(null);
    }
  };

  const onSerialClick = (serial) => {
    setSelectedSerial(serial);
  };

  useEffect(() => {
    search(initialSearchTerm);
  }, []);

  // componentDidMount() {
  //   console.log('componentDidMount is called');
  //   this.search(this.initialSearchTerm);
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate is called');
  // }

  const renderContent = () => {
    const {serials, error, loading} = serialResponse
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
