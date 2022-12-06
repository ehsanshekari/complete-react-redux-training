// How to initialize state
// How to update state -> setState
// Handle Event -> Handle input
// Be carful about this

import { Component } from 'react';

class Sum extends Component {
  constructor() {
    super();
    this.state = { number1: 0, number2: 0, sum: 0 };
  }

  onClick = () => {
    this.setState({ sum: this.state.number1 + this.state.number2 });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.number1}
          onChange={(event) => {
            this.setState({ number1: parseInt(event.target.value || 0) });
          }}
        />
        <br />
        <input
          type="text"
          value={this.state.number2}
          onChange={(event) => {
            this.setState({ number2: parseInt(event.target.value || 0) });
          }}
        />
        <br />
        <button onClick={this.onClick}>Sum</button>
        <br />
        <p>Input1:{this.state.number1}</p>
        <p>Input2:{this.state.number2}</p>
        <p>Sum:{this.state.sum}</p>
      </div>
    );
  }
}

export default Sum;
