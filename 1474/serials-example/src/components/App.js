import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import Spinner from './Spinner/Spinner';

function App() {
  // const [serials, setSerials] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [serialResponse, setSerialResponse] = useState({
    serials: [],
    error: null,
    loading: false,
  });
  const [selectedSerial, setSelectedSerial] = useState(null);
  const initialSearch = 'star wars';

  const search = async (term) => {
    debugger;
    setSerialResponse({...serialResponse, loading: false});
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );
      console.log('App > search > response.data', response.data);

      // setSerials(response.data);
      // setLoading(false);
      // setError(null);
      setSerialResponse({loading: false, error: null, serials: response.data});
      setSelectedSerial(response.data[0].show);
    } catch (e) {
      setSerialResponse({loading: false, error: e.message, serials: []});
      // setSerials([]);
      // setLoading(false);
      // setError(e.message);
      setSelectedSerial(null);

    }
  };

  const onItemClick = (serial) => {
    setSelectedSerial(serial);
  };

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   this.search(this.initialSearch);
  // }

  useEffect(() => {
    search(initialSearch);
  }, []);

  // componentDidUpdate(){
  //   console.log('componentDidUpdate');
  // }

  const renderContent = () => {
    const {loading, error, serials} = serialResponse;
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
