import React from 'react';

import RegularComponent from './functional/RegularComponent';
import OptimizedComponent from './functional/OptimizedComponent';


class App extends React.Component {
  state = {
    name: 'Ehsan'
  }

  componentDidMount(){
    setInterval(()=> this.setState({name: 'Ehsan'}), 3000)
  }

  render(){
    return (
      <div className="container mt-3">
        {console.log('App > render:')}
        <RegularComponent name={this.state.name}/>
        <OptimizedComponent name={this.state.name}/>
      </div>
    );
  }
};

export default App;
