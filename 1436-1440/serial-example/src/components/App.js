import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchBar from "./SearchBar";
import SerialDetails from "./SerialDetails";
import SerialList from "./SerialList";
import Loading from "./Loading/Loading";

class App extends React.Component {
  state = { serials: [], selectedSerial: null, loading: false, error: "" };

  search = async (term) => {
    this.setState({ loading: true });

    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );

      console.log('App >  search > response.data:', response.data);

      this.setState({
        serials: response.data,
        selectedSerial: response.data[0].show,
        loading: false,
        error: '',
      });
    } catch (e) {
      this.setState({ error: e.message, loading: false, serials:[] });
    }
  };

  onItemClick = (serial) => {
    this.setState({ selectedSerial: serial });
  };

  componentDidMount() {
    console.log("log form componentDidMount");
    this.search("star wars");
  }

  componentDidUpdate() {
    console.log("log form componentDidUpdate");
  }

  renderContent() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.error) {
      return <div className="alert alert-danger">{this.state.error}</div>;
    }

    return (
      <div className="row">
        <div className="col-8">
          <SerialDetails selectedSerial={this.state.selectedSerial} />
        </div>
        <div className="col-4">
          <SerialList
            serials={this.state.serials}
            onItemClick={this.onItemClick}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container mt-3">
        <SearchBar onSubmit={this.search} initialValue="star wars" />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
