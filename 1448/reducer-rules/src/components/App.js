import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addName } from '../redux';

function App() {
  const [name, setName] = useState('');
  // const [nameArray, setNameArray] = useState(['Ehsan']);
  const names = useSelector((store) => store.names);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addName(name));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={clickHandler}>Add name</button>
      {names.map((n, i) => (
        <p key={i}>{n}</p>
      ))}
    </div>
  );
}

export default App;
