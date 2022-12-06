import {memo} from 'react';

const OptimizedComponent = (props) => {
  console.log('----- OPTIMIZED COMPONENT -----');
  return <div>OptimizedComponent: {props.name}</div>
}

export default memo(OptimizedComponent);