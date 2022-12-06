import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../store/action-creators';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);

  return (
    <div>
      <div>Current Value: {counter}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
