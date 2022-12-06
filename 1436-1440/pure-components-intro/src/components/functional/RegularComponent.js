import React from 'react';

const RegularComponent = (props) => {
  console.log('--------- RegularComponent ---------');

  return <div>Regular Component: {props.name}</div>;
};

export default RegularComponent;
