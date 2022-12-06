import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName } from '../store';

// DO NOT MUTATE STATE
function App() {
  const [newName, setNewName] = useState('');
  // const [names, setNames] = useState(['Ehsan']);
  const names = useSelector((store) => store.names);
  const dispatch = useDispatch();

  // const clickHandler = () => {
  //   names.push(newName);
  //   setNames(names);
  // }

  // const clickHandler = () => {
  //   setNames([...names, newName]);
  // }

  const clickHandler = () => {
    dispatch(addName(newName));
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={clickHandler}>Add your name</button>
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default App;
