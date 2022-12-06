// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../redux/action-creators';

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Current value is: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

// const mapsStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = () => {}

// export default connect(mapsStateToProps, {
//   increment: increment,
//   decrement: decrement,
// })(Counter);
