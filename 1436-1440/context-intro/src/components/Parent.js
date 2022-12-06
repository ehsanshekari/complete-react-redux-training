import Child from './Child';
import React from 'react';

function Parent({theme}) {
  return (
    <div>
      This is Parent
      <Child theme={theme}/>
    </div>
  );
}

export default Parent;
