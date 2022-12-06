import axios from 'axios';
import { useEffect, useState } from 'react';

const useSerials = (term) => {
  debugger;
  const [serials, setSerials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (term) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );
      setSerials(response.data);
      setLoading(false);
      setError(null);
    } catch (e) {
      setSerials([]);
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    search(term);
  }, [term])

  return [loading, error, serials, search];
};

export default useSerials;
