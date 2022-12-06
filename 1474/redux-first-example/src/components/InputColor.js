import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setColor } from '../store/action-creators';

function InputColor() {
  const [inputColor, setInputColor] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
      />
      <button onClick={() => dispatch(setColor(inputColor))}>SET COLOR</button>
    </div>
  );
}

export default InputColor;
