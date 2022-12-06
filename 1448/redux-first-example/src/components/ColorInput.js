import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeColor } from '../redux/action-creators';

function ColorInput() {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(changeColor(color))}>Set Color</button>
    </div>
  );
}

export default ColorInput;
