import { useState } from 'react';

const SearchBar = ({initialSearchTerm, onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search your serial"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
        <button type="Submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
