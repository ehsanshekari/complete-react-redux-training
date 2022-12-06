import {useState} from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.initialValue)

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  }

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
          <button type="submit" className="btn btn-outline-primary">Search</button>
        </div>
      </form>
    );
}

export default SearchBar;
