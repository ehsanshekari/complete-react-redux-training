import React from 'react';
import { useSelector } from 'react-redux';

import Counter from './Counter';
import ColorInput from './ColorInput';

function App() {
  const color = useSelector((store) => store.color);
  return (
    <div>
      <p style={{ color: color }}>This is a colorful paragraph</p>
      <hr />
      <Counter />
      <hr />
      <ColorInput />
    </div>
  );
}

export default App;
