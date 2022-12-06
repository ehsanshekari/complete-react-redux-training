import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSerialList } from '../store/actions/serials';

function SearchBar({ initialValue }) {
  const dispatch = useDispatch();
  const [term, setTerm] = useState(initialValue);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSerialList(term));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded"
          placeholder="Search for a serial"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
