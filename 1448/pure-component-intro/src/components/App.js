import React from 'react';
import OptimizedComponent from './class-based/OptimizedComponent';
import RegularComponent from './functional/RegularComponent';

class App extends React.Component {
  state = {
    name: 'Ehsan',
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'Ehsan' });
    }, 3000);
  }

  render() {
    return (
      <div>
        <RegularComponent name={this.state.name} />
        <OptimizedComponent name={this.state.name} />
      </div>
    );
  }
}

export default App;
