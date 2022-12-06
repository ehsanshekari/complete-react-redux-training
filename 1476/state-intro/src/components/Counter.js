import React from 'react';

function Counter() {
  let counter = 0;

  const add = () => {
    console.log('I am add function');
    counter = counter + 1;
    console.log(counter);
  }

  const subtract = () => {
    console.log('I am subtract function');
    counter = counter - 1;
  }

  return (
    <div>
      <h3>Counter</h3>
      <p>The counter current value is: {counter}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default Counter;
