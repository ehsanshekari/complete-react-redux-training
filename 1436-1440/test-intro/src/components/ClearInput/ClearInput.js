import { useState } from 'react';

function ClearInput() {
  const [inputValue, setInputValue] = useState('');

  const btnClicked = () => {
    setInputValue('');
  };

  return (
    <div className="mt=5">
      <input
        placeholder="type your name"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={btnClicked}>Clear</button>
    </div>
  );
}

export default ClearInput;
