import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import SerialList from './SerialList';
import SerialDetails from './SerialDetails';
import SearchBar from './SearchBar';
import Loading from './Loading/Loading';

class App extends React.Component {
  state = { serials: [], selectedSerial: null, loading: false, error: null };

  componentDidMount(){
    this.search("dororo");
  }

  // componentDidUpdate(){
  //   console.log(':::: componentDidUpdate :::::');
  // }

  search = async (term) => {
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );
      console.log('App > search > response.data:', response.data);
      this.setState({ serials: response.data, loading: false, error: null, selectedSerial: response.data[0].show});
    } catch (e) {
      this.setState({ error: e.message, serials: [], loading: false });
    }
  };

  onSerialClick = (serial) => {
    this.setState({ selectedSerial: serial });
  };

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
            onItemClick={this.onSerialClick}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container mt-3">
        <SearchBar onFormSubmit={this.search} initialValue="dororo"/>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
