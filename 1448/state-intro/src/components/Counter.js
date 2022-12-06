import { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  // constructor() {
  //   super();
  //   this.state = { count: 0 };
  //   // this.add = this.add.bind(this);
  // }

  // add() {
  //   console.log('This is add function!');
  //   this.setState({ count: this.state.count + 1 });
  // }

  add = () => {
    console.log('This is add function!');
    // this.setState({ count: this.state.count + 1 });
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  // subtract = () => {
  //   this.setState({ count: this.state.count -1 });
  // }

  render() {
    return (
      <div>
        <h3>Counter Component</h3>
        <p>The counter value is: {this.state.count}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Subtract
        </button>
      </div>
    );
  }
}

export default Counter;
