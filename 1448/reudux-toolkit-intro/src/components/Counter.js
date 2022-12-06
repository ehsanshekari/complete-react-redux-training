import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {decrement, increment, incrementByAmount} from '../features/counterSlice';

function Counter() {
  const {count} = useSelector(store => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div> The counter current value is: {count}</div>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(incrementByAmount(7))}>INCREMENT BY 7</button>
    </div>
  );
}

export default Counter;
