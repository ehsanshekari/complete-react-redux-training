import React, { useState } from 'react';

interface SearchBarProps {
  initialValue: string;
  onFormSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  initialValue,
  onFormSubmit: onFormSubmitHandler,
}) => {
  const [term, setTerm] = useState(initialValue);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmitHandler(term);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search for a series"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
