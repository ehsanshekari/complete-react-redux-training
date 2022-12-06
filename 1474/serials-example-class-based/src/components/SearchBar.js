import React from "react";

class SearchBar extends React.Component {
  state = {term: this.props.initialValue}

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search for a series"
            value={this.state.term}
            onChange={(e) => this.setState({term:e.target.value})}
          />
          <button type="submit" className="btn btn-outline-primary">Search</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
