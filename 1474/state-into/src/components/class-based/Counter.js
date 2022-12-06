import React from 'react';

class Counter extends React.Component {
  state = { counter: 0 };

  // constructor(){
  //   super();
  //   this.state = {counter: 0, myName: 'Tom'}
  //   this.add = this.add.bind(this);
  //  }

  add = () => {
    console.log('Add Button is clicked!');
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };

  // subtract = () => {
  //   console.log('Add Button is clicked!');
  //   this.setState({ counter: this.state.counter - 1 });
  // };

  render() {
    return (
      <div>
        <h3>Counter Component</h3>
        <p>The counter current value is:{this.state.counter}</p>
        <button onClick={this.add}>Add</button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Subtract
        </button>
      </div>
    );
  }
}

export default Counter;
