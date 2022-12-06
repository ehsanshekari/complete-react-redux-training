import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import List from './List';
import WithLoading from './WithLoading';

const RepoList = WithLoading(List);

const App = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const result = await axios.get(
        'https://api.github.com/users/ehsanshekari/repos'
      );
      setRepos(result.data);
      setLoading(false);
    };

    fetchRepos();
  }, []);

  return (
    <div className="container mt-3">
      <RepoList items={repos} isLoading={loading} x="10" y="20"/>
    </div>
  );
};

export default App;
