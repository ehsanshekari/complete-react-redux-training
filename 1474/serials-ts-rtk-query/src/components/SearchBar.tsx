import { useState } from 'react';

interface SearchBarProps {
  initialValue: string;
  onSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [term, setTerm] = useState(props.initialValue);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(term);
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
};

export default SearchBar;
