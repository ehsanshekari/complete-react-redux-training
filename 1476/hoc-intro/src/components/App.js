import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import List from './List';
import withLoading from '../hoc/withLoading';

const RepoListWithLoading = withLoading(List);

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchRepos = async () => {
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
      <RepoListWithLoading isLoading={loading} items={repos}/>
    </div>
  );
};

export default App;
