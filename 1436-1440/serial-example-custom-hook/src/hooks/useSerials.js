import { useState, useEffect } from 'react';
import axios from 'axios';

const useSerials = (term) => {
  const [serials, setSerials] = useState([]);
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
      setError('');
    } catch (e) {
      setLoading(false);
      setSerials([]);
      setError(e.message);
    }
  };

  useEffect(() => {
    search(term);
  }, [term]);

  return [loading, error, serials, search]
};

export default useSerials;
