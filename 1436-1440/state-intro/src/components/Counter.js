// 1. Define state object
// 2. state can only be updated by calling setState function
// 3. if you have this problem try to use arrow function

import React from "react";

class Counter extends React.Component {
  // state = { count: 0 };

  constructor() {
    super();
    this.state = { count: 0 };
    // this.add = this.add.bind(this);
  }

  //   add = () => {
  //     console.log("This is add function.");
  //     this.setState({ count: this.state.count + 1 });
  //   }

  subtract = () => {
    console.log("This is subtract function.");
    this.setState({ count: this.state.count - 1 });
    // this.setState((state) => {
    //   return { count: state.count - 1 };
    // });
  };

  render() {
    return (
      <div>
        <h3>Counter Component</h3>
        <p>The current value count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default Counter;
