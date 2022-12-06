import React from 'react';

import OptimizedComponent from './functional/OptimizedComponent';
import RegularComponent from './functional/RegularComponent';

class App extends React.Component {
  state = {
    name: 'Ehsan'
  }
  
  //const [name, setName] = useState('');

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log('setInterval!!!!!');
  //     setName('Ehsan')
  //   }, 3000);
  // });

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
