import React, {memo} from 'react';

const OptimizedComponent = (props) => {
  console.log('--------- OptimizedComponent ---------');

  return <div>Optimized Component: {props.name}</div>;
};

export default memo(OptimizedComponent);