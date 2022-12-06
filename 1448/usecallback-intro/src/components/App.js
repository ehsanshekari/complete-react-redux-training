import { useCallback, useState } from 'react';

import Names from './Names';

const App = () => {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(['Ehsan']);

  const increment = () => {
    setCount((count) => count + 1);
  };

  // const addName = () => {
  //   setNames([...names, 'MY NEW NAME']);
  //   // THE WRONG WAY
  //   // names.push('MY NEW NAME');
  //   // setNames(names);
  // }

  const addName = useCallback(() => {
    setNames([...names, 'MY NEW NAME']);
  }, [names]);

  return (
    <div>
      <Names names={names} addName={addName} />
      <div>
        count: {count}
        <br />
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
};

export default App;
