import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, incrementByAmount } from '../features/counterSlice';

function Counter() {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Current value counter is: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(7))}>Increment by 7</button>
    </div>
  );
}

export default Counter;
