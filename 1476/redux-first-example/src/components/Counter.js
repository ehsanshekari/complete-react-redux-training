import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../store/action-creators';

function Counter() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Current Value: {counter}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        DECREMENT
      </button>
    </div>
  );
}

export default Counter;
