import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, incrementByAmount} from '../redux/features/counterSlice';

function Counter() {
  const {count} = useSelector(store => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>The count is: {count}</h3>
      <button onClick={() => {dispatch(increment())}}>increment</button>
      <button onClick={() => {dispatch(decrement())}}>decrement</button>
      <button onClick={() => {dispatch(incrementByAmount(7))}}>increment by 7</button>
    </div>
  )
}

export default Counter