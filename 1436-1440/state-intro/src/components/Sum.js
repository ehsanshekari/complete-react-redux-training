import { Component } from "react";

class Sum extends Component {
  state = { number1: 0, number2: 0, sum: 0 };

  sum = () => {
    this.setState({ sum: this.state.number1 + this.state.number2 });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.number1}
          onChange={(e) => this.setState({ number1: parseInt(e.target.value) })}
        />
        <br />
        <input
          type="text"
          value={this.state.number2}
          onChange={(e) => this.setState({ number2: parseInt(e.target.value) })}
        />
        <br />
        <button onClick={this.sum}>Calculate Sum</button>
        <p>Input1: {this.state.number1}</p>
        <p>Input2: {this.state.number2}</p>
        <p>The sum is: {this.state.sum}</p>
      </div>
    );
  }
}

export default Sum;
