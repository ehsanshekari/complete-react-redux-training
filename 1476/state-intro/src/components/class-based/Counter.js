import { Component } from 'react';

class Counter extends Component {
  state = { counter: 0, myInput: '' };

  // constructor() {
  //   super();
  //   this.state = { counter: 0 };
  //   this.add = this.add.bind(this);
  // }

  // add() {
  //   this.setState({ counter: this.state.counter + 1 });
  // }

  subtract = () => {
    this.setState((state) => {
      return { counter: state.counter - 1 };
    });
  };

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <input
          type="text"
          value={this.state.myInput}
          onChange={(e) => this.setState({ myInput: e.target.value })}
        />
        <p>The input value is: {this.state.myInput}</p>

        <p>The counter current value is: {this.state.counter}</p>

        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Add
        </button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default Counter;
