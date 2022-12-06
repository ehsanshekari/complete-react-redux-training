import React from 'react'

function Counter() {
  let counter = 0;

  const add = () => {
    console.log('Add Button is clicked!');
    counter = counter + 1;
    console.log(counter);
  }

  const subtract = () => {
    console.log('Add Button is clicked!');
    counter = counter - 1;
    console.log(counter);
  }
  
  
  return (
    <div>
      <h3>Counter Component</h3>
      <p>The counter current value is: {counter}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  )
}

export default Counter