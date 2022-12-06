import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/action-creators';

function Counter(props) {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Current value of counter is: {counter}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <div>Current value of counter is: {props.counter}</div>
      <button onClick={() => props.increment()}>Increment</button>
      <button onClick={() => props.decrement()}>Decrement</button> */}
    </div>
  );
}

export default Counter;

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = () => {}

// export default connect(mapStateToProps, {
//   increment: increment,
//   decrement: decrement,
// })(Counter);
