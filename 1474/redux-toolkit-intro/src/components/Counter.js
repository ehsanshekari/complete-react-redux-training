import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counterSlice';

function Counter() {
  const {count} = useSelector(store => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>The current value is: {count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>increment by 5</button>
    </div>
  );
}

export default Counter;
