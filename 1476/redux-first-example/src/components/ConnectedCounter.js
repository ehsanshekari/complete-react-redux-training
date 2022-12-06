// THIS WORKS WITH BOTH FUNCTIONAL AND CLASS-BASED COMPONENTS
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../store/action-creators';

function Counter(props) {
  console.log(props);

  return (
    <div>
      <div>Current Value: {props.counter}</div>
      <button
        onClick={() => {
          props.increment();
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          props.decrement();
        }}
      >
        DECREMENT
      </button>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { counter: store.counter };
};

export default connect(mapStateToProps, {
  increment,
  decrement,
})(Counter);
