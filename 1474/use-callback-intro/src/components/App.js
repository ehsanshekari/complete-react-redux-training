import { useState, useCallback } from 'react';

import Names from './Names';

const App = () => {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(['Ehsan']);

  const increment = () => {
    setCount((count) => count + 1);
  };

  // const addName = () => {
  //   setNames([...names, 'new name']);
  // };

  const addName = useCallback(() => {
    setNames(() => [...names, 'new name']);
  }, [names]);

  return (
    <div className="container mt-3">
      <Names items={names} addName={addName} />
      <hr />
      <div>
        count: {count}
        <br />
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
};

export default App;
