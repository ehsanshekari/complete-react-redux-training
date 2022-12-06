import {useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from './SearchBar';
import SerialDetails from './SerialDetails';
import SerialList from './SerialList';
import Loading from './Loading/Loading';
import { fetchSerials } from '../redux/action-creators';

const App = () => {
  const { loading, error, data } = useSelector((store) => store.serials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSerials('dororo'));
  }, [dispatch])

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
          <SerialDetails />
        </div>
        <div className="col-4">
          <SerialList serials={data} />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar initialValue="dororo" />
      {renderContent()}
    </div>
  );
};

export default App;
